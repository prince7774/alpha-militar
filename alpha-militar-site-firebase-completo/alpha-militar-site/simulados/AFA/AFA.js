const simulados = {
  "Simulado Diagnostico Avancado": {
    titulo: "Simulado Diagnostico Avancado AFA",
    descricao: "Prova mista para medir prontidao em Matematica, Fisica, Portugues, Ingles e Redacao no padrao AFA.",
    tempoMinutos: 150,
    questoes: [
      q("Matematica","Dificil","Se z = 1 + i raiz(3), entao o valor de z^12 e:",["4096","-4096","2048i","-2048i","1024"],"4096","z tem modulo 2 e argumento pi/3. z^12 = 2^12 cis(4pi) = 4096."),
      q("Matematica","Dificil","A soma das raizes reais de x^4 - 10x^2 + 9 = 0 e:",["0","4","-4","10","18"],"0","Faca y=x^2: y^2-10y+9=0, y=1 ou 9. Raizes: -3,-1,1,3. Soma 0."),
      q("Matematica","Dificil","Na PA em que a3=11 e a17=67, a soma dos 20 primeiros termos vale:",["820","840","860","880","900"],"840","r=(67-11)/14=4. a1=3. S20=(2*3+19*4)*20/2=840."),
      q("Matematica","Dificil","Quantos anagramas da palavra AERONAUTICA comecam por vogal?",["1.814.400","907.200","604.800","453.600","302.400"],"1.814.400","Ha 7 vogais com repeticao de A tres vezes. Fixando uma vogal na primeira posicao e somando os casos, obtem-se 1.814.400."),
      q("Fisica","Dificil","Um projetil e lancado com v0=40 m/s a 30 graus. Adote g=10 m/s². O alcance horizontal e aproximadamente:",["80 m","120 m","138 m","160 m","200 m"],"138 m","R=v0² sen(60)/g = 1600*0,866/10 = 138,6 m."),
      q("Fisica","Dificil","Um bloco de 4 kg sobe plano inclinado de 30 graus sem atrito, puxado por forca paralela de 35 N. A aceleracao e:",["1,25 m/s²","2,5 m/s²","3,75 m/s²","5,0 m/s²","7,5 m/s²"],"3,75 m/s²","Componente do peso: mg sen30=20 N. Resultante=35-20=15 N. a=15/4=3,75."),
      q("Fisica","Dificil","Duas cargas puntiformes iguais estao a distancia d. Se a distancia passa a d/3, a forca eletrica:",["triplica","fica 6 vezes maior","fica 9 vezes maior","fica 3 vezes menor","nao muda"],"fica 9 vezes maior","Pela lei de Coulomb, F e inversamente proporcional a d²."),
      q("Fisica","Dificil","Uma lente convergente tem distancia focal 20 cm. Um objeto esta a 30 cm. A imagem se forma a:",["12 cm","20 cm","30 cm","60 cm","90 cm"],"60 cm","1/f=1/p+1/p'. 1/20=1/30+1/p', logo p'=60 cm."),
      q("Portugues","Dificil","Em 'Convem que os candidatos revisem os erros', a oracao subordinada exerce funcao de:",["sujeito","objeto direto","objeto indireto","adjunto adverbial","aposto"],"sujeito","A oracao 'que os candidatos revisem os erros' e sujeito de 'convem'."),
      q("Portugues","Dificil","Assinale a alternativa com regencia correta:",["Aspiro o cargo de cadete.","Prefiro matematica do que fisica.","Obedeco ao regulamento.","Assisti a prova ontem.","Cheguei no colegio cedo."],"Obedeco ao regulamento.","Obedecer exige objeto indireto com preposicao a."),
      q("Portugues","Dificil","A crase esta correta em:",["Refiro-me a disciplina.","Entreguei o recurso a ele.","Cheguei a uma conclusao.","Fui a AFA ontem.","Voltei as pressas."],"Voltei as pressas.","Locucao adverbial feminina recebe crase: as pressas."),
      q("Portugues","Dificil","Em 'O cadete, disciplinado, manteve a postura', o termo entre virgulas e:",["aposto explicativo","vocativo","predicativo circunstancial","objeto direto","adjunto adnominal"],"predicativo circunstancial","Caracteriza o sujeito no momento da acao verbal."),
      q("Ingles","Dificil","Choose the correct sentence:",["If I were you, I would study more.","If I was you, I will study more.","If I am you, I would study more.","If I were you, I will studies more.","If I was you, I would studied more."],"If I were you, I would study more.","Second conditional: if + past subjunctive, would + base verb."),
      q("Ingles","Dificil","In 'The exam was postponed due to heavy rain', 'due to' expresses:",["contrast","cause","purpose","comparison","condition"],"cause","'Due to' indica causa."),
      q("Ingles","Dificil","The passive voice of 'The committee approved the report' is:",["The report was approved by the committee.","The report approved the committee.","The committee was approved by the report.","The report is approve by the committee.","The report has approve."],"The report was approved by the committee.","Objeto vira sujeito: was approved by."),
      q("Redacao","Dificil","Em uma dissertacao argumentativa, repertorio produtivo e aquele que:",["apenas enfeita o texto","substitui a tese","comprova e se conecta ao argumento","aparece so no titulo","dispensa desenvolvimento"],"comprova e se conecta ao argumento","Repertorio so pontua bem quando e pertinente, legitimado e articulado ao raciocinio."),
      q("Redacao","Dificil","Uma conclusao eficiente deve:",["abrir novo problema","retomar a tese e fechar o percurso argumentativo","copiar a introducao","trazer argumento inedito extenso","ignorar conectivos"],"retomar a tese e fechar o percurso argumentativo","A conclusao finaliza a linha de raciocinio sem abrir nova discussao."),
      q("Matematica","Dificil","Se log2=a e log3=b, entao log(72) e:",["3a+2b","2a+3b","a+b","4a+b","a+4b"],"3a+2b","72=2^3*3^2. Logo log72=3log2+2log3."),
      q("Fisica","Dificil","Um resistor de 6 ohms e outro de 3 ohms em paralelo sao ligados a 12 V. A corrente total e:",["2 A","3 A","4 A","6 A","8 A"],"6 A","Req=2 ohms. I=V/R=12/2=6 A."),
      q("Portugues","Dificil","A colocacao pronominal esta adequada em:",["Me disseram a verdade.","Dir-me-ei a verdade.","Nao me disseram a verdade.","Disseram-me nao a verdade.","Sempre disseram-me isso."],"Nao me disseram a verdade.","Palavra negativa atrai o pronome: nao me disseram.")
    ]
  },
  "Simulado AFA 01": {
    titulo: "Simulado AFA 01 - Exatas Avancado",
    descricao: "Treino pesado com foco em Matematica e Fisica, incluindo funcoes, geometria, dinamica, eletricidade e optica.",
    tempoMinutos: 150,
    questoes: [
      q("Matematica","Dificil","O dominio real de f(x)=raiz((x-2)/(x+3)) e:",["(-infinito,-3) U [2,infinito)","(-3,2]","[-3,2]","(2,infinito)","R - {-3}"],"(-infinito,-3) U [2,infinito)","Exige (x-2)/(x+3) >= 0 e x diferente de -3."),
      q("Matematica","Dificil","A equacao da circunferencia de centro (2,-1) e raio 5 e:",["x²+y²-4x+2y-20=0","x²+y²+4x-2y-20=0","x²+y²-2x+y-25=0","x²+y²-4x+2y+20=0","x²+y²+2x-4y-20=0"],"x²+y²-4x+2y-20=0","(x-2)²+(y+1)²=25. Expandindo: x²+y²-4x+2y-20=0."),
      q("Matematica","Dificil","A area maxima de um retangulo de perimetro 40 cm e:",["80 cm²","90 cm²","100 cm²","120 cm²","160 cm²"],"100 cm²","Para perimetro fixo, a area maxima ocorre no quadrado: lado 10, area 100."),
      q("Matematica","Dificil","Se sen x=3/5 e x esta no segundo quadrante, entao cos x vale:",["4/5","-4/5","3/4","-3/5","5/4"],"-4/5","No segundo quadrante o cosseno e negativo. Pelo triangulo 3-4-5, cos=-4/5."),
      q("Matematica","Dificil","O coeficiente de x^4 em (2x-1)^6 e:",["120","240","-240","60","-120"],"240","Termo C(6,4)(2x)^4(-1)^2 = 15*16*x^4 = 240x^4."),
      q("Matematica","Dificil","Uma matriz 2x2 tem determinante 5. Se uma linha e multiplicada por 3, o novo determinante e:",["5","8","10","15","25"],"15","Multiplicar uma linha por 3 multiplica o determinante por 3."),
      q("Matematica","Dificil","A distancia entre as retas paralelas 3x+4y-10=0 e 3x+4y+15=0 e:",["3","4","5","6","25"],"5","d=|15-(-10)|/raiz(3²+4²)=25/5=5."),
      q("Matematica","Dificil","Se a probabilidade de acerto em uma questao e 0,7, a probabilidade de acertar exatamente 2 em 3 e:",["0,147","0,189","0,343","0,441","0,700"],"0,441","C(3,2)*0,7²*0,3 = 3*0,49*0,3 = 0,441."),
      q("Fisica","Dificil","Um corpo parte do repouso com aceleracao constante 2 m/s². Em 8 s percorre:",["16 m","32 m","48 m","64 m","80 m"],"64 m","S=at²/2=2*64/2=64 m."),
      q("Fisica","Dificil","Uma forca de 20 N atua por 6 m na mesma direcao do deslocamento. O trabalho e:",["26 J","60 J","120 J","240 J","3,3 J"],"120 J","Trabalho W=F*d*cos0 = 20*6 = 120 J."),
      q("Fisica","Dificil","Um gas ideal sofre transformacao isobarica. Se a temperatura absoluta dobra, o volume:",["cai pela metade","dobra","quadruplica","nao muda","vira zero"],"dobra","Em pressao constante, V/T e constante."),
      q("Fisica","Dificil","Um corpo de 2 kg a 10 m de altura tem energia potencial, com g=10 m/s², igual a:",["20 J","100 J","150 J","200 J","400 J"],"200 J","Ep=mgh=2*10*10=200 J."),
      q("Fisica","Dificil","A frequencia de uma onda de velocidade 340 m/s e comprimento 0,85 m e:",["200 Hz","300 Hz","400 Hz","500 Hz","600 Hz"],"400 Hz","v=lambda*f. f=340/0,85=400 Hz."),
      q("Fisica","Dificil","Em espelho concavo, objeto alem do centro de curvatura gera imagem:",["virtual e direita","real, invertida e menor","real, direita e maior","virtual e maior","impropria"],"real, invertida e menor","Para objeto alem de C, imagem fica entre C e F, real, invertida e reduzida."),
      q("Fisica","Dificil","Um capacitor de 4 microF ligado a 100 V armazena carga:",["100 microC","200 microC","300 microC","400 microC","800 microC"],"400 microC","Q=CV=4 microF * 100 V = 400 microC."),
      q("Fisica","Dificil","Uma particula em MCU aumenta a velocidade mantendo o raio. A aceleracao centripeta:",["diminui","aumenta com v²","fica constante","zera","muda de sentido tangencial"],"aumenta com v²","ac=v²/R."),
      q("Matematica","Dificil","A soma infinita 6 + 3 + 1,5 + ... vale:",["9","10","12","15","18"],"12","PG infinita com a1=6 e q=1/2. Soma=6/(1-1/2)=12."),
      q("Matematica","Dificil","Se f(x)=2x+1 e g(x)=x²-3, entao f(g(4)) vale:",["13","23","25","27","31"],"27","g(4)=13. f(13)=27."),
      q("Fisica","Dificil","Dois resistores de 8 ohms em paralelo equivalem a:",["2 ohms","4 ohms","8 ohms","12 ohms","16 ohms"],"4 ohms","Resistores iguais em paralelo: R/2 = 4 ohms."),
      q("Fisica","Dificil","O periodo de um pendulo simples aumenta quando:",["a massa aumenta","o comprimento aumenta","a amplitude pequena diminui","a gravidade aumenta","a cor do fio muda"],"o comprimento aumenta","T=2pi raiz(L/g).")
    ]
  },
  "Simulado AFA 02": {
    titulo: "Simulado AFA 02 - Linguagens e Prova Completa",
    descricao: "Simulado avancado com Portugues, Ingles, Redacao e questoes de exatas para manter o ritmo de prova.",
    tempoMinutos: 150,
    questoes: [
      q("Portugues","Dificil","Em 'Os pilotos que treinaram mais foram aprovados', a oracao 'que treinaram mais' e:",["substantiva subjetiva","adjetiva restritiva","adverbial causal","coordenada explicativa","substantiva objetiva direta"],"adjetiva restritiva","Restringe o termo 'pilotos', indicando quais foram aprovados."),
      q("Portugues","Dificil","Assinale a alternativa com concordancia correta:",["Houveram muitos inscritos.","Fazem tres anos.","Mais de um candidato faltaram.","Havia muitas duvidas.","Existe muitas regras."],"Havia muitas duvidas.","Haver no sentido de existir e impessoal, fica no singular."),
      q("Portugues","Dificil","No periodo 'Embora estivesse cansado, continuou estudando', ha ideia de:",["causa","condicao","concessao","conclusao","comparacao"],"concessao","Embora introduz concessao: fato contrario ao esperado."),
      q("Portugues","Dificil","A palavra 'suboficial' e formada por:",["prefixacao","sufixacao","parassintese","composicao por justaposicao","reducao"],"prefixacao","O prefixo sub- foi acrescentado a oficial."),
      q("Portugues","Dificil","Em 'Entreguei-lhe o recurso', o pronome 'lhe' exerce funcao de:",["objeto direto","objeto indireto","sujeito","aposto","predicativo"],"objeto indireto","Lhe equivale a 'a ele/ela', complemento indireto."),
      q("Ingles","Dificil","Choose the best option: 'By the time we arrived, the class ___.'",["starts","started","had started","has started","starting"],"had started","Past perfect indica acao anterior a outra no passado."),
      q("Ingles","Dificil","The word 'eventually' usually means:",["eventualmente","finalmente/por fim","raramente","imediatamente","talvez"],"finalmente/por fim","Eventually e falso cognato frequente: significa por fim, finalmente."),
      q("Ingles","Dificil","In 'Despite the difficulty, she passed', 'despite' indicates:",["addition","contrast/concession","cause","purpose","time"],"contrast/concession","Despite introduz oposicao/concessao."),
      q("Ingles","Dificil","Reported speech: He said, 'I am ready.'",["He said that he is ready.","He said that he was ready.","He said that I was ready.","He says that he was ready.","He said ready."],"He said that he was ready.","No discurso indireto no passado, am vira was."),
      q("Ingles","Dificil","Choose the correct relative pronoun: 'The academy ___ trains cadets is famous.'",["who","where","which","whose","whom"],"which","Academy e coisa/instituicao; which retoma o antecedente."),
      q("Redacao","Dificil","Uma falha grave de projeto textual ocorre quando:",["a tese e clara","cada paragrafo tem funcao","ha fuga ao tema","ha conectivos coerentes","a conclusao retoma a tese"],"ha fuga ao tema","Fugir ao tema compromete a pertinencia global do texto."),
      q("Redacao","Dificil","Topico frasal e:",["frase que apresenta a ideia central do paragrafo","titulo obrigatorio","citacao final","sinonimo de conclusao","erro de coesao"],"frase que apresenta a ideia central do paragrafo","Ele orienta o desenvolvimento do paragrafo."),
      q("Redacao","Dificil","Argumento de autoridade deve ser usado para:",["substituir a analise","reforcar uma ideia com fonte pertinente","encher linhas","fugir do tema","encerrar sem conclusao"],"reforcar uma ideia com fonte pertinente","A autoridade precisa ser conectada ao argumento do aluno."),
      q("Matematica","Dificil","Se f(x)=x²-6x+5, o valor minimo de f e:",["-5","-4","0","4","5"],"-4","Vertice em x=3. f(3)=9-18+5=-4."),
      q("Matematica","Dificil","A solucao de 2^(x+1)=32 e:",["3","4","5","6","8"],"4","32=2^5. Logo x+1=5, x=4."),
      q("Matematica","Dificil","Em um triangulo, lados 7, 8 e 9. Pelo formula de Heron, a area e:",["12 raiz5","10 raiz5","24 raiz5","6 raiz5","36"],"12 raiz5","s=12. Area=raiz(12*5*4*3)=raiz720=12raiz5."),
      q("Fisica","Dificil","Um corpo recebe 600 cal e sua temperatura sobe 20 C. Sua capacidade termica e:",["20 cal/C","30 cal/C","40 cal/C","60 cal/C","120 cal/C"],"30 cal/C","C=Q/deltaT=600/20=30 cal/C."),
      q("Fisica","Dificil","A unidade de campo eletrico no SI pode ser escrita como:",["N/C","J/s","Wb","kg/m","C/N"],"N/C","Campo eletrico E=F/q, unidade N/C."),
      q("Fisica","Dificil","Um raio de luz passa do ar para a agua. Em geral, sua velocidade:",["aumenta","diminui","nao muda","vira nula","dobra"],"diminui","Em meio de maior indice de refracao, a velocidade da luz diminui."),
      q("Portugues","Dificil","A alternativa em que 'se' e indice de indeterminacao do sujeito e:",["Vendem-se casas.","Precisa-se de disciplina.","Ele se feriu.","Se estudar, passa.","O aluno se dedicou."],"Precisa-se de disciplina.","Com verbo transitivo indireto/intransitivo na 3ª pessoa, o se pode indeterminar o sujeito.")
    ]
  }
};

