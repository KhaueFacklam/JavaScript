// ================================ STRINGS ================================

charAt(); // Retorna um caractere específico
var texto = `Olá, Mundo`;
var letra1 = texto.charAt(0);
var letra2 = texto.charAt(texto.length - 2);

// =========================================================================

charCodeAt(); // Retorna o Unicode do caractere
var texto = "Olá, Mundo";
var codigo = texto.charCodeAt(0);

// =========================================================================

concat(); // Retorna duas ou mais strings unidas
var texto1 = "sea";
var texto2 = "food";
var resultado = texto1.concat(text2);

// =========================================================================

endsWith(); // Verifica se uma string termina com um valor especificado
var text = "Olá Mundo, bem vindo";
var resultado1 = text.endsWith("vindo");
var resultado2 = text.endsWith("mundo", 9);

// =========================================================================

fromCharCode(); // Retorna os valores do Unicode como caracteres
var letra = String.fromCharCode(65);
var texto = String.fromCharCode(79, 76, 65);

// =========================================================================

includes(); // Verifica se uma string contém um valor especificado
var text = "Hello world, welcome to the universe.";
var result = text.includes("world"); // true
var result = text.includes("world", 12); // false

// =========================================================================

indexOf(); // Retorna a posição quando encontrar a primeira ocorrência
var text = "Hello world, welcome to the universe.";
var result = text.indexOf("welcome"); // 13
var result = text.indexOf("Welcome"); // -1
var result = text.indexOf("e"); // 1
var result = text.indexOf("e", 5); // 14

// =========================================================================

lastIndexOf(); // Retorna a posição da última ocorrência de um valor
var text = "Hello planet earth, you are a great planet.";
var result = text.lastIndexOf("planet"); // 36
var result = text.lastIndexOf("Planet"); // -1
var result = text.lastIndexOf("planet", 20);

// =========================================================================

localeCompare(); // Compara duas strings na localidade atual
var text1 = "ab";
var text2 = "cd";
var result = text1.localeCompare(text2);

var text1 = "cd";
var text2 = "ab";
var result = text1.localeCompare(text2);

// =========================================================================

match(); // Pesquisa um valor ou uma expressão e retorna as correspondências
var text = "The rain in SPAIN stays mainly in the plain";
var result = text.match("ain"); // Busca usando uma string
var result = text.match(/ain/); // Busca usando uma expressão regular
var result = text.match(/ain/g); // Busca global por "ain"
var result = text.match(/ain/gi); // Não distingue maiúscula de minúscula

// =========================================================================

repeat(); // Retorna uma nova string com um número de cópias
var text = "Hello world!";
var result = text.repeat(2);
var result = text.repeat(4);

// =========================================================================

replace(); // Retorna uma string onde os valores substituídos
var text = "Visit Microsoft!";
var result = text.replace("Microsoft", "W3Schools");
var text = "Mr Blue has a blue car";
var result = text.replace(/blue/g, "red"); // Substituição global
var num = 1000000;
num.toFixed(2).replace(".", ","); // substitui (.) por (,)

// =========================================================================

search(); // Pesquisa um valor ou expressão e retorna a posição da correspondência
var text = "Mr. Blue has a blue house";
var position = text.search("Blue"); // 4
var position = text.search("blue"); // 15
var position = text.search(/Blue/); // 4
var position = text.search(/blue/); // 15
var position = text.search(/blue/i); // 4

// =========================================================================

slice(); // Extrai uma parte de uma string e retorna uma nova string
var text = "Hello world!";
var result = text.slice(0, 5); // Corta as 5 primeiras posições
var result = text.slice(3); // Da posição 3 até o final

// =========================================================================

split(); // Divide uma string em uma matriz de substrings
var text = "How are you doing today?";
var myArray = text.split(" "); // Divide as palavras
var myArray = text.split(""); // Divide incluindo os espaços
var myArray = text.split(" ", 3); // Use o parâmetro como limite
var word = myArray[1]; // Guarda a segunda palavra

// =========================================================================

startsWith(); // Verifica se uma string começa com caracteres especificados
var text = "Hello world, welcome to the universe.";
var result = text.startsWith("Hello"); // True
var result = text.startsWith("world", 7); // False

// =========================================================================

substr(); // Captura um número específico de caracteres em uma string
var text = "Hello world!";
var result = text.substr(1, 4); // “ello”
var result = text.substr(2); // “llo world!”

// =========================================================================

substring(); // Extrai caracteres de uma string, entre dois índices especificados
var text = "Hello world!";
var result = text.substring(1, 4); // “ell”
var result = text.substring(2); // “llo world!”

// =========================================================================

toLocaleLowerCase(); // Retorna uma string convertida em letras minúsculas, usando a localidade do host
var text = "Hello World!";
var result = text.toLocaleLowerCase(); // “hello world!”

// =========================================================================

toLocaleUpperCase(); // Retorna uma string convertida em letras maiúsculas, usando a localidade do host
var text = "Hello World!";
var result = text.toLocaleUpperCase(); // “HELLO WORLD!”

// =========================================================================

toLowerCase(); // Retorna uma string convertida em letras minúsculas
var text = "Hello World!";
var result = text.toLocaleLowerCase(); // “hello world!”

// =========================================================================

toUpperCase(); // Retorna uma string convertida em letras maiúsculas
var text = "Hello World!";
var result = text.toLocaleUpperCase(); // “HELLO WORLD!”

// =========================================================================

trim(); // Retorna uma string com espaços em branco removidos
var text = "  Hello World!  ";
var result = text.trim(); // remove espaços de ambos os lados
var result = text.replace(/^\s+|\s+$/gm, "");

