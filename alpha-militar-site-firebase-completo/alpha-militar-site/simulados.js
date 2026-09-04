const disciplinas = [
      {
        nome:"Matemática", icone:"", nivel:"avancado", progresso:68,
        desc:"Base forte para ESA, EsPCEx, EEAR, AFA e EFOMM.",
        topicos:["Razão e proporção","Regra de três","Porcentagem","Juros simples e compostos","Equações","Funções","Logaritmos","Trigonometria","Geometria plana","Geometria espacial","Análise combinatória","Probabilidade","Estatística"]
      },
      {
        nome:"Português", icone:"", nivel:"avancado", progresso:86,
        desc:"Interpretação, gramática e escrita para provas militares.",
        topicos:["Interpretação de texto","Ortografia","Acentuação","Classes gramaticais","Sintaxe","Concordância","Regência","Crase","Pontuação","Figuras de linguagem","Coesão e coerência","Redação oficial"]
      },
      {
        nome:"Redação", icone:"", nivel:"medio", progresso:72,
        desc:"Treino de escrita para desenvolver textos claros e bem estruturados.",
        topicos:["Dissertação argumentativa","Introdução","Desenvolvimento","Conclusão","Repertório sociocultural","Conectivos","Coesão","Coerência","Proposta de intervenção","Correção por critérios"]
      },
      {
        nome:"História", icone:"", nivel:"medio", progresso:74,
        desc:"História do Brasil e História Geral com foco em concursos.",
        topicos:["Brasil Colônia","Brasil Império","Primeira República","Era Vargas","Ditadura Militar","Nova República","Antiguidade","Idade Média","Guerras Mundiais","Guerra Fria"]
      },
      {
        nome:"Geografia", icone:"", nivel:"medio", progresso:79,
        desc:"Brasil, mundo, ambiente, economia e geopolítica.",
        topicos:["Cartografia","Climatologia","Relevo","Hidrografia","População","Urbanização","Globalização","Geopolítica","Economia mundial","Geografia do Brasil","Questões ambientais"]
      },
      {
        nome:"Física", icone:"", nivel:"avancado", progresso:54,
        desc:"Conteúdos essenciais para provas como AFA, EsPCEx, EFOMM e EEAR.",
        topicos:["Cinemática","Dinâmica","Leis de Newton","Trabalho e energia","Impulso e quantidade de movimento","Hidrostática","Termologia","Óptica","Ondulatória","Eletricidade","Magnetismo"]
      },
      {
        nome:"Química", icone:"", nivel:"avancado", progresso:57,
        desc:"Química geral, físico-química e orgânica.",
        topicos:["Estrutura atômica","Tabela periódica","Ligações químicas","Funções inorgânicas","Reações químicas","Estequiometria","Soluções","Termoquímica","Eletroquímica","Química orgânica"]
      },
      {
        nome:"Inglês", icone:"", nivel:"medio", progresso:61,
        desc:"Leitura e interpretação para provas militares.",
        topicos:["Reading comprehension","Vocabulário","Pronomes","Tempos verbais","Modal verbs","Prepositions","False friends","Text skimming","Text scanning"]
      },
      {
        nome:"Informática", icone:"", nivel:"base", progresso:70,
        desc:"Tecnologia básica e segurança digital para concursos.",
        topicos:["Windows","Word","Excel","PowerPoint","Internet","Navegadores","E-mail","Segurança digital","Redes","Conceitos de hardware e software"]
      },
      {
        nome:"Raciocínio Lógico", icone:"", nivel:"medio", progresso:64,
        desc:"Lógica, padrões e resolução rápida de problemas.",
        topicos:["Proposições","Conectivos lógicos","Tabelas verdade","Sequências","Diagramas","Problemas de lógica","Conjuntos","Princípio da contagem"]
      }
    ];

    const trilhas = [
      {nome:"ESA", foco:"Português, Matemática, História, Geografia e Redação", itens:["Base de Matemática","Gramática e interpretação","História do Brasil","Geografia do Brasil","Redação semanal"]},
      {nome:"EsPCEx", foco:"Matemática, Física, Química, História, Geografia, Português e Inglês", itens:["Matemática avançada","Física completa","Química geral","Humanas","Inglês instrumental"]},
      {nome:"EEAR", foco:"Português, Matemática, Física e Inglês", itens:["Álgebra e funções","Física básica","Interpretação textual","Vocabulário em inglês"]},
      {nome:"AFA", foco:"Matemática, Física, Português, Inglês e Redação", itens:["Trigonometria","Mecânica","Óptica","Redação","Inglês"]},
      {nome:"EFOMM", foco:"Matemática, Física, Português, Inglês e Redação", itens:["Matemática forte","Física aplicada","Interpretação","Inglês","Redação"]},
      {nome:"Base Militar", foco:"Trilha inicial para quem está começando do zero", itens:["Português base","Matemática base","Rotina de estudos","Questões diárias","Simulado diagnóstico"]}
    ];

    const simulados = [
      {titulo:"ESA 2026 - Completo", tipo:"prova", desc:"Simulado completo com Português, Matemática, História e Geografia.", questoes:"50 questões", tempo:"2h", nivel:"Intermediário"},
      {titulo:"EsPCEx - Diagnóstico", tipo:"prova", desc:"Teste para avaliar base em exatas, humanas, português e inglês.", questoes:"60 questões", tempo:"3h", nivel:"Avançado"},
      {titulo:"EEAR - Básico", tipo:"prova", desc:"Português, Matemática, Física e Inglês.", questoes:"40 questões", tempo:"1h40", nivel:"Médio"},
      {titulo:"AFA - Treino Forte", tipo:"prova", desc:"Foco em Matemática, Física, Português e Inglês.", questoes:"60 questões", tempo:"3h", nivel:"Avançado"},
      {titulo:"Matemática Essencial", tipo:"materia", desc:"Porcentagem, regra de três, equações, funções e geometria.", questoes:"30 questões", tempo:"1h", nivel:"Médio"},
      {titulo:"Português Militar", tipo:"materia", desc:"Interpretação, gramática, concordância, regência e crase.", questoes:"30 questões", tempo:"50min", nivel:"Médio"},
      {titulo:"Física - Mecânica", tipo:"materia", desc:"Cinemática, dinâmica, trabalho, energia e leis de Newton.", questoes:"25 questões", tempo:"50min", nivel:"Avançado"},
      {titulo:"Química Geral", tipo:"materia", desc:"Atomística, tabela periódica, ligações e estequiometria.", questoes:"25 questões", tempo:"50min", nivel:"Médio"},
      {titulo:"Redação - Tema Militar", tipo:"redacao", desc:"Treino de dissertação com estrutura e repertório.", questoes:"1 tema", tempo:"1h", nivel:"Orientado"}
    ];

    function atualizarRelogio(){
      document.getElementById("clock").textContent = new Date().toLocaleString("pt-BR",{weekday:"short",hour:"2-digit",minute:"2-digit",second:"2-digit"});
    }
    setInterval(atualizarRelogio,1000); atualizarRelogio();

    function montarTabs(){
      const tabs = document.getElementById("tabsDisciplinas");
      tabs.innerHTML = `<button class="tab active" onclick="selecionarTab(this,'todas')">Todas</button>` + disciplinas.map(d => `<button class="tab" onclick="selecionarTab(this,'${d.nome}')">${d.icone} ${d.nome}</button>`).join("");
    }

    let tabAtual = "todas";
    function selecionarTab(btn,nome){
      tabAtual = nome;
      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      btn.classList.add("active");
      filtrarDisciplinas();
    }

    function montarDisciplinas(lista=disciplinas){
      document.getElementById("listaDisciplinas").innerHTML = lista.map(d => `
        <article class="discipline-card">
          <div class="card-top"><h4>${d.icone} ${d.nome}</h4><span class="badge">${d.progresso}%</span></div>
          <p>${d.desc}</p>
          <div class="topics">${d.topicos.slice(0,5).map(t=>`<span>${t}</span>`).join("")}</div>
          <div class="bar" style="margin-bottom:14px"><span style="width:${d.progresso}%"></span></div>
          <button class="btn primary" onclick="abrirDisciplina('${d.nome}')">Estudar disciplina</button>
        </article>
      `).join("");
    }

    function filtrarDisciplinas(){
      const busca = document.getElementById("buscaDisciplina").value.toLowerCase();
      const nivel = document.getElementById("filtroNivel").value;
      const lista = disciplinas.filter(d=>{
        const bateTab = tabAtual === "todas" || d.nome === tabAtual;
        const texto = (d.nome+" "+d.desc+" "+d.topicos.join(" ")).toLowerCase();
        const bateBusca = texto.includes(busca);
        const bateNivel = nivel === "todos" || d.nivel === nivel;
        return bateTab && bateBusca && bateNivel;
      });
      montarDisciplinas(lista);
    }

    function montarDesempenho(){
      document.getElementById("listaDesempenho").innerHTML = disciplinas.map(d => `
        <div class="subject-item">
          <label>${d.icone} ${d.nome} <small>${d.progresso}%</small></label>
          <div class="bar"><span style="width:${d.progresso}%"></span></div>
        </div>
      `).join("");
    }

    function montarTrilhas(){
      document.getElementById("listaTrilhas").innerHTML = trilhas.map(t => `
        <article class="trail-card">
          <div class="card-top"><h4>🎖️ ${t.nome}</h4><span class="badge">Trilha</span></div>
          <p>${t.foco}</p>
          <ul class="check-list">${t.itens.map(i=>`<li>✅ ${i}</li>`).join("")}</ul>
        </article>
      `).join("");
    }

    function montarSimulados(lista=simulados){
      document.getElementById("listaSimulados").innerHTML = lista.map(s => `
        <article class="sim-card">
          <div class="card-top"><h4>${s.titulo}</h4><span class="badge">${s.nivel}</span></div>
          <p>${s.desc}</p>
          <div class="sim-meta"><span>📝 ${s.questoes}</span><span>⏱️ ${s.tempo}</span><span>📌 ${s.tipo}</span></div>
          <button class="btn primary" onclick="abrirSimulado('${s.titulo}')">Iniciar simulado</button>
        </article>
      `).join("");
    }

    function filtrarSimulados(){
      const busca = document.getElementById("buscaSimulado").value.toLowerCase();
      const tipo = document.getElementById("filtroSimulado").value;
      const lista = simulados.filter(s=>{
        const bateBusca = (s.titulo+" "+s.desc).toLowerCase().includes(busca);
        const bateTipo = tipo === "todos" || s.tipo === tipo;
        return bateBusca && bateTipo;
      });
      montarSimulados(lista);
    }

    function abrirDisciplina(nome){
      const d = disciplinas.find(x=>x.nome===nome);
      document.getElementById("modalTitulo").textContent = `${d.icone} ${d.nome}`;
      document.getElementById("modalDescricao").textContent = d.desc;
      document.getElementById("modalTopicos").innerHTML = d.topicos.map((t,i)=>`<li>${i+1}. ${t}</li>`).join("");
      document.getElementById("modalEstudo").classList.add("active");
    }
    function fecharModalEstudo(){document.getElementById("modalEstudo").classList.remove("active")}

    function abrirSimulado(nome){
      document.getElementById("tituloSimulado").textContent = nome;
      document.getElementById("resultado").classList.remove("active");
      document.getElementById("modalSimulado").classList.add("active");
    }
    function fecharSimulado(){document.getElementById("modalSimulado").classList.remove("active")}

    function finalizarSimulado(){
      const respostas = ["q1","q2","q3"];
      let pontos = 0;
      respostas.forEach(q=>{
        const marcada = document.querySelector(`input[name="${q}"]:checked`);
        if(marcada) pontos += Number(marcada.value);
      });
      const nota = Math.round((pontos/respostas.length)*100);
      document.getElementById("notaFinal").textContent = `Resultado: ${nota}% de aproveitamento`;
      let texto = nota >= 80 ? "Excelente. Continue revisando os erros para manter constância." : nota >= 50 ? "Bom começo. Revise os pontos errados e refaça o simulado depois." : "Reforce a base antes de avançar. Priorize Matemática básica, Português e revisão diária.";
      document.getElementById("recomendacao").textContent = texto;
      document.getElementById("resultado").classList.add("active");

      const feitos = document.getElementById("simuladosFeitos");
      feitos.textContent = Number(feitos.textContent) + 1;
      const hoje = new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
      document.getElementById("historicoTabela").innerHTML = `<tr><td>${document.getElementById("tituloSimulado").textContent}</td><td>${nota}%</td><td>${hoje}</td></tr>` + document.getElementById("historicoTabela").innerHTML;
    }

    document.addEventListener("keydown",e=>{
      if(e.key==="Escape"){fecharModalEstudo();fecharSimulado();}
    });

    montarTabs();
    montarDisciplinas();
    montarDesempenho();
    montarTrilhas();
    montarSimulados();