let simuladoAtual = null;
let intervaloTimer = null;
let segundosRestantes = 0;
let corrigido = false;

function q(materia, dificuldade, pergunta, opcoes, correta, explicacao) {
  return { materia, dificuldade, pergunta, opcoes, correta, explicacao };
}

const extrasAFA64 = [
  q("Matematica","Dificil","Se a funcao f(x)=ax+b satisfaz f(2)=7 e f(5)=16, entao f(9) vale:",["24","25","26","27","28"],"28","A inclinacao e (16-7)/(5-2)=3. Logo f(x)=3x+1 e f(9)=28."),
  q("Matematica","Dificil","A soma das raizes da equacao 3x²-12x+7=0 e:",["4","7/3","12","-4","3"],"4","Pelas relacoes de Girard, soma = -b/a = 12/3 = 4."),
  q("Matematica","Dificil","O produto das raizes de 2x²-5x-3=0 e:",["-3/2","3/2","-5/2","5/2","2"],"-3/2","Pelas relacoes de Girard, produto = c/a = -3/2."),
  q("Matematica","Dificil","Se cos x = -12/13 e x esta no segundo quadrante, entao sen x e:",["5/13","-5/13","12/13","-12/13","1/13"],"5/13","No segundo quadrante o seno e positivo. Pelo triangulo 5-12-13, sen x=5/13."),
  q("Matematica","Dificil","O numero de subconjuntos de um conjunto com 8 elementos e:",["16","32","64","128","256"],"256","Um conjunto com n elementos possui 2^n subconjuntos. Para n=8, 2^8=256."),
  q("Matematica","Dificil","A area de um triangulo equilatero de lado 8 cm e:",["16 raiz3","24 raiz3","32 raiz3","48 raiz3","64 raiz3"],"16 raiz3","Area = l² raiz3/4 = 64 raiz3/4 = 16 raiz3."),
  q("Matematica","Dificil","A equacao da reta que passa por (1,2) e (3,8) tem coeficiente angular:",["2","3","4","5","6"],"3","m=(8-2)/(3-1)=6/2=3."),
  q("Matematica","Dificil","Se A e B sao eventos independentes, P(A)=0,4 e P(B)=0,5, entao P(A inter B) e:",["0,1","0,2","0,4","0,5","0,9"],"0,2","Eventos independentes: P(A inter B)=P(A)*P(B)=0,4*0,5=0,2."),
  q("Matematica","Dificil","O termo independente de x em (x + 2/x)^6 e:",["80","120","160","240","320"],"160","Termo geral C(6,k)x^(6-k)(2/x)^k. Expoente zero: 6-2k=0, k=3. C(6,3)*2^3=160."),
  q("Matematica","Dificil","A soma dos 10 primeiros termos da PG 3, 6, 12, ... e:",["1533","2046","3069","4092","6141"],"3069","S10=3*(2^10-1)/(2-1)=3*1023=3069."),
  q("Matematica","Dificil","Se uma circunferencia tem equacao x²+y²-6x+8y=0, seu raio e:",["3","4","5","6","7"],"5","Completando quadrados: (x-3)²+(y+4)²=25. Raio 5."),
  q("Fisica","Dificil","Um movel percorre 180 km em 2 h 30 min. Sua velocidade media e:",["60 km/h","66 km/h","72 km/h","80 km/h","90 km/h"],"72 km/h","2h30min = 2,5 h. v=180/2,5=72 km/h."),
  q("Fisica","Dificil","Um corpo de 5 kg recebe resultante de 30 N. Sua aceleracao e:",["2 m/s²","4 m/s²","5 m/s²","6 m/s²","10 m/s²"],"6 m/s²","Pela segunda lei de Newton, a=F/m=30/5=6 m/s²."),
  q("Fisica","Dificil","Um bloco escorrega sem atrito de altura 5 m. Com g=10 m/s², sua velocidade no ponto mais baixo e:",["5 m/s","10 m/s","15 m/s","20 m/s","25 m/s"],"10 m/s","Conservacao de energia: mgh=mv²/2. v=raiz(2gh)=raiz(100)=10 m/s."),
  q("Fisica","Dificil","Uma mola de constante 200 N/m e comprimida 0,10 m. A energia elastica armazenada e:",["0,5 J","1 J","2 J","5 J","10 J"],"1 J","E=kx²/2 = 200*0,01/2 = 1 J."),
  q("Fisica","Dificil","Um motor realiza 1200 J de trabalho em 20 s. Sua potencia media e:",["40 W","50 W","60 W","80 W","120 W"],"60 W","Potencia P=W/t=1200/20=60 W."),
  q("Fisica","Dificil","Um objeto de 4 cm e colocado diante de espelho plano. A imagem tem tamanho:",["1 cm","2 cm","4 cm","8 cm","16 cm"],"4 cm","Espelho plano forma imagem de mesmo tamanho do objeto."),
  q("Fisica","Dificil","Um fio conduz corrente de 3 A por 2 minutos. A carga eletrica transportada e:",["60 C","120 C","180 C","240 C","360 C"],"360 C","Q=i*t=3*120=360 C."),
  q("Fisica","Dificil","Um resistor de 10 ohms percorrido por 2 A dissipa potencia de:",["10 W","20 W","30 W","40 W","80 W"],"40 W","P=Ri²=10*4=40 W."),
  q("Fisica","Dificil","Um som de frequencia 680 Hz propaga-se no ar a 340 m/s. Seu comprimento de onda e:",["0,25 m","0,5 m","1 m","2 m","4 m"],"0,5 m","lambda=v/f=340/680=0,5 m."),
  q("Fisica","Dificil","Em uma transformacao isotermica de gas ideal, o produto PV:",["aumenta sempre","diminui sempre","permanece constante","vira zero","depende da massa apenas"],"permanece constante","Em temperatura constante, para gas ideal, PV=nRT permanece constante."),
  q("Fisica","Dificil","Uma carga positiva abandonada em campo eletrico uniforme move-se espontaneamente:",["contra o campo","no sentido do campo","perpendicular ao campo","em repouso obrigatorio","em circulo"],"no sentido do campo","A forca sobre carga positiva tem o mesmo sentido do campo eletrico."),
  q("Fisica","Dificil","A unidade de quantidade de movimento no SI e:",["N/s","kg m/s","J/m","W s","N m"],"kg m/s","Quantidade de movimento p=mv, portanto unidade kg*m/s."),
  q("Portugues","Dificil","Assinale a alternativa em que ha sujeito inexistente:",["Choveram criticas ao edital.","Faz frio na serra.","Os alunos chegaram cedo.","Precisa-se de monitores.","Venderam livros."],"Faz frio na serra.","Verbos que indicam fenomeno ou estado atmosferico, como fazer frio, sao impessoais."),
  q("Portugues","Dificil","Em 'O estudo constante produz resultados', o nucleo do sujeito e:",["estudo","constante","produz","resultados","O"],"estudo","O nucleo do sujeito e o substantivo principal: estudo."),
  q("Portugues","Dificil","A alternativa com uso correto de 'a fim de' e:",["Estudo afim passar.","Estudo a fim de passar.","Tenho uma ideia a fim.","Somos a fim de amigos.","A fim que estudo."],"Estudo a fim de passar.","'A fim de' indica finalidade."),
  q("Portugues","Dificil","Em 'Apesar da pressao, manteve a calma', o termo inicial expressa:",["condicao","concessao","causa","finalidade","tempo"],"concessao","'Apesar de' introduz ideia concessiva."),
  q("Portugues","Dificil","Assinale a alternativa com pontuacao adequada:",["O aluno que revisa, diariamente melhora.","O aluno, que revisa diariamente melhora.","O aluno que revisa diariamente melhora.","O aluno que, revisa diariamente, melhora.","O aluno, que revisa, diariamente melhora."],"O aluno que revisa diariamente melhora.","A oracao restritiva nao deve ser isolada por virgulas."),
  q("Portugues","Dificil","A palavra 'inconstitucionalmente' apresenta formacao predominante por:",["derivacao prefixal e sufixal","composicao por justaposicao","abreviacao","onomatopeia","sigla"],"derivacao prefixal e sufixal","Ha prefixo in- e sufixos ligados a constitucional."),
  q("Portugues","Dificil","Em 'O professor explicou a materia aos alunos', 'a materia' e:",["objeto direto","objeto indireto","sujeito","predicativo","aposto"],"objeto direto","E complemento verbal sem preposicao obrigatoria."),
  q("Portugues","Dificil","A funcao da linguagem predominante em um texto que defende tese e convence o leitor e:",["fática","apelativa","metalinguistica","poetica","referencial pura"],"apelativa","A argumentacao busca influenciar o leitor, aproximando-se da funcao apelativa."),
  q("Portugues","Dificil","A alternativa com concordancia nominal correta e:",["E proibido entrada.","E proibida a entrada.","Seguem anexo as provas.","As alunas mesmo resolveram.","Muito obrigada, disse o aluno."],"E proibida a entrada.","Com artigo definido, o adjetivo concorda: e proibida a entrada."),
  q("Portugues","Dificil","Em 'Tenho certeza de que vencerei', a oracao introduzida por 'de que' e:",["substantiva completiva nominal","adjetiva explicativa","adverbial final","coordenada conclusiva","substantiva subjetiva"],"substantiva completiva nominal","Completa o sentido do nome 'certeza'."),
  q("Portugues","Dificil","O par em que ambas as palavras devem receber acento pela mesma regra e:",["cafe e sofa","lapis e bonus","historia e heroi","saida e raiz","juri e urubu"],"lapis e bonus","Ambas sao paroxitonas terminadas em -is/-us."),
  q("Ingles","Dificil","Choose the correct option: 'She has lived here ___ 2020.'",["for","since","during","by","until"],"since","Use since with a starting point in time."),
  q("Ingles","Dificil","Choose the correct option: 'They have trained ___ three hours.'",["since","for","at","from","to"],"for","Use for with duration."),
  q("Ingles","Dificil","The opposite of 'increase' is:",["raise","grow","reduce","improve","expand"],"reduce","Increase significa aumentar; reduce significa reduzir."),
  q("Ingles","Dificil","In 'He is used to waking up early', the expression means:",["ele costumava acordar","ele esta acostumado a acordar","ele acordara cedo","ele deveria acordar","ele nunca acorda"],"ele esta acostumado a acordar","Be used to + gerund indica estar acostumado a algo."),
  q("Ingles","Dificil","Choose the correct modal: 'You ___ wear the uniform; it is mandatory.'",["may","might","must","could","would"],"must","Must expressa obrigacao forte."),
  q("Ingles","Dificil","The sentence 'Neither option is correct' means:",["as duas estao corretas","nenhuma opcao esta correta","uma opcao esta correta","todas podem estar corretas","a segunda esta correta"],"nenhuma opcao esta correta","Neither indica negacao de duas alternativas."),
  q("Ingles","Dificil","Choose the correct comparative form:",["more easy","easier","easyer","most easy","easiest than"],"easier","Easy forma o comparativo com -ier: easier."),
  q("Ingles","Dificil","In 'The book was written by a pilot', the sentence is in:",["active voice","passive voice","imperative","present perfect continuous","future perfect"],"passive voice","Estrutura be + past participle indica voz passiva."),
  q("Ingles","Dificil","Choose the correct tag question: 'You are ready, ___?'",["are you","do you","aren't you","don't you","isn't it"],"aren't you","Com frase afirmativa com are, a tag e negativa: aren't you?"),
  q("Ingles","Dificil","The word 'although' introduces:",["cause","contrast","purpose","result","sequence"],"contrast","Although introduz concessao/oposicao."),
  q("Ingles","Dificil","Choose the correct preposition: 'interested ___ aviation'.",["on","at","in","for","with"],"in","A collocation correta e interested in."),
  q("Ingles","Dificil","The plural of 'analysis' is:",["analysises","analyses","analysis","analyzes","analysies"],"analyses","Analysis tem plural irregular de origem grega: analyses.")
];

