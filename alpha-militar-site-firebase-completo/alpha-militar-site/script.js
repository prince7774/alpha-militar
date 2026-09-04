import { auth, db, googleProvider } from './firebase-config.js';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  limit
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const $ = id => document.getElementById(id);
const menuBtn = $('menuBtn');
const nav = $('nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('active'));
document.querySelectorAll('.nav-item>a').forEach(a => {
  a.addEventListener('click', e => {
    if (innerWidth < 1180) {
      e.preventDefault();
      a.parentElement.classList.toggle('open');
    }
  });
});

let online = 0;
let tests = 42;
let paper = 2480;
let studyHours = 18;
let perf = 84;
let doneTests = 5;
const levels = ['Recruta', 'Soldado', 'Cabo', 'Sargento', 'Oficial'];
let levelIndex = 2;
let firebaseOnlineActive = false;
let firebaseRankingActive = false;
let firebaseAvisosActive = false;

function updateClock() {
  const now = new Date();
  $('realtimeClock').textContent = now.toLocaleString('pt-BR', {
    weekday: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}
setInterval(updateClock, 1000);
updateClock();

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function realtime() {
  if (!firebaseOnlineActive) {
    online = 0;
  }

  if (!firebaseRankingActive) {
    tests += Math.random() > .55 ? 1 : 0;
    paper += Math.random() > .7 ? 4 : 0;
    perf = Math.min(98, Math.max(62, perf + (Math.random() > .55 ? 1 : -1)));
    studyHours = Math.min(40, studyHours + (Math.random() > .72 ? 1 : 0));
    doneTests = Math.min(30, doneTests + (Math.random() > .82 ? 1 : 0));
    if (doneTests > 8) levelIndex = 3;
    if (doneTests > 16) levelIndex = 4;
  }

  setText('onlineUsers', online);
  setText('panelOnline', online);
  setText('testsToday', tests);
  setText('megaTests', tests);
  setText('paperSaved', paper.toLocaleString('pt-BR'));
  setText('liveStudyHours', studyHours + 'h');
  setText('mHours', studyHours + 'h');
  setText('livePerformance', perf + '%');
  setText('mPerf', perf + '%');
  setText('mTests', doneTests);
  setText('mLevel', levels[levelIndex]);
}
setInterval(realtime, 3500);
realtime();

function countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 18);
  target.setHours(8, 0, 0, 0);
  const diff = target - new Date();
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff % 86400000 / 3600000);
  setText('countdown', `${d}d ${h}h`);
}
setInterval(countdown, 60000);
countdown();

const tips = ['Revise regra de três hoje.', 'Faça 20 questões de Português.', 'Treine uma redação de 25 linhas.', 'Refaça seus erros do último simulado.'];
setInterval(() => {
  setText('aiLiveTip', tips[Math.floor(Math.random() * tips.length)]);
  setText('studyTip', tips[Math.floor(Math.random() * tips.length)]);
}, 5000);

const toast = $('toast');

function mostrarToast(texto) {
  if (!toast) return;
  toast.textContent = texto;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3200);
}
setInterval(() => {
  if (!firebaseAvisosActive) mostrarToast(alerts[Math.floor(Math.random() * alerts.length)]);
}, 9000);

const searchInput = $('searchInput');
const searchResults = $('searchResults');
const data = ['ESA Área Geral', 'EsPCEx 2026', 'EFOMM', 'AFA', 'EEAR', 'Redação militar', 'Matemática para concursos', 'Simulados inteligentes'];
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  if (!q) {
    searchResults.classList.remove('active');
    return;
  }
  const list = data.filter(x => x.toLowerCase().includes(q)).slice(0, 5);
  searchResults.innerHTML = list.map(x => `<div>${x}</div>`).join('') || '<div>Nenhum resultado encontrado</div>';
  searchResults.classList.add('active');
});

function iniciarSimulado() {
  const nota = Math.floor(Math.random() * 101);
  const box = $('resultadoSimulado');
  let msg = '';
  if (nota >= 85) msg = ` Excelente! Sua nota foi ${nota}%. Continue nesse ritmo.`;
  else if (nota >= 60) msg = ` Bom resultado! Sua nota foi ${nota}%. Revise os erros.`;
  else msg = ` Sua nota foi ${nota}%. A IA recomenda revisar Matemática e Português.`;
  if (box) box.textContent = msg;
  tests++;
  doneTests++;
  realtime();
}

