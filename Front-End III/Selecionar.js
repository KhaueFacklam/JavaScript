//----------------------- SELETOR -----------------------

<p id="nome">HAHAHA</p>;
document.querySelector("p#nome");

<p class="nome">HAHAHA</p>;
document.querySelector("p.nome");

//------------------------- ID --------------------------

<p id="nome">HAHAHA</p>;
document.getElementById("nome");

//----------------------- CLASSE ------------------------

<p classe="nome">HAHAHA</p>;
document.getElementsByClassName("nome");

//------------------------ TAG --------------------------

document.getElementsByTagName("p")[0];

var body = document.body;
body.style.background = "black";

//------------------------ NOME -------------------------
<p name="nome">HAHAHA</p>
document.getElementsByTagName("nome")[0]