Object.values(simulados).forEach((simulado, indice) => {
  const giro = (indice * 11) % extrasAFA64.length;
  const extrasRotacionados = extrasAFA64.slice(giro).concat(extrasAFA64.slice(0, giro));
  simulado.questoes = simulado.questoes.concat(extrasRotacionados).slice(0, 64);
});

function normalizarSimulado(nome) {
  if (simulados[nome]) return nome;
  const chave = Object.keys(simulados).find(k => k.toLowerCase() === String(nome).toLowerCase());
  return chave || "Simulado Diagnostico Avancado";
}

function abrirSimulado(nome) {
  const chave = normalizarSimulado(nome);
  simuladoAtual = simulados[chave];
  corrigido = false;
  document.getElementById("tituloSimulado").textContent = simuladoAtual.titulo;
  document.getElementById("questaoBox").innerHTML = montarQuestoes(simuladoAtual);
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("modalSimulado").classList.add("active");
  iniciarTimer(simuladoAtual.tempoMinutos);
}

function montarQuestoes(simulado) {
  return `
    <div class="simulado-info-box">
      <strong>${simulado.descricao}</strong><br>
      <span>${simulado.questoes.length} questoes - nivel avancado AFA - correcao comentada</span><br>
      <span id="timerSimulado">Tempo: ${simulado.tempoMinutos}:00</span>
    </div>
    ${simulado.questoes.map((questao, i) => `
      <div class="questao" id="questao-${i}">
        <div class="questao-topo">
          <span>${String(i + 1).padStart(2, "0")}</span>
          <b>${questao.materia}</b>
          <em class="nivel-${questao.dificuldade.toLowerCase()}">${questao.dificuldade}</em>
        </div>
        <h4>${questao.pergunta}</h4>
        <div class="opcoes">
          ${questao.opcoes.map((opcao, idx) => `
            <label>
              <input type="radio" name="q${i}" value="${opcao}">
              <span>${String.fromCharCode(65 + idx)}) ${opcao}</span>
            </label>
          `).join("")}
        </div>
        <div class="feedback" id="feedback-${i}" style="display:none"></div>
      </div>
    `).join("")}
  `;
}

