// ============================= CAPTURANDO valor de um INPUT =============================

// <input type="text" id="nome">
var nome = document.getElementById("nome").value;

// ============================= ARMAZENANDO valores em VETOR ============================

var vetor = []; // vetor declarado
vetor.push(nome); // valor adicionado ou...
vetor.push("texto");

// ==================================== CRIANDO elementos ===================================

var paragrafo = document.createElement("p"); // paragrafo criado.
var imagem = document.createElement("img"); // imagem criada.
var li = document.createElement("li"); // list item criado.

// =================================== inserindo ATRIBUTOS  =================================

paragrafo.innerText = "Texto Qualquer"; // paragrafo recebe texto.
paragrafo.innerText = nome; // ... ou valor de uma variavel.
paragrafo.style.color = "#ce0b0b"; // texto recebe cor.
paragrafo.style.backgroundColor = "#5b9d5b"; // texto recebe cor de fundo.

imagem.src = "NomeDaImagem.png"; // imagem recebe um arquivo (.png ou .jpg ou .jpeg).
imagem.src = ""; // removendo a imagem.

li.innerText = "Texto Qualquer";
li.innerText = nome;
li.style.backgroundColor = "#5b9d5b";

// ================================ adicionando-os ao DOCUMENTO  ================================

document.body.appendChild(paragrafo); // paragrafo adicionado
document.body.appendChild(imagem); // imagem adicionada
document.body.appendChild(li); // li adicionado

// OU inserindo em uma DIV criada no HTML...

var div = document.getElementById("div"); // DIV capturada
div.appendChild(paragrafo); // paragrafo adicionado
div.appendChild(imagem); // imagem adicionada
div.appendChild(li); // li adicionado

// ==================================== DISPARANDO FUNÇÕES ====================================

window.addEventListener("load", minhaFuncao); // função disparada quando a página é carregada

// OU ao click de um botão criado no HTML

var botao = document.getElementById("botao"); // capturando o botão
botao.addEventListener("click", minhaFuncao); // botão aguardando click do mouse

function minhaFuncao() {
  window.alert("FUNCIONOU");
}

// ================================= gerando valores ALEATÓRIOS =================================

var aleatorio = 0;

aleatorio = Math.floor(Math.random() * 10); // Retorna e armazena um inteiro aleatório de 0 a 9
aleatorio = Math.floor(Math.random() * 100); // de 0 a 99
aleatorio = Math.floor(Math.random() * 100) + 1; // de 0 a 100

// =================================== tamanho de uma String ====================================

var texto = "Texto Qualquer";
texto.length;

// ============================ VERIFICANDO se um VALOR EXISTE no VETOR ============================

includes(); // Verifica se um vetor contém o elemento especificado

var vetor = ["Roberta", "Prova", 9.5];
var nome = "Roberta";

if (vetor.includes(nome)) {
  // verifica se
  // tal coisa irá acontecer
} else {
  // tal coisa irá acontecer
}

// =========================================== TIMER ===========================================

var tempo = setTimeout(minhaFuncao, 3000); // chama uma função a cada 3 segundos (3000 milisegunndos)

clearTimeout(tempo); // remove o contador armezeanado na variável

function minhaFuncao() {
  window.alert("FUNCIONOU");
}

// ======================================== CONVERTENDO ========================================

var exemplo1 = "1234";
var exemplo2 = 87;

exemplo1 = Number(exemplo1); // converte a string para valor númerico
exemplo2 = String(exemplo1); // converte valor númerico para string

// ================================ IMPRIMINDO texto + variaveis ===============================

var texto = "Gremio"
var valor = 1903

paragrafo.innerText = `O time do ${texto} foi fundado em ${valor}!` // Usa-se crases com ${} ou...
paragrafo.innerText = "O time do " + texto + " foi fundado em " + valor + "!" // Aspas com +