function enviarMensagem() {
  const input = $('mensagemUsuario');
  const mensagens = $('mensagens');
  const texto = input.value.trim();
  if (!texto) return;
  if (!mensagens) return;
  mensagens.innerHTML += `<p><strong>Você:</strong> ${texto}</p>`;
  const t = texto.toLowerCase();
  let resposta = 'Monte uma rotina com 2 matérias por dia e 20 questões de revisão.';
  if (t.includes('matemática')) resposta = 'Para Matemática: revise porcentagem, regra de três, equações e geometria.';
  if (t.includes('redação')) resposta = 'Para Redação: treine introdução, desenvolvimento, conclusão e repertório.';
  if (t.includes('simulado')) resposta = 'Faça 1 simulado por semana e anote seus principais erros.';
  mensagens.innerHTML += `<p><strong>IA Alpha:</strong> ${resposta}</p>`;
  input.value = '';
  mensagens.scrollTop = mensagens.scrollHeight;
}

function abrirLogin() {
  const modal = $('loginModal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('body-lock');
  setTimeout(() => modal.querySelector('input')?.focus(), 80);
}

function fecharLogin() {
  const modal = $('loginModal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('body-lock');
}

function mostrarSenha() {
  const senha = $('senhaLogin');
  senha.type = senha.type === 'password' ? 'text' : 'password';
}

async function salvarUsuario(user) {
  const nome = user.displayName || (user.email ? user.email.split('@')[0] : 'Aluno Alpha');
  await setDoc(doc(db, 'usuarios', user.uid), {
    nome,
    email: user.email || '',
    patente: 'Cadete',
    xp: 100,
    nivel: 1,
    atualizadoEm: serverTimestamp()
  }, { merge: true });

  await setDoc(doc(db, 'usuariosOnline', user.uid), {
    nome,
    email: user.email || '',
    ultimoAcesso: 'online',
    atualizadoEm: serverTimestamp()
  }, { merge: true });
}

async function entrarEmailSenha(e) {
  e.preventDefault();
  const email = $('emailLogin').value.trim();
  const senha = $('senhaLogin').value.trim();

  if (!email || !senha) {
    mostrarToast(' Preencha email e senha.');
    return;
  }

  try {
    const credential = await signInWithEmailAndPassword(auth, email, senha);
    await salvarUsuario(credential.user);
    mostrarToast('✅ Login realizado com sucesso');
    fecharLogin();
  } catch (erroLogin) {
    try {
      const credential = await createUserWithEmailAndPassword(auth, email, senha);
      await salvarUsuario(credential.user);
      mostrarToast('✅ Conta criada e login realizado');
      fecharLogin();
    } catch (erroCadastro) {
      console.error(erroCadastro);
      mostrarToast('❌ Erro no login. Confira email/senha ou regras do Firebase.');
    }
  }
}

async function entrarComGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    await salvarUsuario(result.user);
    mostrarToast('✅ Login com Google realizado');
    fecharLogin();
  } catch (erro) {
    console.error(erro);
    mostrarToast('❌ Não foi possível entrar com Google.');
  }
}

async function sairDaConta() {
  try {
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, 'usuariosOnline', user.uid), {
        ultimoAcesso: 'offline',
        atualizadoEm: serverTimestamp()
      }, { merge: true });
    }
    await signOut(auth);
    mostrarToast('Você saiu da conta.');
  } catch (erro) {
    console.error(erro);
  }
}

onAuthStateChanged(auth, async user => {
  const loginButtons = document.querySelectorAll('.header-actions .btn');
  if (loginButtons.length < 2) return;

  if (user) {
    await salvarUsuario(user);

    const nome = user.displayName || user.email?.split('@')[0] || 'Aluno';

    loginButtons[0].textContent = 'Sair';
    loginButtons[0].onclick = sairDaConta;

    loginButtons[1].textContent = nome;
    loginButtons[1].onclick = abrirAreaAluno;

  } else {
    loginButtons[0].textContent = 'Login';
    loginButtons[0].onclick = abrirLogin;

    loginButtons[1].textContent = 'Área do aluno';
    loginButtons[1].onclick = abrirLogin;
  }
});



function conectarFirestoreTempoReal() {
  try {
    onSnapshot(collection(db, 'usuariosOnline'), snapshot => {
      firebaseOnlineActive = true;
      let count = 0;
      snapshot.forEach(docSnap => {
        const user = docSnap.data();
        if ((user.ultimoAcesso || '').toString().toLowerCase() === 'online') count++;
      });
      online = count;
      setText('onlineUsers', online);
      setText('panelOnline', online);
    });

    onSnapshot(collection(db, 'avisos'), snapshot => {
      firebaseAvisosActive = true;
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          const aviso = change.doc.data();
          if (aviso.titulo) mostrarToast(' ' + aviso.titulo);
        }
      });
    });

    onSnapshot(query(collection(db, 'ranking'), orderBy('xp', 'desc'), limit(1)), snapshot => {
      firebaseRankingActive = true;
      snapshot.forEach(docSnap => {
        const rank = docSnap.data();
        if (rank.xp) {
          doneTests = Math.max(5, Math.floor(Number(rank.xp) / 300));
          if (rank.xp >= 1500) levelIndex = 3;
          if (rank.xp >= 2500) levelIndex = 4;
          realtime();
        }
      });
    });

    onSnapshot(collection(db, 'simulados'), snapshot => {
      let totalQuestoes = 0;
      let ativos = 0;
      snapshot.forEach(docSnap => {
        const sim = docSnap.data();
        const ativo = sim.ativo === true || sim.ATIVO === true;
        if (ativo) ativos++;
        totalQuestoes += Number(sim.questoes || 0);
      });
      if (ativos > 0) {
        tests = Math.max(tests, ativos);
        setText('testsToday', tests);
        setText('megaTests', tests);
      }
    });
  } catch (erro) {
    console.error('Erro ao conectar Firestore:', erro);
    mostrarToast(' Firestore não conectou. Confira as regras do banco.');
  }
}
conectarFirestoreTempoReal();