function iniciarTimer(minutos) {
  clearInterval(intervaloTimer);
  segundosRestantes = minutos * 60;
  intervaloTimer = setInterval(() => {
    segundosRestantes--;
    const timer = document.getElementById("timerSimulado");
    if (timer) {
      const min = Math.floor(segundosRestantes / 60);
      const seg = String(segundosRestantes % 60).padStart(2, "0");
      timer.textContent = `Tempo: ${min}:${seg}`;
      timer.classList.toggle("timer-alerta", segundosRestantes <= 300);
    }
    if (segundosRestantes <= 0) {
      clearInterval(intervaloTimer);
      corrigirSimulado(true);
    }
  }, 1000);
}

function fecharSimulado() {
  clearInterval(intervaloTimer);
  document.getElementById("modalSimulado").classList.remove("active");
}

function corrigirSimulado(tempoEsgotado = false) {
  if (!simuladoAtual || corrigido) return;

  const total = simuladoAtual.questoes.length;
  const respondidas = document.querySelectorAll('#questaoBox input[type="radio"]:checked').length;
  if (respondidas < total && !tempoEsgotado) {
    const confirmar = confirm(`Voce respondeu ${respondidas}/${total} questoes. Deseja corrigir mesmo assim?`);
    if (!confirmar) return;
  }

  let acertos = 0;
  const resumo = {};

  simuladoAtual.questoes.forEach((questao, i) => {
    const marcada = document.querySelector(`input[name="q${i}"]:checked`);
    const acertou = marcada && marcada.value === questao.correta;
    if (acertou) acertos++;

    if (!resumo[questao.materia]) resumo[questao.materia] = { acertos: 0, total: 0 };
    resumo[questao.materia].total++;
    if (acertou) resumo[questao.materia].acertos++;

    const feedback = document.getElementById(`feedback-${i}`);
    feedback.style.display = "block";
    feedback.className = `feedback ${acertou ? "ok" : "erro"}`;
    feedback.innerHTML = acertou
      ? `Correta. <small>${questao.explicacao}</small>`
      : `Correta: <strong>${questao.correta}</strong>. <small>${questao.explicacao}</small>`;

    document.querySelectorAll(`input[name="q${i}"]`).forEach(input => {
      input.disabled = true;
      if (input.value === questao.correta) input.closest("label").classList.add("opcao-correta");
      if (marcada && input === marcada && !acertou) input.closest("label").classList.add("opcao-errada");
    });
  });

  corrigido = true;
  clearInterval(intervaloTimer);
  salvarHistorico(simuladoAtual.titulo, acertos, total);
  exibirResultado(acertos, total, resumo, tempoEsgotado);
}

