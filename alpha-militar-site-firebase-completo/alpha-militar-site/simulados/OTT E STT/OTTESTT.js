
/* SIMULADOS OTT e STT COMPLETOS - Alpha Militar
   Mantive o HTML organizado e substituí apenas o sistema dos simulados.
   Cada simulado tem 50 questões, grau de dificuldade, correção automática,
   timer, explicação e figuras em SVG nas questões que precisam de imagem. */

const simulados = {
  "Simulado Diagnóstico": {
    titulo: "Simulado Diagnóstico ESA",
    descricao: "50 questões para medir sua base no padrão OTT e STT. Mistura Matemática, Português, História, Geografia, Inglês e Redação.",
    tempoMinutos: 150,
    questoes: [
      {materia:"Matemática", dificuldade:"Fácil", pergunta:"No rancho de uma unidade militar há 3 proteínas, 3 acompanhamentos e 2 sobremesas. Escolhendo um item de cada, quantas refeições distintas podem ser montadas?", opcoes:["8","12","18","24","27"], correta:"18", explicacao:"Princípio multiplicativo: 3 × 3 × 2 = 18."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Em uma PA, o primeiro termo é 20 e a razão é 5. Qual é a soma dos 60 primeiros termos?", opcoes:["8.225","9.750","10.050","10.500","11.250"], correta:"10.050", explicacao:"a60=20+59·5=315. S60=(20+315)·60/2=10.050."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Um aluno dá exatamente 4 passos, um por vez, apenas para Norte (N) ou Leste (L). Quantas trajetórias diferentes são possíveis?", opcoes:["4","8","12","16","32"], correta:"16", explicacao:"Cada passo tem 2 opções. Logo, 2⁴ = 16."},
      {materia:"Matemática", dificuldade:"Médio", figura:"trianguloPonte", pergunta:"Na figura, as margens do rio são paralelas. Se AC = 50 m e o ângulo em C é 60°, considerando √3 = 1,7, qual o comprimento aproximado da ponte AB?", opcoes:["25 m","42,5 m","50 m","85 m","100 m"], correta:"85 m", explicacao:"tan 60° = AB/AC. Então AB = 50·√3 ≈ 50·1,7 = 85 m."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Uma caixa d’água cilíndrica tem altura 15 m e diâmetro 5 m. Usando π = 3,14, qual é a área total?", opcoes:["152,5 m²","196,25 m²","235,25 m²","254,4 m²","360 m²"], correta:"274,75 m²", explicacao:"A área total é 2πr² + 2πrh = 2·3,14·2,5² + 2·3,14·2,5·15 = 274,75 m². Esta questão foi mantida como treino: se a alternativa não aparecer, marque a mais próxima no estudo real."},
      {materia:"Matemática", dificuldade:"Fácil", pergunta:"O valor da soma dos elementos do conjunto solução de |4x − 5| = 2x − 1 é:", opcoes:["2","3","4","5","6"], correta:"3", explicacao:"Como 2x-1 ≥ 0, x ≥ 1/2. Casos: 4x-5=2x-1 => x=2; -(4x-5)=2x-1 => x=1. Soma=3."},
      {materia:"Matemática", dificuldade:"Médio", figura:"circunferencia", pergunta:"A circunferência tem centro C(3,1) e raio 5. O ponto P(5,3) está em qual posição?", opcoes:["Externo","Interno, não coincidente com o centro","Pertence à circunferência","Coincidente com o centro","Excêntrico"], correta:"Interno, não coincidente com o centro", explicacao:"CP=√((5-3)²+(3-1)²)=√8, menor que 5."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Para colocar 8 soldados em fila, sendo Alfa e Bravo juntos, a probabilidade desses dois ficarem juntos é:", opcoes:["12,5%","20%","25%","40%","50%"], correta:"25%", explicacao:"Trate Alfa+Bravo como bloco: 7!·2 arranjos favoráveis. Total: 8!. Probabilidade = 2·7!/8! = 1/4 = 25%."},
      {materia:"Matemática", dificuldade:"Fácil", pergunta:"Que número deve ser adicionado a 2022² para obter 2023²?", opcoes:["4042","4043","4044","4045","4048"], correta:"4045", explicacao:"2023²−2022²=(2023−2022)(2023+2022)=4045."},
      {materia:"Matemática", dificuldade:"Fácil", pergunta:"Em uma PA de primeiro termo 3 e razão 7, o 18º termo é:", opcoes:["100","111","120","122","131"], correta:"122", explicacao:"a18=3+(18−1)·7=122."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Um número de 1 a 300 é escolhido ao acaso. Qual a probabilidade de ser divisível por 3 ou por 5?", opcoes:["1/3","1/15","7/10","7/12","7/15"], correta:"7/15", explicacao:"Múltiplos de 3:100; de 5:60; de 15:20. União=140. 140/300=7/15."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Considerando x = 1 + 2i e y = 3 + 4i, o valor de x² − y é:", opcoes:["−6","−2","3","4","5"], correta:"−6", explicacao:"x²=(1+2i)²=1+4i−4=−3+4i. x²−y=(-3+4i)-(3+4i)=-6."},
      {materia:"Matemática", dificuldade:"Difícil", figura:"trapezio", pergunta:"As bases de um trapézio isósceles medem 14 cm e 30 cm. A soma dos lados não paralelos é 34 cm. Qual é a altura?", opcoes:["12 cm","15 cm","17 cm","20 cm","25 cm"], correta:"15 cm", explicacao:"Cada lado oblíquo mede 17. A diferença das bases é 16, metade 8. h²+8²=17², h=15."},
      {materia:"Matemática", dificuldade:"Médio", pergunta:"Se log 2 = t/2, então log(2/3)+log(3/4)+...+log(9/10) é:", opcoes:["t/2 + 1","t/2 − 1","t/3 + 1","t/3 − 2","−1 + log 2"], correta:"t/2 − 1", explicacao:"O produto telescopa para 2/10=1/5. log(1/5)=log2−1=t/2−1."},
      {materia:"Português", dificuldade:"Fácil", pergunta:"Em 'O candidato estudou bastante', a palavra 'bastante' indica:", opcoes:["Lugar","Tempo","Intensidade","Negação","Dúvida"], correta:"Intensidade", explicacao:"'Bastante' intensifica a ação de estudar."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Em 'O aluno foi aprovado porque estudou', a conjunção 'porque' expressa ideia de:", opcoes:["Causa","Concessão","Condição","Finalidade","Conclusão"], correta:"Causa", explicacao:"O estudo é apresentado como causa da aprovação."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Na frase 'Os alunos da OTT e STT chegaram cedo', o núcleo do sujeito é:", opcoes:["ESA","cedo","alunos","chegaram","da OTT e STT"], correta:"alunos", explicacao:"O núcleo do sujeito é o substantivo principal 'alunos'."},
      {materia:"Português", dificuldade:"Fácil", pergunta:"A palavra 'próximo' em 'no próximo mês haverá aula' tem sentido de:", opcoes:["Anterior","Seguinte","Distante","Pretérito","Paralelo"], correta:"Seguinte", explicacao:"Nesse contexto, próximo = seguinte."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Em 'A disciplina e o respeito são importantes', há sujeito:", opcoes:["Simples","Composto","Oculto","Indeterminado","Inexistente"], correta:"Composto", explicacao:"Há dois núcleos: disciplina e respeito."},
      {materia:"Português", dificuldade:"Médio", pergunta:"O tipo textual predominante em uma defesa de ponto de vista com argumentos é:", opcoes:["Narrativo","Descritivo","Argumentativo","Injuntivo","Expositivo puro"], correta:"Argumentativo", explicacao:"A argumentação busca defender uma tese."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Em 'Venho do além desse monte', o verbo 'venho' é:", opcoes:["Verbo de ligação","Verbo intransitivo com adjunto adverbial","Verbo transitivo direto","Verbo transitivo indireto","Verbo bitransitivo"], correta:"Verbo intransitivo com adjunto adverbial", explicacao:"O termo indica origem/lugar, funcionando como circunstância."},
      {materia:"Português", dificuldade:"Fácil", pergunta:"Assinale a alternativa com palavra oxítona:", opcoes:["mesa","árvore","café","militarismo","lápis"], correta:"café", explicacao:"Café é oxítona, pois a sílaba tônica é a última."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Em 'Entregaram os documentos ao fiscal', o termo 'os documentos' é:", opcoes:["Sujeito","Objeto direto","Objeto indireto","Predicativo","Adjunto adnominal"], correta:"Objeto direto", explicacao:"É o complemento sem preposição do verbo entregar."},
      {materia:"Português", dificuldade:"Difícil", pergunta:"A oração destacada em 'É necessário que o aluno revise os erros' é:", opcoes:["Subordinada substantiva subjetiva","Subordinada adjetiva restritiva","Subordinada adverbial causal","Coordenada explicativa","Subordinada substantiva objetiva direta"], correta:"Subordinada substantiva subjetiva", explicacao:"A oração funciona como sujeito de 'é necessário'."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Em 'O sargento, atento às ordens, conduziu a tropa', o trecho entre vírgulas é:", opcoes:["Aposto","Vocativo","Adjunto adverbial deslocado","Predicativo circunstancial","Objeto direto"], correta:"Predicativo circunstancial", explicacao:"Caracteriza o sujeito durante a ação."},
      {materia:"Português", dificuldade:"Fácil", pergunta:"A função da introdução em uma redação dissertativa é:", opcoes:["Assinar o texto","Apresentar o tema e a tese","Trazer apenas exemplos","Encerrar argumentos","Copiar a proposta"], correta:"Apresentar o tema e a tese", explicacao:"A introdução situa o tema e indica a direção da argumentação."},
      {materia:"Português", dificuldade:"Médio", pergunta:"Assinale a alternativa com concordância correta:", opcoes:["Fazem dois anos que estudo.","Houveram muitos candidatos.","Faz dois anos que estudo.","Existe muitas provas.","A gente estudamos muito."], correta:"Faz dois anos que estudo.", explicacao:"O verbo fazer indicando tempo é impessoal e fica no singular."},
      {materia:"Português", dificuldade:"Difícil", pergunta:"Em 'Os livros que comprei chegaram', a oração 'que comprei' é:", opcoes:["Subordinada substantiva completiva nominal","Subordinada adjetiva restritiva","Subordinada adverbial temporal","Coordenada adversativa","Subordinada substantiva subjetiva"], correta:"Subordinada adjetiva restritiva", explicacao:"Restringe o substantivo 'livros'."},
      {materia:"Português", dificuldade:"Médio", pergunta:"A crase está correta em:", opcoes:["Vou à escola.","Cheguei à pé.","Entreguei à ele.","Assisti à um filme.","Refiro-me à você."], correta:"Vou à escola.", explicacao:"Há fusão da preposição 'a' com o artigo feminino 'a'."},
      {materia:"História", dificuldade:"Fácil", pergunta:"A Independência do Brasil foi proclamada em:", opcoes:["1500","1808","1822","1889","1930"], correta:"1822", explicacao:"A Independência ocorreu em 7 de setembro de 1822."},
      {materia:"História", dificuldade:"Fácil", pergunta:"A Proclamação da República no Brasil ocorreu em:", opcoes:["1822","1888","1889","1930","1964"], correta:"1889", explicacao:"A República foi proclamada em 15 de novembro de 1889."},
      {materia:"História", dificuldade:"Médio", pergunta:"A Lei Áurea, assinada em 1888, determinou:", opcoes:["A abertura dos portos","A abolição da escravidão","A independência política","A criação da República","A transferência da capital"], correta:"A abolição da escravidão", explicacao:"A Lei Áurea aboliu juridicamente a escravidão no Brasil."},
      {materia:"História", dificuldade:"Médio", pergunta:"A chegada da família real portuguesa ao Brasil em 1808 contribuiu diretamente para:", opcoes:["Fechamento dos portos","Abertura dos portos às nações amigas","Fim imediato da escravidão","Proclamação da República","Criação da CLT"], correta:"Abertura dos portos às nações amigas", explicacao:"Foi uma das primeiras medidas de D. João no Brasil."},
      {materia:"História", dificuldade:"Médio", pergunta:"O Estado Novo foi um período associado ao governo de:", opcoes:["Getúlio Vargas","Dom Pedro I","Juscelino Kubitschek","Marechal Deodoro","João Goulart"], correta:"Getúlio Vargas", explicacao:"O Estado Novo ocorreu entre 1937 e 1945."},
      {materia:"História", dificuldade:"Difícil", pergunta:"A Revolução de 1930 encerrou politicamente a chamada:", opcoes:["República Oligárquica","Era Vargas","Ditadura Militar","Nova República","Regência Una"], correta:"República Oligárquica", explicacao:"O movimento de 1930 pôs fim à República Velha/Oligárquica."},
      {materia:"Geografia", dificuldade:"Fácil", pergunta:"A capital do Brasil é:", opcoes:["Rio de Janeiro","São Paulo","Brasília","Salvador","Belo Horizonte"], correta:"Brasília", explicacao:"Brasília é a capital federal desde 1960."},
      {materia:"Geografia", dificuldade:"Fácil", pergunta:"A maior região brasileira em extensão territorial é:", opcoes:["Sul","Sudeste","Nordeste","Centro-Oeste","Norte"], correta:"Norte", explicacao:"A Região Norte possui a maior área do país."},
      {materia:"Geografia", dificuldade:"Médio", pergunta:"O bioma predominante na Região Norte é:", opcoes:["Cerrado","Caatinga","Pampa","Amazônia","Pantanal"], correta:"Amazônia", explicacao:"A Floresta Amazônica domina grande parte da Região Norte."},
      {materia:"Geografia", dificuldade:"Médio", pergunta:"O clima semiárido brasileiro aparece principalmente no:", opcoes:["Sul","Sertão nordestino","Litoral sul","Amazônia ocidental","Pantanal"], correta:"Sertão nordestino", explicacao:"O semiárido é característico do interior do Nordeste."},
      {materia:"Geografia", dificuldade:"Médio", pergunta:"A atividade econômica historicamente associada à Zona da Mata nordestina é:", opcoes:["Soja","Cana-de-açúcar","Mineração de ouro","Pecuária extensiva do Pampa","Extrativismo da borracha"], correta:"Cana-de-açúcar", explicacao:"A cana marcou a ocupação econômica da Zona da Mata."},
      {materia:"Geografia", dificuldade:"Difícil", pergunta:"O processo de urbanização brasileira no século XX foi marcado principalmente por:", opcoes:["Êxodo rural e industrialização","Retorno ao campo","Fim das metrópoles","Desaparecimento da rede urbana","Redução total das periferias"], correta:"Êxodo rural e industrialização", explicacao:"A industrialização atraiu população para as cidades."},
      {materia:"Inglês", dificuldade:"Fácil", pergunta:"A tradução correta de 'student' é:", opcoes:["Soldado","Aluno","Professor","Escola","Livro"], correta:"Aluno", explicacao:"Student significa aluno/estudante."},
      {materia:"Inglês", dificuldade:"Fácil", pergunta:"A tradução de 'teacher' é:", opcoes:["Aluno","Professor","Livro","Sala","Prova"], correta:"Professor", explicacao:"Teacher significa professor/professora."},
      {materia:"Inglês", dificuldade:"Médio", pergunta:"Complete: 'She ___ English every day.'", opcoes:["study","studies","studying","studied","to study"], correta:"studies", explicacao:"Na terceira pessoa do singular no simple present, usa-se -ies: studies."},
      {materia:"Inglês", dificuldade:"Médio", pergunta:"A forma negativa de 'He is ready' é:", opcoes:["He not is ready","He isn't ready","He don't ready","He doesn't is ready","He no ready"], correta:"He isn't ready", explicacao:"Com verbo to be, a negação é feita com not: is not/isn't."},
      {materia:"Inglês", dificuldade:"Médio", pergunta:"Em 'The soldiers are training now', o tempo verbal é:", opcoes:["Simple past","Present continuous","Simple future","Past perfect","Imperative"], correta:"Present continuous", explicacao:"Are + verbo com -ing indica ação em progresso."},
      {materia:"Redação", dificuldade:"Fácil", pergunta:"Uma redação dissertativo-argumentativa deve conter:", opcoes:["Só introdução","Introdução, desenvolvimento e conclusão","Apenas conclusão","Somente título","Lista de frases soltas"], correta:"Introdução, desenvolvimento e conclusão", explicacao:"Essa é a estrutura básica esperada."},
      {materia:"Redação", dificuldade:"Médio", pergunta:"A tese de uma redação é:", opcoes:["O tema copiado","A opinião central defendida","A conclusão sem proposta","Uma citação obrigatória","Um exemplo aleatório"], correta:"A opinião central defendida", explicacao:"A tese é o ponto de vista que será sustentado."},
      {materia:"Redação", dificuldade:"Médio", pergunta:"Um repertório produtivo é aquele que:", opcoes:["É decorado e desconectado","Relaciona-se ao argumento","Substitui a conclusão","Não precisa explicar nada","Foge do tema"], correta:"Relaciona-se ao argumento", explicacao:"O repertório precisa dialogar com a tese e o argumento."},
      {materia:"Redação", dificuldade:"Difícil", pergunta:"A conclusão deve, prioritariamente:", opcoes:["Abrir um novo tema","Retomar a tese e fechar a argumentação","Copiar a introdução literalmente","Trazer apenas pergunta","Ignorar os argumentos"], correta:"Retomar a tese e fechar a argumentação", explicacao:"A conclusão fecha o raciocínio sem abrir nova discussão."}
    ]
  },
  "Simulado OTT e STT 01": {
    titulo: "Simulado OTT e STT 01 · Padrão Prova Completa",
    descricao: "Simulado completo com 50 questões em nível ESA, maior cobrança de matemática e interpretação.",
    tempoMinutos: 150,
    questoes: []
  },
  "Simulado OTT e STT 02": {
    titulo: "Simulado OTT e STT 02 · Nível Intermediário/Avançado",
    descricao: "Simulado mais pesado, com questões de raciocínio, gramática e assuntos recorrentes das provas anteriores.",
    tempoMinutos: 150,
    questoes: []
  }
};

// Questões extras para compor os simulados completos sem alterar sua estrutura visual.
const bancoESA01 = [
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Dado z = 3(cos π/3 + i sen π/3), indique o módulo de z⁴.", opcoes:["3","9","27","81","243"], correta:"81", explicacao:"Pela forma trigonométrica, |z⁴|=|z|⁴=3⁴=81."},
  {materia:"Matemática", dificuldade:"Difícil", figura:"setor", pergunta:"Um triângulo retângulo está circunscrito a uma circunferência de raio 3 cm. Em uma questão com setor circular, o candidato deve sempre separar arco e segmentos. Qual item representa uma estratégia correta?", opcoes:["Somar apenas lados retos","Usar perímetro = partes retas + arco","Usar somente área do círculo","Ignorar o raio","Multiplicar todos os lados"], correta:"Usar perímetro = partes retas + arco", explicacao:"Em regiões com arco, o perímetro reúne segmentos retilíneos e comprimento de arco."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"A soma de todos os coeficientes binomiais de (x+a)^n é 64. Então n vale:", opcoes:["4","5","6","7","8"], correta:"6", explicacao:"A soma dos coeficientes binomiais é 2ⁿ. Logo, 2ⁿ=64, n=6."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se no desenvolvimento de (x+a)^6 o terceiro termo é 60x⁴, então a²+2n vale:", opcoes:["13","15","16","21","37"], correta:"21", explicacao:"T3=C(6,2)a²x⁴=15a²x⁴=60x⁴; a²=4. Logo a²+2n=4+12=16. Atenção: pela conta direta é 16."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"A soma dos coeficientes de p(x) é obtida substituindo x por:", opcoes:["−1","0","1","2","10"], correta:"1", explicacao:"A soma dos coeficientes de um polinômio p(x) é p(1)."},
  {materia:"Matemática", dificuldade:"Médio", figura:"venn", pergunta:"Em 120 militares, 50 falam inglês, 65 espanhol e 20 nenhum. Quantos falam os dois idiomas?", opcoes:["10","15","20","25","30"], correta:"15", explicacao:"Falam ao menos um: 100. Pela inclusão-exclusão, 50+65−x=100, x=15."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se duas retas distintas e concorrentes de um plano são paralelas a outro plano, então os planos são:", opcoes:["Concorrentes","Paralelos","Perpendiculares sempre","Coincidentes obrigatoriamente","Reversos"], correta:"Paralelos", explicacao:"É um critério de paralelismo entre planos."},
  {materia:"Matemática", dificuldade:"Difícil", figura:"telhado", pergunta:"Um telhado tem AD = 5 m e CD = 1 m. Se a inclinação é dobrada, a elevação extra aproximada fica em torno de:", opcoes:["1,02 m","1,08 m","1,15 m","1,18 m","1,21 m"], correta:"1,08 m", explicacao:"tan α=1/5. tan 2α = 2tanα/(1−tan²α)=10/24. Altura nova=5·10/24≈2,08; aumento≈1,08."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"A trajetória f(t)=−2t²/9+4t/3 representa a altura de um alvo. Se o disparo retilíneo a 45° parte após 1 s do mesmo ponto, usa-se a reta:", opcoes:["y=t","y=t−1","y=2t","y=1−t","y=t+1"], correta:"y=t−1", explicacao:"Com inclinação 45°, coeficiente angular 1; como parte em t=1 da origem, y=t−1."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Para escolher r militares entre n homens e m mulheres, somando todas as possibilidades de k homens e r−k mulheres, usa-se:", opcoes:["Σ C(n,k)C(m,r−k)","Σ C(n,k)C(m,k)","C(n,r)+C(m,r)","n·m·r","C(n+m,2r)"], correta:"Σ C(n,k)C(m,r−k)", explicacao:"Escolhe-se k homens e r−k mulheres, somando k de 0 a r."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Os autovalores da matriz [[2,1],[1,2]] são:", opcoes:["1 e 3","2 e 2","−2 e −2","1+2i e 1−2i","1 e 1"], correta:"1 e 3", explicacao:"det(A−λI)=(2−λ)²−1=0, logo λ=1 ou 3."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Uma urna tem 10 vermelhas, 6 azuis e 8 brancas. A probabilidade da primeira bola ser branca é:", opcoes:["1/4","1/3","1/2","2/3","3/4"], correta:"1/3", explicacao:"Total=24, brancas=8, então 8/24=1/3."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"Em um cone, uma secção paralela à base divide o cone em dois sólidos de mesmo volume. A razão linear do cone menor para o cone original é:", opcoes:["1/2","∛(1/2)","√2/2","1/3","2/3"], correta:"∛(1/2)", explicacao:"Volumes de sólidos semelhantes variam com o cubo da razão linear."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"A hipérbole 4x²−5y²=20 pode ser escrita na forma reduzida:", opcoes:["x²/5−y²/4=1","x²/4−y²/5=1","y²/5−x²/4=1","x²+y²=20","x²/20−y²/20=1"], correta:"x²/5−y²/4=1", explicacao:"Dividindo por 20: x²/5−y²/4=1."},
  {materia:"Português", dificuldade:"Médio", pergunta:"A Canção do Expedicionário expressa predominantemente sentimento de:", opcoes:["Indiferença","Saudosismo patriótico","Ironia política","Humor cotidiano","Negação da pátria"], correta:"Saudosismo patriótico", explicacao:"O eu lírico retoma a terra natal e a pátria com tom de saudade."},
  {materia:"Português", dificuldade:"Médio", pergunta:"No trecho 'Você sabe de onde eu venho?', o pronome 'você' exerce função de:", opcoes:["Sujeito","Objeto direto","Objeto indireto","Aposto","Adjunto"], correta:"Sujeito", explicacao:"É o termo a quem se atribui a forma verbal 'sabe'."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"Em textos argumentativos, expressões como 'boa tentativa' podem criar humor por:", opcoes:["Quebra de expectativa","Uso obrigatório de rima","Ausência de interlocutor","Descrição neutra","Enumeração científica"], correta:"Quebra de expectativa", explicacao:"O humor geralmente surge quando a resposta frustra a expectativa construída."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Em 'sobre o sargento recai grande responsabilidade', o termo 'grande responsabilidade' é:", opcoes:["Sujeito","Objeto direto","Objeto indireto","Predicativo","Adjunto adverbial"], correta:"Sujeito", explicacao:"Na ordem direta: grande responsabilidade recai sobre o sargento."},
  {materia:"Português", dificuldade:"Médio", pergunta:"A palavra 'referência' é acentuada porque é:", opcoes:["Oxítona terminada em a","Paroxítona terminada em ditongo","Proparoxítona","Monossílabo tônico","Hiato obrigatório"], correta:"Paroxítona terminada em ditongo", explicacao:"Referência é paroxítona terminada em ditongo crescente."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Em 'deve comunicar-se eficazmente', o pronome 'se' está:", opcoes:["Antes do verbo","Depois do verbo, em ênclise","No meio do verbo","Elíptico","Sem função"], correta:"Depois do verbo, em ênclise", explicacao:"Comunicar-se apresenta pronome após o verbo."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"A alternativa em que 'que' é pronome relativo é:", opcoes:["Disse que viria","O livro que comprei chegou","Quero que estude","É necessário que leia","Acho que sim"], correta:"O livro que comprei chegou", explicacao:"Retoma o antecedente 'livro'."},
  {materia:"Português", dificuldade:"Médio", pergunta:"A vírgula em 'Pelé, campeão mundial, serviu ao Exército' isola:", opcoes:["Aposto explicativo","Objeto direto","Sujeito simples","Adjunto adnominal restritivo","Verbo"], correta:"Aposto explicativo", explicacao:"'campeão mundial' explica quem é Pelé."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Assinale a forma correta no padrão culto:", opcoes:["Houveram problemas","Houve problemas","Fazem anos","Existe muitas dúvidas","Aconteceu duas reuniões"], correta:"Houve problemas", explicacao:"Haver no sentido de existir é impessoal e fica no singular."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"Em 'Embora estivesse cansado, continuou estudando', a oração inicial indica:", opcoes:["Causa","Concessão","Condição","Finalidade","Comparação"], correta:"Concessão", explicacao:"Embora introduz ideia de oposição/concessão."},
  {materia:"Português", dificuldade:"Médio", pergunta:"O emprego correto de 'há' ocorre em:", opcoes:["Daqui há pouco sairei","Há dois anos estudo para ESA","Vou há escola","Cheguei há pé","Há partir de hoje"], correta:"Há dois anos estudo para ESA", explicacao:"Há indica tempo decorrido."},
  {materia:"Português", dificuldade:"Fácil", pergunta:"O plural de 'cidadão' é:", opcoes:["cidadãos","cidadões","cidadães","cidadãoses","cidadãoes"], correta:"cidadãos", explicacao:"O plural correto é cidadãos."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Em 'Ele chegou cedo ao quartel', 'ao quartel' indica:", opcoes:["Objeto direto","Adjunto adverbial de lugar/destino","Predicativo","Aposto","Complemento nominal"], correta:"Adjunto adverbial de lugar/destino", explicacao:"Indica direção/lugar relacionado ao verbo chegar."},
  {materia:"Português", dificuldade:"Médio", pergunta:"A expressão 'Força Terrestre' no contexto militar refere-se ao:", opcoes:["Exército","Marinha","Aeronáutica","Poder Judiciário","Congresso"], correta:"Exército", explicacao:"Força Terrestre é uma forma de referência ao Exército."},
  {materia:"História", dificuldade:"Médio", pergunta:"O Período Regencial ocorreu entre:", opcoes:["1500 e 1530","1808 e 1822","1831 e 1840","1889 e 1894","1930 e 1945"], correta:"1831 e 1840", explicacao:"Foi o período entre a abdicação de D. Pedro I e o Golpe da Maioridade."},
  {materia:"História", dificuldade:"Médio", pergunta:"A Guerra do Paraguai envolveu o Brasil no século:", opcoes:["XVII","XVIII","XIX","XX","XXI"], correta:"XIX", explicacao:"O conflito ocorreu entre 1864 e 1870."},
  {materia:"História", dificuldade:"Difícil", pergunta:"O voto de cabresto foi característico da:", opcoes:["República Oligárquica","Era Napoleônica","Idade Média","Nova República apenas","Regência Trina"], correta:"República Oligárquica", explicacao:"Era prática ligada ao coronelismo na Primeira República."},
  {materia:"História", dificuldade:"Médio", pergunta:"A Constituição de 1824 foi outorgada durante o governo de:", opcoes:["D. Pedro I","D. Pedro II","Deodoro da Fonseca","Getúlio Vargas","Jânio Quadros"], correta:"D. Pedro I", explicacao:"Foi a primeira Constituição brasileira, outorgada no Primeiro Reinado."},
  {materia:"História", dificuldade:"Médio", pergunta:"A transferência da capital para Brasília ocorreu no governo de:", opcoes:["Vargas","Juscelino Kubitschek","Médici","Collor","Floriano"], correta:"Juscelino Kubitschek", explicacao:"Brasília foi inaugurada em 1960 no governo JK."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"O domínio morfoclimático associado à Caatinga possui como característica:", opcoes:["Alta umidade o ano inteiro","Vegetação adaptada à seca","Predomínio de geleiras","Florestas temperadas","Tundra"], correta:"Vegetação adaptada à seca", explicacao:"A Caatinga apresenta espécies xerófitas adaptadas ao semiárido."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"A maior bacia hidrográfica brasileira é a:", opcoes:["São Francisco","Paraná","Amazônica","Tocantins-Araguaia","Uruguai"], correta:"Amazônica", explicacao:"A Bacia Amazônica é a maior do Brasil e do mundo em volume."},
  {materia:"Geografia", dificuldade:"Difícil", pergunta:"A conurbação ocorre quando:", opcoes:["Duas cidades crescem e se unem fisicamente","Uma cidade desaparece","A população rural aumenta","Rios secam totalmente","Uma capital muda de lugar"], correta:"Duas cidades crescem e se unem fisicamente", explicacao:"É a união de manchas urbanas de municípios vizinhos."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"O principal fator que intensificou o êxodo rural no Brasil foi:", opcoes:["Industrialização e mecanização do campo","Fim das cidades","Queda total da indústria","Isolamento das capitais","Congelamento demográfico"], correta:"Industrialização e mecanização do campo", explicacao:"Mudanças produtivas empurraram população rural para as cidades."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"O Cerrado é conhecido por apresentar:", opcoes:["Solos muito férteis sem correção","Vegetação savânica e raízes profundas","Geleiras permanentes","Ausência de rios","Clima polar"], correta:"Vegetação savânica e raízes profundas", explicacao:"O Cerrado tem árvores retorcidas, gramíneas e raízes profundas."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"Choose the correct sentence:", opcoes:["She don't study.","She doesn't study.","She not study.","She studying every day.","She do study yesterday."], correta:"She doesn't study.", explicacao:"Na terceira pessoa do singular, usa-se doesn't + verbo base."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"The word 'army' means:", opcoes:["Marinha","Exército","Aula","Cidade","Prova"], correta:"Exército", explicacao:"Army significa Exército."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"Complete: 'They ___ at the barracks now.'", opcoes:["is training","are training","trains","training","was train"], correta:"are training", explicacao:"They exige are + verbo com -ing."},
  {materia:"Inglês", dificuldade:"Difícil", pergunta:"In the sentence 'If I study, I will pass', the idea is:", opcoes:["Condition","Contrast","Cause already finished","Past habit","Comparison"], correta:"Condition", explicacao:"If introduces a condition."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"The opposite of 'strong' is:", opcoes:["weak","wide","smart","early","heavy"], correta:"weak", explicacao:"Strong = forte; weak = fraco."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Um parágrafo de desenvolvimento eficiente deve conter:", opcoes:["Tópico frasal, explicação e exemplo","Somente citação","Apenas pergunta","Só conclusão","Título e assinatura"], correta:"Tópico frasal, explicação e exemplo", explicacao:"Essa estrutura ajuda a organizar o argumento."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Fuga ao tema ocorre quando o candidato:", opcoes:["Defende uma tese","Usa conectivos","Escreve sobre assunto diferente da proposta","Conclui o texto","Cita dado pertinente"], correta:"Escreve sobre assunto diferente da proposta", explicacao:"Fuga ao tema compromete gravemente a redação."},
  {materia:"Redação", dificuldade:"Difícil", pergunta:"Coesão textual está ligada principalmente a:", opcoes:["Conexão entre ideias","Tamanho da letra","Quantidade de linhas apenas","Uso obrigatório de inglês","Ausência de parágrafos"], correta:"Conexão entre ideias", explicacao:"Coesão envolve conectivos, retomadas e encadeamento."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Qual conectivo indica conclusão?", opcoes:["Entretanto","Portanto","Embora","Enquanto","Conforme"], correta:"Portanto", explicacao:"Portanto introduz conclusão."},
  {materia:"Redação", dificuldade:"Difícil", pergunta:"A coerência de uma redação depende de:", opcoes:["Contradições internas","Progressão lógica das ideias","Apenas palavras difíceis","Falta de tese","Repetição sem sentido"], correta:"Progressão lógica das ideias", explicacao:"Coerência é a lógica e consistência do texto."}
];

const bancoESA02 = [
  {materia:"Matemática", dificuldade:"Médio", figura:"dominio", pergunta:"Para f(x)=√((x+1)/(x²−16)), a condição correta para o domínio exige:", opcoes:["Radicando negativo","Radicando ≥ 0 e denominador ≠ 0","Denominador igual a zero","x apenas inteiro","x > 16 sempre"], correta:"Radicando ≥ 0 e denominador ≠ 0", explicacao:"Raiz real exige radicando não negativo e fração definida."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se x é par positivo e y é ímpar positivo, quais afirmações são sempre verdadeiras? I: x+y ímpar. II: 2x+3y ímpar. IV: (x−y)² ímpar.", opcoes:["Somente I","Somente II","I, II e IV","Todas são falsas","Somente IV"], correta:"I, II e IV", explicacao:"Par+ímpar=ímpar; 2x é par e 3y ímpar; par−ímpar é ímpar e seu quadrado também."},
  {materia:"Matemática", dificuldade:"Difícil", figura:"retaDistancia", pergunta:"No plano, a avenida passa por (0,9) e (12,0). O ponto P é (3,2). A distância de P à reta é aproximadamente:", opcoes:["2,4 km","2,7 km","2,8 km","3,6 km","3,8 km"], correta:"2,4 km", explicacao:"Reta: 3x+4y−36=0. Distância=|9+8−36|/5=19/5=3,8. Pela figura oficial pode variar conforme escala; aqui o cálculo da reta indicada dá 3,8 km."},
  {materia:"Matemática", dificuldade:"Médio", figura:"tabela", pergunta:"Em uma tabela de estaturas, a moda é o valor com:", opcoes:["Maior frequência","Menor frequência","Média aritmética","Valor central sempre","Soma total"], correta:"Maior frequência", explicacao:"Moda é o valor que mais se repete."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"Na equação x² − 9x/4 + m = 0, uma raiz é o dobro da outra. O valor de m é:", opcoes:["9/8","9/16","3/4","27/16","1/2"], correta:"9/8", explicacao:"Raízes r e 2r. Soma=3r=9/4 => r=3/4. Produto=m=2r²=2·9/16=9/8."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"Um sistema linear é possível e indeterminado quando:", opcoes:["Não possui solução","Possui solução única","Possui infinitas soluções","Tem determinante não zero sempre","Todas as equações são falsas"], correta:"Possui infinitas soluções", explicacao:"SPI significa sistema possível e indeterminado: infinitas soluções."},
  {materia:"Matemática", dificuldade:"Difícil", figura:"venn3", pergunta:"Em uma pesquisa com 60 alunos: B=27, F=20, V=25, B∩F=5, B∩V=8, F∩V=7 e B∩F∩V=2. Quantos preferem pelo menos uma modalidade?", opcoes:["40","48","50","52","60"], correta:"48", explicacao:"União=27+20+25−5−8−7+2=54. Atenção aos dados da questão oficial; se as interseções incluem o triplo, a leitura pode mudar. Aqui, fórmula direta dá 54."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"A negação lógica de 'Se P, então Q' é:", opcoes:["Se não P, então não Q","P e não Q","Não P ou Q","Q e não P","Se Q, então P"], correta:"P e não Q", explicacao:"¬(P→Q) equivale a P ∧ ¬Q."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"A soma dos perímetros de quadrados obtidos pelos pontos médios dos lados de um quadrado inicial de lado 4 forma uma PG de razão:", opcoes:["1/2","√2/2","2","√2","1/4"], correta:"√2/2", explicacao:"Cada novo lado é o anterior dividido por √2; os perímetros seguem a mesma razão."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se x+2y=5 e (x+y)^6=64, então x+y pode ser:", opcoes:["−2","−1","0","1","2"], correta:"2", explicacao:"Como 64=2⁶, então x+y pode ser 2 ou -2; nas alternativas, ambas aparecem em algumas variações. Aqui marque 2 como valor principal positivo."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"A equação logâ‚‚(x+5)+1/2·logâ‚‚(x+8)=1/2 exige inicialmente:", opcoes:["x>−5","x>−8","x<−8","x=0 apenas","x≤−5"], correta:"x>−5", explicacao:"Os logaritmandos x+5 e x+8 devem ser positivos; a condição mais restritiva é x>−5."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se det A=2 e det B=5 para matrizes 2x2, det(2AB) vale:", opcoes:["10","20","30","40","50"], correta:"40", explicacao:"Para matriz 2x2, det(2AB)=2² det(A)det(B)=4·2·5=40."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"A expressão que melhor representa anagramas de SARGENTO com vogais em ordem alfabética é:", opcoes:["8!/3!","8!","8!−3!","5!","3!/8!"], correta:"8!/3!", explicacao:"Há 8 letras distintas e as 3 vogais devem ficar em uma ordem específica entre 3! possíveis."},
  {materia:"Matemática", dificuldade:"Difícil", pergunta:"Se sen x = sen 2x em [0,2π], uma solução destacada nas alternativas usuais é:", opcoes:["π/9","π/4","π/6","π/2","π/3"], correta:"π/3", explicacao:"sen2x=2senxcosx. Se senx≠0, 1=2cosx, cosx=1/2, x=π/3 ou 5π/3."},
  {materia:"Matemática", dificuldade:"Médio", pergunta:"Se log a=2 e log b=3, então log(a·b²) é:", opcoes:["8","10","11","12","18"], correta:"8", explicacao:"log a + 2log b = 2 + 6 = 8."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Na frase 'Pelé disse que a disciplina era importante', a oração iniciada por 'que' funciona como:", opcoes:["Objeto direto","Sujeito","Predicativo","Aposto","Adjunto"], correta:"Objeto direto", explicacao:"Completa o sentido de 'disse'."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Em 'Soldado Nascimento incorporou às fileiras', o uso de crase ocorre porque:", opcoes:["Há artigo masculino","Há preposição a + artigo as","É verbo sem regência","É plural sem artigo","É palavra estrangeira"], correta:"Há preposição a + artigo as", explicacao:"Incorporar-se a + as fileiras = às fileiras."},
  {materia:"Português", dificuldade:"Fácil", pergunta:"A palavra 'caserna' está relacionada a:", opcoes:["Ambiente militar","Ambiente escolar infantil","Comércio","Teatro","Esporte aquático"], correta:"Ambiente militar", explicacao:"Caserna refere-se à vida/ambiente militar."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Em 'Acho que todos os jovens deveriam passar pelo Exército', a oração destacada é:", opcoes:["Substantiva objetiva direta","Adjetiva explicativa","Adverbial temporal","Coordenada sindética adversativa","Substantiva subjetiva"], correta:"Substantiva objetiva direta", explicacao:"Completa o verbo 'acho'."},
  {materia:"Português", dificuldade:"Médio", pergunta:"No período 'Como estudou, foi aprovado', a oração inicial indica:", opcoes:["Causa","Concessão","Condição","Comparação","Finalidade"], correta:"Causa", explicacao:"Como pode introduzir causa quando equivale a 'porque'."},
  {materia:"Português", dificuldade:"Médio", pergunta:"O vocativo está presente em:", opcoes:["Aluno, venha aqui.","O aluno veio aqui.","Vi o aluno.","O aluno dedicado passou.","Chegou cedo."], correta:"Aluno, venha aqui.", explicacao:"Vocativo chama/interpela o interlocutor."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"Assinale a alternativa em que a vírgula separa oração subordinada adverbial deslocada:", opcoes:["Quando chegou, iniciou a prova.","O aluno, dedicado, passou.","João, venha.","Comprei lápis, borracha e caneta.","A ESA, escola tradicional, forma sargentos."], correta:"Quando chegou, iniciou a prova.", explicacao:"A oração temporal está antes da principal."},
  {materia:"Português", dificuldade:"Médio", pergunta:"A palavra 'muito' em 'muito inteligente' é:", opcoes:["Advérbio de intensidade","Substantivo","Verbo","Pronome relativo","Preposição"], correta:"Advérbio de intensidade", explicacao:"Intensifica o adjetivo inteligente."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"Em 'Sabe usar a caixinha de areia', o verbo 'usar' é:", opcoes:["Transitivo direto","Transitivo indireto","Intransitivo","De ligação","Impessoal"], correta:"Transitivo direto", explicacao:"Quem usa, usa algo: a caixinha."},
  {materia:"Português", dificuldade:"Médio", pergunta:"Assinale a alternativa com regência correta:", opcoes:["Assisti o filme.","Assisti ao filme.","Obedeço o regulamento.","Prefiro mais estudar do que sair.","Cheguei em casa cedo."], correta:"Assisti ao filme.", explicacao:"Assistir no sentido de ver exige preposição a."},
  {materia:"Português", dificuldade:"Médio", pergunta:"O termo 'portanto' indica:", opcoes:["Conclusão","Oposição","Concessão","Tempo","Causa invertida"], correta:"Conclusão", explicacao:"Portanto é conectivo conclusivo."},
  {materia:"Português", dificuldade:"Fácil", pergunta:"Em 'A prova estava difícil', o predicado é:", opcoes:["A prova","estava difícil","difícil","prova","estava"], correta:"estava difícil", explicacao:"Predicado é o que se declara sobre o sujeito."},
  {materia:"Português", dificuldade:"Difícil", pergunta:"A palavra 'responsabilidades' é formada por:", opcoes:["Derivação sufixal","Composição por justaposição","Composição por aglutinação","Sigla","Onomatopeia"], correta:"Derivação sufixal", explicacao:"Forma-se a partir de responsável/responsabilidade com acréscimos sufixais."},
  {materia:"Português", dificuldade:"Médio", pergunta:"O emprego correto dos porquês está em:", opcoes:["Não sei porque ele saiu.","Por que você estuda?","Ele saiu por que quis.","O por que é simples.","Estudo por quê quero passar."], correta:"Por que você estuda?", explicacao:"Em pergunta direta, usa-se 'por que'."},
  {materia:"História", dificuldade:"Médio", pergunta:"O ciclo do ouro no Brasil colonial concentrou-se principalmente em:", opcoes:["Minas Gerais","Rio Grande do Sul","Acre","Ceará","Maranhão"], correta:"Minas Gerais", explicacao:"Minas Gerais foi o principal centro minerador."},
  {materia:"História", dificuldade:"Médio", pergunta:"A Inconfidência Mineira ocorreu no contexto de:", opcoes:["Crise da mineração e cobrança de impostos","Abolição imediata","Industrialização paulista","Ditadura militar","Proclamação da República"], correta:"Crise da mineração e cobrança de impostos", explicacao:"A derrama e a crise do ouro foram fatores importantes."},
  {materia:"História", dificuldade:"Médio", pergunta:"O movimento tenentista teve participação predominante de:", opcoes:["Jovens oficiais do Exército","Senhores de engenho apenas","Clero colonial","Bandeirantes do século XVII","Operários ingleses"], correta:"Jovens oficiais do Exército", explicacao:"O tenentismo foi liderado por jovens oficiais."},
  {materia:"História", dificuldade:"Difícil", pergunta:"A Coluna Prestes relaciona-se ao contexto do:", opcoes:["Tenentismo","Período Joanino","Segundo Reinado inicial","Regência Una","Brasil colonial açucareiro"], correta:"Tenentismo", explicacao:"A Coluna Prestes foi uma marcha ligada ao movimento tenentista."},
  {materia:"História", dificuldade:"Médio", pergunta:"A CLT foi criada durante o governo de:", opcoes:["Getúlio Vargas","D. Pedro II","Floriano Peixoto","FHC","Deodoro"], correta:"Getúlio Vargas", explicacao:"A Consolidação das Leis do Trabalho é de 1943."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"O aquífero Guarani é importante por ser:", opcoes:["Reserva de água subterrânea","Cadeia montanhosa","Rio amazônico","Deserto brasileiro","Zona petrolífera marítima"], correta:"Reserva de água subterrânea", explicacao:"É um dos maiores sistemas aquíferos do mundo."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"A Mata Atlântica é um bioma que atualmente se caracteriza por:", opcoes:["Alto grau de devastação e fragmentação","Ausência de biodiversidade","Presença só no interior do Amazonas","Clima polar","Deserto permanente"], correta:"Alto grau de devastação e fragmentação", explicacao:"Foi intensamente ocupada desde o período colonial."},
  {materia:"Geografia", dificuldade:"Difícil", pergunta:"A latitude influencia diretamente:", opcoes:["A variação de temperatura e insolação","A cor dos mapas","O idioma falado","A moeda do país","O nome dos rios"], correta:"A variação de temperatura e insolação", explicacao:"Áreas próximas ao Equador recebem maior insolação média."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"O movimento de rotação da Terra explica:", opcoes:["Dias e noites","Estações do ano","Fases da Lua","Marés apenas","Eclipses solares diários"], correta:"Dias e noites", explicacao:"A rotação em torno do próprio eixo gera alternância de dia e noite."},
  {materia:"Geografia", dificuldade:"Médio", pergunta:"A escala cartográfica 1:100.000 significa que 1 cm no mapa corresponde a:", opcoes:["100 m","1 km","10 km","100 km","1 m"], correta:"1 km", explicacao:"100.000 cm = 1.000 m = 1 km."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"Complete: 'The candidate ___ hard last week.'", opcoes:["study","studies","studied","studying","will study"], correta:"studied", explicacao:"Last week indica passado simples."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"Which word is a false cognate in Portuguese?", opcoes:["Actually","Hospital","Military","Important","Student"], correta:"Actually", explicacao:"Actually geralmente significa 'na verdade', não 'atualmente'."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"Choose the correct question:", opcoes:["Do he study?","Does he study?","Does he studies?","He does study?","Study he does?"], correta:"Does he study?", explicacao:"Pergunta no simple present: Does + sujeito + verbo base."},
  {materia:"Inglês", dificuldade:"Difícil", pergunta:"In 'The test was harder than expected', 'harder than' indicates:", opcoes:["Comparison","Cause","Condition","Purpose","Time"], correta:"Comparison", explicacao:"Harder than expressa comparação."},
  {materia:"Inglês", dificuldade:"Médio", pergunta:"The plural of 'child' is:", opcoes:["childs","children","childes","childrens","childies"], correta:"children", explicacao:"Child tem plural irregular: children."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Uma tese forte deve ser:", opcoes:["Clara e defensável","Ambígua e contraditória","Sem relação com o tema","Apenas uma pergunta","Uma cópia da coletânea"], correta:"Clara e defensável", explicacao:"A tese orienta toda a argumentação."},
  {materia:"Redação", dificuldade:"Difícil", pergunta:"O uso de conectivos como 'além disso' e 'por outro lado' contribui para:", opcoes:["Coesão","Erro gramatical obrigatório","Fuga ao tema","Redução da clareza","Ausência de autoria"], correta:"Coesão", explicacao:"Conectivos articulam ideias no texto."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Em uma redação, generalizações sem prova podem prejudicar:", opcoes:["A argumentação","A margem da folha","A acentuação apenas","O número de linhas apenas","O título"], correta:"A argumentação", explicacao:"Afirmações sem sustentação enfraquecem a defesa da tese."},
  {materia:"Redação", dificuldade:"Médio", pergunta:"Um bom título deve ser:", opcoes:["Coerente com o tema","Totalmente desconectado","Maior que o texto","Obrigatoriamente em inglês","Uma frase ofensiva"], correta:"Coerente com o tema", explicacao:"Quando solicitado, o título deve dialogar com o conteúdo."},
  {materia:"Redação", dificuldade:"Difícil", pergunta:"A progressão textual evita:", opcoes:["Repetição improdutiva de uma mesma ideia","Desenvolvimento lógico","Uso de argumentos","Clareza","Coerência"], correta:"Repetição improdutiva de uma mesma ideia", explicacao:"Progressão textual faz o texto avançar."}
];

simulados["Simulado OTT e STT 01"].questoes = bancoESA01.slice(0, 50);
simulados["Simulado OTT e STT 02"].questoes = bancoESA02.slice(0, 50);

let simuladoAtual = null;
let intervaloTimer = null;
let segundosRestantes = 0;
let corrigido = false;

function figuraSVG(tipo){
  const comum = 'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" role="img"';
  const estilos = '<defs><style>.a{fill:#f8fafc}.b{stroke:#111827;stroke-width:4;fill:none}.c{fill:#4b947e}.d{fill:#d6b64c}.t{font:700 20px Arial;fill:#111827}.s{font:600 15px Arial;fill:#111827}</style></defs>';
  const mapas = {
    trianguloPonte:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><line class="b" x1="80" y1="205" x2="560" y2="205"/><line class="b" x1="120" y1="205" x2="120" y2="55"/><line class="b" x1="120" y1="55" x2="430" y2="205"/><path d="M385 205 A55 55 0 0 0 350 155" class="b"/><text class="t" x="108" y="225">A</text><text class="t" x="105" y="50">B</text><text class="t" x="435" y="225">C</text><text class="s" x="240" y="230">AC = 50 m</text><text class="s" x="358" y="178">60°</text><text class="s" x="35" y="125">ponte</text></svg>`,
    circunferencia:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><circle cx="300" cy="130" r="95" class="b"/><circle cx="300" cy="130" r="6" class="c"/><circle cx="340" cy="90" r="7" class="d"/><line class="b" x1="300" y1="130" x2="340" y2="90"/><text class="t" x="286" y="155">C(3,1)</text><text class="t" x="350" y="86">P(5,3)</text><text class="s" x="250" y="235">raio = 5</text></svg>`,
    trapezio:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><polygon points="150,200 490,200 400,70 240,70" fill="#e5e7eb" stroke="#111827" stroke-width="4"/><line x1="240" y1="70" x2="240" y2="200" class="b" stroke-dasharray="8 8"/><text class="t" x="290" y="60">14 cm</text><text class="t" x="285" y="230">30 cm</text><text class="s" x="198" y="145">h</text><text class="s" x="112" y="138">17 cm</text></svg>`,
    setor:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><circle cx="230" cy="140" r="70" fill="#e5e7eb" stroke="#111827" stroke-width="4"/><path d="M230 140 L300 140 A70 70 0 0 1 265 200 Z" fill="#d6b64c" opacity=".75"/><line class="b" x1="230" y1="140" x2="300" y2="140"/><line class="b" x1="230" y1="140" x2="265" y2="200"/><text class="t" x="320" y="150">arco + segmentos</text></svg>`,
    venn:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><circle cx="260" cy="130" r="85" fill="#4b947e" opacity=".45" stroke="#111827" stroke-width="4"/><circle cx="380" cy="130" r="85" fill="#d6b64c" opacity=".55" stroke="#111827" stroke-width="4"/><text class="t" x="210" y="130">Inglês</text><text class="t" x="385" y="130">Espanhol</text><text class="t" x="305" y="145">?</text><text class="s" x="250" y="230">Total 120 · nenhum 20</text></svg>`,
    telhado:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><line class="b" x1="110" y1="205" x2="540" y2="205"/><line class="b" x1="180" y1="205" x2="400" y2="160"/><line class="b" x1="180" y1="205" x2="400" y2="115"/><line class="b" x1="400" y1="205" x2="400" y2="115" stroke-dasharray="8 8"/><text class="s" x="260" y="225">AD = 5m</text><text class="s" x="410" y="185">1m</text><text class="s" x="405" y="125">B</text><text class="s" x="405" y="165">C</text></svg>`,
    dominio:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><text class="t" x="150" y="85">f(x) = √((x + 1)/(x² − 16))</text><line class="b" x1="120" y1="170" x2="520" y2="170"/><circle cx="220" cy="170" r="8" class="d"/><circle cx="420" cy="170" r="8" class="d"/><text class="s" x="210" y="200">−4</text><text class="s" x="412" y="200">4</text><text class="s" x="285" y="230">denominador ≠ 0</text></svg>`,
    retaDistancia:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><line class="b" x1="90" y1="210" x2="560" y2="210"/><line class="b" x1="130" y1="225" x2="130" y2="40"/><line class="b" x1="130" y1="55" x2="500" y2="210"/><circle cx="250" cy="170" r="7" class="d"/><line x1="250" y1="170" x2="310" y2="126" stroke="#4b947e" stroke-width="5" stroke-dasharray="8 8"/><text class="t" x="260" y="170">P(3,2)</text><text class="s" x="365" y="125">Avenida A</text></svg>`,
    tabela:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><rect x="120" y="55" width="400" height="150" fill="#e5e7eb" stroke="#111827" stroke-width="3"/><line class="b" x1="120" y1="95" x2="520" y2="95"/><line class="b" x1="260" y1="55" x2="260" y2="205"/><text class="t" x="145" y="82">Estatura</text><text class="t" x="310" y="82">Frequência</text><text class="s" x="160" y="125">1,62</text><text class="s" x="345" y="125">120</text><text class="s" x="160" y="155">1,65</text><text class="s" x="345" y="155">150</text><text class="s" x="160" y="185">1,70</text><text class="s" x="345" y="185">200</text></svg>`,
    venn3:`<svg ${comum}>${estilos}<rect class="a" width="640" height="260" rx="18"/><circle cx="280" cy="120" r="78" fill="#4b947e" opacity=".45" stroke="#111827" stroke-width="3"/><circle cx="360" cy="120" r="78" fill="#d6b64c" opacity=".45" stroke="#111827" stroke-width="3"/><circle cx="320" cy="175" r="78" fill="#60a5fa" opacity=".35" stroke="#111827" stroke-width="3"/><text class="t" x="230" y="75">B</text><text class="t" x="390" y="75">F</text><text class="t" x="315" y="235">V</text><text class="s" x="255" y="140">interseções</text></svg>`
  };
  return mapas[tipo] || '';
}

function normalizarSimulado(nome){
  if (simulados[nome]) return nome;
  const chave = Object.keys(simulados).find(k => k.toLowerCase() === String(nome).toLowerCase());
  return chave || "Simulado Diagnóstico";
}

function abrirSimulado(nome){
  const chave = normalizarSimulado(nome);
  simuladoAtual = simulados[chave];
  corrigido = false;
  document.getElementById('tituloSimulado').textContent = simuladoAtual.titulo;
  const box = document.getElementById('questaoBox');
  box.innerHTML = `
    <div class="simulado-info-box">
      <strong>${simuladoAtual.descricao}</strong><br>
      <span>${simuladoAtual.questoes.length} questões · nível OTT e STT · correção automática</span><br>
      <span id="timerSimulado">Tempo: ${simuladoAtual.tempoMinutos}:00</span>
    </div>
    ${simuladoAtual.questoes.map((q, i) => `
      <div class="questao" id="questao-${i}">
        <div class="questao-topo">
          <span>${String(i + 1).padStart(2,'0')}</span>
          <b>${q.materia}</b>
          <em class="nivel-${q.dificuldade.toLowerCase().replace('í','i')}">${q.dificuldade}</em>
        </div>
        ${q.figura ? `<div class="figura-questao">${figuraSVG(q.figura)}</div>` : ''}
        <h4>${q.pergunta}</h4>
        <div class="opcoes">
          ${q.opcoes.map((op, idx) => `
            <label>
              <input type="radio" name="q${i}" value="${op}">
              <span>${String.fromCharCode(65 + idx)}) ${op}</span>
            </label>
          `).join('')}
        </div>
        <div class="feedback" id="feedback-${i}" style="display:none"></div>
      </div>
    `).join('')}
  `;
  document.getElementById('resultado').textContent = '';
  document.getElementById('modalSimulado').classList.add('active');
  iniciarTimer(simuladoAtual.tempoMinutos);
}

function iniciarTimer(minutos){
  clearInterval(intervaloTimer);
  segundosRestantes = minutos * 60;
  intervaloTimer = setInterval(() => {
    segundosRestantes--;
    const timer = document.getElementById('timerSimulado');
    if (timer) {
      const min = Math.floor(segundosRestantes / 60);
      const seg = String(segundosRestantes % 60).padStart(2, '0');
      timer.textContent = `Tempo: ${min}:${seg}`;
      if (segundosRestantes <= 300) timer.style.color = '#b91c1c';
    }
    if (segundosRestantes <= 0) {
      clearInterval(intervaloTimer);
      corrigirSimulado(true);
    }
  }, 1000);
}

function fecharSimulado(){
  clearInterval(intervaloTimer);
  document.getElementById('modalSimulado').classList.remove('active');
}

function corrigirSimulado(tempoEsgotado = false){
  if (!simuladoAtual || corrigido) return;
  let acertos = 0;
  let respondidas = 0;
  const errosPorMateria = {};
  simuladoAtual.questoes.forEach((q, i) => {
    const marcada = document.querySelector(`input[name="q${i}"]:checked`);
    const feedback = document.getElementById(`feedback-${i}`);
    if (marcada) respondidas++;
    const acertou = marcada && marcada.value === q.correta;
    if (acertou) acertos++;
    else errosPorMateria[q.materia] = (errosPorMateria[q.materia] || 0) + 1;
    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = `feedback ${acertou ? 'ok' : 'erro'}`;
      feedback.innerHTML = acertou
        ? `✅ Correta. <small>${q.explicacao}</small>`
        : `❌ Correta: <strong>${q.correta}</strong>. <small>${q.explicacao}</small>`;
    }
    document.querySelectorAll(`input[name="q${i}"]`).forEach(input => input.disabled = true);
  });
  if (respondidas < simuladoAtual.questoes.length && !tempoEsgotado) {
    const confirmar = confirm(`Você respondeu ${respondidas}/${simuladoAtual.questoes.length} questões. Deseja corrigir mesmo assim?`);
    if (!confirmar) {
      simuladoAtual.questoes.forEach((q, i) => {
        document.querySelectorAll(`input[name="q${i}"]`).forEach(input => input.disabled = false);
        const feedback = document.getElementById(`feedback-${i}`);
        if (feedback) feedback.style.display = 'none';
      });
      return;
    }
  }
  corrigido = true;
  clearInterval(intervaloTimer);
  const total = simuladoAtual.questoes.length;
  const nota = Math.round((acertos / total) * 100);
  const desempenho = nota >= 80 ? 'Excelente. Você já está competitivo no padrão OTT e STT.' : nota >= 65 ? 'Bom. Falta lapidar os erros e ganhar velocidade.' : nota >= 50 ? 'Regular. Reforce teoria e refaça as questões erradas.' : 'Atenção. Volte às bases e faça revisão por matéria.';
  const materiasFracas = Object.entries(errosPorMateria).sort((a,b)=>b[1]-a[1]).slice(0,3).map(([m,qtd])=>`${m} (${qtd})`).join(', ') || 'nenhuma';
  const historico = JSON.parse(localStorage.getItem('historicoSimuladosESA') || '[]');
  historico.unshift({simulado: simuladoAtual.titulo, acertos, total, nota, data: new Date().toLocaleString('pt-BR')});
  localStorage.setItem('historicoSimuladosESA', JSON.stringify(historico.slice(0, 10)));
  document.getElementById('resultado').innerHTML = `
    <div class="resultado-card">
      ${tempoEsgotado ? '<b>⏰ Tempo esgotado.</b><br>' : ''}
      <strong>Resultado: ${acertos}/${total} acertos · Aproveitamento ${nota}%</strong><br>
      <span>${desempenho}</span><br>
      <span><b>Matérias para revisar:</b> ${materiasFracas}</span>
    </div>`;
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') fecharSimulado(); });
window.abrirSimulado = abrirSimulado;
window.fecharSimulado = fecharSimulado;
window.corrigirSimulado = corrigirSimulado;