document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharLogin(); });
document.addEventListener('click', e => { const modal = $('loginModal'); if (e.target === modal) fecharLogin(); });

window.iniciarSimulado = iniciarSimulado;
window.enviarMensagem = enviarMensagem;
window.abrirLogin = abrirLogin;
window.fecharLogin = fecharLogin;
window.mostrarSenha = mostrarSenha;
window.entrarEmailSenha = entrarEmailSenha;
window.entrarComGoogle = entrarComGoogle;
window.sairDaConta = sairDaConta;

function abrirMenuLateral() {
  document.getElementById("menuLateral")?.classList.add("ativo");
  document.getElementById("sideOverlay")?.classList.add("ativo");
}

function fecharMenuLateral() {
  document.getElementById("menuLateral")?.classList.remove("ativo");
  document.getElementById("sideOverlay")?.classList.remove("ativo");
}

window.abrirMenuLateral = abrirMenuLateral;
window.fecharMenuLateral = fecharMenuLateral;

async function abrirAreaAluno() {
  const user = auth.currentUser;

  if (!user) {
    abrirLogin();
    return;
  }

  const ref = doc(db, "usuarios", user.uid);
  const snap = await getDoc(ref);

  let dados = {};

  if (snap.exists()) {
    dados = snap.data();
  }

  const nome = dados.nome || user.displayName || user.email.split("@")[0] || "Aluno";
  const foto = user.photoURL || dados.foto || "";

  setText("perfilNome", nome);
  setText("perfilEmail", user.email || "sem email");
  setText("perfilLetra", nome.charAt(0).toUpperCase());

  setText("perfilXp", dados.xp || 100);
  setText("perfilNivel", dados.nivel || 1);
  setText("perfilSimulados", dados.simulados || 0);
  setText("perfilPlano", dados.plano || "Gratuito");
  

  const img = document.getElementById("perfilFoto");
  const letra = document.getElementById("perfilLetra");

  if (foto) {
    img.src = foto;
    img.style.display = "block";
    letra.style.display = "none";
  } else {
    img.style.display = "none";
    letra.style.display = "block";
  }

  document.getElementById("areaAlunoModal").classList.add("active");
  document.getElementById("areaAlunoModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("body-lock");
}





function fecharAreaAluno() {
  const modal = document.getElementById("areaAlunoModal");
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("body-lock");
}

window.fecharAreaAluno = fecharAreaAluno;


function iniciarCarrosselConcursos() {
  const carousel = document.getElementById('concursosCarousel');
  const dotsBox = document.getElementById('concursosDots');
  if (!carousel || !dotsBox) return;

  const cards = Array.from(carousel.querySelectorAll('.concurso-card'));
  const getPerPage = () => innerWidth <= 700 ? 1 : innerWidth <= 1180 ? 2 : 4;
  const getPages = () => Math.max(1, Math.ceil(cards.length / getPerPage()));

  function renderDots() {
    dotsBox.innerHTML = '';
    for (let i = 0; i < getPages(); i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Ir para página ${i + 1}`);
      dot.addEventListener('click', () => {
        carousel.scrollTo({ left: i * carousel.clientWidth, behavior: 'smooth' });
      });
      dotsBox.appendChild(dot);
    }
    atualizarDots();
  }

  function atualizarDots() {
    const page = Math.round(carousel.scrollLeft / carousel.clientWidth);
    dotsBox.querySelectorAll('button').forEach((dot, index) => {
      dot.classList.toggle('active', index === page);
    });
  }

  carousel.addEventListener('scroll', () => requestAnimationFrame(atualizarDots));
  addEventListener('resize', renderDots);
  renderDots();
}

function moverConcursos(direcao) {
  const carousel = document.getElementById('concursosCarousel');
  if (!carousel) return;
  carousel.scrollBy({ left: direcao * carousel.clientWidth, behavior: 'smooth' });
}

window.moverConcursos = moverConcursos;
iniciarCarrosselConcursos();