function exibirResultado(acertos, total, resumo, tempoEsgotado) {
  const nota = Math.round((acertos / total) * 100);
  const mensagem = nota >= 85
    ? "Nivel competitivo para AFA. Mantenha revisao fina e treino cronometrado."
    : nota >= 70
      ? "Bom desempenho. Revise os erros e aumente a velocidade de resolucao."
      : nota >= 55
        ? "Base aproveitavel, mas ainda instavel para nivel avancado."
        : "Priorize teoria e refaca as questoes erradas antes de novo simulado.";

  const porMateria = Object.entries(resumo)
    .map(([materia, dados]) => `<span>${materia}: <b>${dados.acertos}/${dados.total}</b></span>`)
    .join("");

  const historico = JSON.parse(localStorage.getItem("historicoSimuladosAFA") || "[]")
    .slice(0, 5)
    .map(item => `<li>${item.data} - ${item.simulado}: ${item.acertos}/${item.total} (${item.nota}%)</li>`)
    .join("");

  document.getElementById("resultado").innerHTML = `
    <div class="resultado-card">
      ${tempoEsgotado ? "<b>Tempo esgotado.</b><br>" : ""}
      <strong>Resultado: ${acertos}/${total} acertos - ${nota}%</strong>
      <p>${mensagem}</p>
      <div class="resultado-materias">${porMateria}</div>
      <h4>Historico recente</h4>
      <ul>${historico}</ul>
    </div>
  `;
}

function salvarHistorico(simulado, acertos, total) {
  const historico = JSON.parse(localStorage.getItem("historicoSimuladosAFA") || "[]");
  historico.unshift({
    simulado,
    acertos,
    total,
    nota: Math.round((acertos / total) * 100),
    data: new Date().toLocaleString("pt-BR")
  });
  localStorage.setItem("historicoSimuladosAFA", JSON.stringify(historico.slice(0, 10)));
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") fecharSimulado();
});

window.abrirSimulado = abrirSimulado;
window.fecharSimulado = fecharSimulado;
window.corrigirSimulado = corrigirSimulado;

