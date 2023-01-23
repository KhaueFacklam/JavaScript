// cria um novo elemento e dá à ele um conteúdo
var divNova = document.createElement("div");
var paragrafo = document.createElement("p");

paragrafo.innerText = "HAHAHA";
divNova.appendChild(paragrafo);

// adiciona o novo elemento e seu conteúdo ao DOM
var divAtual = document.getElementById("div1");
document.body.insertBefore(divNova, divAtual);




//