// =========================================================================

valueOf(); // Retorna o valor primitivo de uma string ou um objeto string
var text = "Hello World!";
var result = text.valueOf();
var result = text;

// ================================ NUMBER =================================

isFinite(); // Verifica se é um número finito
Number.isFinite(123); // true
Number.isFinite("123"); // false

// =========================================================================

isInteger(); // Verifica se um valor é um inteiro
Number.isInteger(123);
Number.isInteger(-123);
Number.isInteger("123");
Number.isInteger(4 - 2);
Number.isInteger(4 / 2);
Number.isInteger(5 / 2);

// =========================================================================

isNaN(); // Verifica se um valor é Number.NaN
Number.isNaN(5 - 2);
Number.isNaN(0);
Number.isNaN("Hello");
Number.isNaN("2005/12/12");
Number.isNaN(" ");

// =========================================================================

isSafeInteger(); // Verifica se um valor é um inteiro seguro
Number.isSafeInteger(5 - 2);
Number.isSafeInteger(0);
Number.isSafeInteger(0.5);
Number.isSafeInteger(0 / 0);

// =========================================================================

toExponential(x); // Converte um número em uma notação exponencial
var num = 5.56789;
var n = num.toExponential(3);

// =========================================================================

toFixed(x); // Formata um número com X números de dígitos após o ponto decimal
var num = 5.56789;
var n = num.toFixed(); // 6
var n = num.toFixed(2); // adiciona duas casas decimais

// =========================================================================

toLocaleString(); // Converte um número em uma string, com base na localidade
var num = 1000000;
var text = num.toLocaleString("pt-BR"); // 1.000.000
// Formata em uma moeda usando a localidade específica
num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// =========================================================================

toPrecision(x); // Formata um número para comprimento x
var num = 13.3714;
var n = num.toPrecision(2); // 13

// =========================================================================

toString(); // Converte um número em uma string
var num = 15;
var text = num.toString();
var text = num.toString(2); // ‘1111’

// =========================================================================

valueOf(); // Retorna o valor primitivo de um número
var num = 15;
var n = num.valueOf(); // 15

// ================================ ARRAYS ================================

concat(); // Une arrays e retorna um array com os arrays unidos
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var crianças = arr1.concat(arr2);

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin"];
var children = arr1.concat(arr2, arr3);

// =========================================================================

copyWithin(); // Copia os dois primeiros elementos da matriz para os dois últimos elementos da matriz
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);

// =========================================================================

every(); // Verifica se todos os elementos em uma matriz passam em um teste
var ages = [32, 33, 16, 40];

ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}

// =========================================================================

fill(); // Preencha todos ou alguns elementos em uma matriz com um valor estático
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Preencha os dois últimos elementos:
fruits.fill("Kiwi", 2, 4);

// =========================================================================

filter(); // Cria um novo array com cada elemento em um array que passa em um teste
var ages = [32, 33, 16, 40];
var result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

// =========================================================================

find(); // Retorna o valor do primeiro elemento em uma matriz que passou em um teste
var ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}

// =========================================================================

findIndex(); // Retorna o índice do primeiro elemento em uma matriz que passou em um teste
var ages = [3, 10, 18, 20];

ages.findIndex(checkAge);

function checkAge(age) {
  return age > 18;
}

// =========================================================================

forEach(); // Chama uma função para cada elemento da matriz
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

// =========================================================================

includes(); // Verifique se uma matriz contém o elemento especificado
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.includes("Mango");

var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Inicia a pesquisa na posição 3
fruits.includes("Banana", 3);

// =========================================================================

indexOf(); // Pesquise na matriz por um elemento e retorne sua posição
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var index = fruits.indexOf("Apple");

var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"]; // Começa no índice 3
var index = fruits.indexOf("Apple", 3);

// =========================================================================

isArray(); // Verifica se um objeto é um array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = Array.isArray(fruits);

// =========================================================================

join(); // Junta todos os elementos de um array em uma string
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var text = fruits.join();

var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Outra separação
var text = fruits.join(" and ");

// =========================================================================

lastIndexOf(); // Encontra o último índice
var fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
var index = fruits.lastIndexOf("Apple");

// =========================================================================

length; // Retorna o número de elementos
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var length = fruits.length;

// =========================================================================

pop(); // Remove o último elemento de uma matriz e retorna esse elemento
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

// =========================================================================

push(); // Adiciona novos elementos ao final de uma matriz
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Adicione dois novos itens ao array:
fruits.push("Kiwi", "Lemon");

// =========================================================================

reverse(); // Inverte a ordem dos elementos em uma matriz
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

// =========================================================================

shift(); // Remove o primeiro elemento de uma matriz e retorna esse elemento
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// =========================================================================

slice(); // Seleciona elementos especificos de um array e retorna o novo array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// =========================================================================

some(); // Verifica se algum dos elementos em uma matriz passa em um teste
var ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}

// =========================================================================

sort(); // Organiza por dem alfabetica
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Classifica e inverte a ordem:
fruits.sort();
fruits.reverse();

// =========================================================================

splice(); // Adiciona ou remove elementos de um array
var fruits = ["Banana", "Orange", "Apple", "Mango"]; // Na posição 2, adicione 2 elementos
fruits.splice(2, 0, "Lemon", "Kiwi");

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]; // Na posição 2, remova 2 itens:
fruits.splice(2, 2);

// =========================================================================

unshift(); // Adiciona novos elementos ao início de uma matriz e retorna o novo comprimento
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");

// =========================================================================
