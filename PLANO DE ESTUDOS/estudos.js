const planos = {
  espcex: {
    nome: 'EsPCEx',
    materias: ['Português', 'Redação', 'Física', 'Química', 'Matemática', 'Geografia', 'História', 'Inglês'],
    pesos: { exatas: ['Matemática', 'Física', 'Química'], linguagens: ['Português', 'Redação', 'Inglês'], humanas: ['História', 'Geografia'] }
  },
  esa: {
    nome: 'ESA',
    materias: ['Português', 'Redação', 'Matemática', 'História', 'Geografia', 'Inglês'],
    pesos: { exatas: ['Matemática'], linguagens: ['Português', 'Redação', 'Inglês'], humanas: ['História', 'Geografia'] }
  },
  ime: {
    nome: 'IME',
    materias: ['Matemática', 'Física', 'Química', 'Português', 'Inglês', 'Redação'],
    pesos: { exatas: ['Matemática', 'Física', 'Química'], linguagens: ['Português', 'Inglês', 'Redação'], humanas: [] }
  },
  npor: {
    nome: 'NPOR',
    materias: ['Português', 'Matemática', 'História', 'Geografia', 'Conhecimentos Militares'],
    pesos: { exatas: ['Matemática'], linguagens: ['Português'], humanas: ['História', 'Geografia', 'Conhecimentos Militares'] }
  },
  ott: {
    nome: 'OTT/STT',
    materias: ['Português', 'Raciocínio Lógico', 'Conhecimentos Específicos', 'Legislação Militar', 'Atualidades'],
    pesos: { exatas: ['Raciocínio Lógico'], linguagens: ['Português'], humanas: ['Legislação Militar', 'Atualidades', 'Conhecimentos Específicos'] }
  },
  geral: {
    nome: 'EB Geral',
    materias: ['Português', 'Matemática', 'Redação', 'História', 'Geografia', 'Inglês', 'Física', 'Química'],
    pesos: { exatas: ['Matemática', 'Física', 'Química'], linguagens: ['Português', 'Redação', 'Inglês'], humanas: ['História', 'Geografia'] }
  }
};

const dias = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
const semanaGrid = document.getElementById('semanaGrid');
const checklistDiario = document.getElementById('checklistDiario');
const metaSemanalHero = document.getElementById('metaSemanalHero');
const progressoHero = document.getElementById('progressoHero');
const diaAtualHero = document.getElementById('diaAtualHero');

function hojeNome() {
  const indice = new Date().getDay();
  return ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][indice];
}

function escolherMaterias(plano, foco) {
  const base = [...plano.materias];
  if (foco === 'equilibrado') return base;
  const prioridade = plano.pesos[foco] || [];
  return [...prioridade, ...base.filter(materia => !prioridade.includes(materia))];
}

function criarBlocos(materias, diaIndex, horasDia) {
  const blocos = [];
  const quantidade = diaIndex === 5 ? 4 : diaIndex === 6 ? 2 : 3;

  for (let i = 0; i < quantidade; i++) {
    const materia = materias[(diaIndex + i) % materias.length];
    const tipo = i === quantidade - 1 ? 'Questões + correção' : 'Teoria + resumo';
    const tempo = Math.max(40, Math.round((horasDia * 60) / quantidade));
    blocos.push({ materia, tipo, tempo });
  }

  if (diaIndex === 6) {
    blocos.push({ materia: 'Revisão semanal', tipo: 'Erros, flashcards e planejamento', tempo: 45 });
  }

  return blocos;
}

function gerarRotina() {
  const concurso = document.getElementById('concursoSelect').value;
  const foco = document.getElementById('focoSelect').value;
  const horas = Number(document.getElementById('horasSemana').value) || 24;
  const plano = planos[concurso];
  const materias = escolherMaterias(plano, foco);
  const horasDia = horas / 6;
  const hoje = hojeNome();

  metaSemanalHero.textContent = `${horas}h`;
  diaAtualHero.textContent = hoje;

  semanaGrid.innerHTML = dias.map((dia, diaIndex) => {
    const blocos = criarBlocos(materias, diaIndex, horasDia);
    const idDia = dia.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const itens = blocos.map((bloco, blocoIndex) => {
      const id = `${concurso}-${idDia}-${blocoIndex}`;
      const checked = localStorage.getItem(id) === 'true' ? 'checked' : '';
      return `
        <label class="bloco-estudo">
          <input type="checkbox" data-check="${id}" ${checked}>
          <div>
            <strong>${bloco.materia}</strong>
            <span>${bloco.tipo} - ${bloco.tempo} min</span>
          </div>
        </label>
      `;
    }).join('');

    return `
      <article class="dia-card ${dia === hoje ? 'hoje' : ''}">
        <h3>${dia}</h3>
        <div class="carga">${diaIndex === 6 ? 'Revisão leve' : `${Math.round(horasDia * 10) / 10}h de estudo`}</div>
        ${itens}
      </article>
    `;
  }).join('');

  montarChecklist(plano.nome);
  ativarChecks();
  atualizarProgresso();
}

function montarChecklist(nomeConcurso) {
  const itens = [
    `Abrir o material do ${nomeConcurso}`,
    'Estudar o primeiro bloco sem celular',
    'Resolver no mínimo 20 questões',
    'Anotar erros no caderno de revisão',
    'Separar a missão de amanhã'
  ];

  checklistDiario.innerHTML = itens.map((item, index) => {
    const id = `missao-${index}`;
    const checked = localStorage.getItem(id) === 'true' ? 'checked' : '';
    return `
      <label class="check-item">
        <input type="checkbox" data-check="${id}" ${checked}>
        <span>${item}</span>
      </label>
    `;
  }).join('');
}

function ativarChecks() {
  document.querySelectorAll('[data-check]').forEach(input => {
    input.addEventListener('change', () => {
      localStorage.setItem(input.dataset.check, input.checked);
      atualizarProgresso();
    });
  });
}

function atualizarProgresso() {
  const checks = Array.from(document.querySelectorAll('[data-check]'));
  if (!checks.length) {
    progressoHero.textContent = '0%';
    return;
  }
  const feitos = checks.filter(input => input.checked).length;
  progressoHero.textContent = `${Math.round((feitos / checks.length) * 100)}%`;
}

function resetarChecklist() {
  document.querySelectorAll('[data-check]').forEach(input => {
    input.checked = false;
    localStorage.removeItem(input.dataset.check);
  });
  atualizarProgresso();
}

let timerTotal = 50 * 60;
let timerAtual = timerTotal;
let timerIntervalo = null;
const timerDisplay = document.getElementById('timerDisplay');

function atualizarTimer() {
  const minutos = String(Math.floor(timerAtual / 60)).padStart(2, '0');
  const segundos = String(timerAtual % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutos}:${segundos}`;
}

function iniciarTimer() {
  if (timerIntervalo) return;
  timerIntervalo = setInterval(() => {
    timerAtual = Math.max(0, timerAtual - 1);
    atualizarTimer();
    if (timerAtual === 0) pausarTimer();
  }, 1000);
}

function pausarTimer() {
  clearInterval(timerIntervalo);
  timerIntervalo = null;
}

function resetarTimer() {
  pausarTimer();
  timerAtual = timerTotal;
  atualizarTimer();
}

function imprimirRotina() {
  window.print();
}

window.gerarRotina = gerarRotina;
window.resetarChecklist = resetarChecklist;
window.iniciarTimer = iniciarTimer;
window.pausarTimer = pausarTimer;
window.resetarTimer = resetarTimer;
window.imprimirRotina = imprimirRotina;

gerarRotina();
atualizarTimer();
