// ========================================== WINDOW ==========================================

alert(`Olá, mundo!`); //exibe apenas uma mensagem

// ============================================================================================

prompt(); // exibe uma caixa de diálogo que solicita uma entrada ao usuário.
var conteudo = prompt("Informe-nos algo!");

// ============================================================================================

confirm(); // exibe um botão para TRUE e outro para FALSE
var conteudo = confirm("Pressione o \n botão!");

// ============================================================================================

setInterval(minhaFuncao, 1000); // chama uma função a cada 1 segundo (1000 milissegundos)

function minhaFuncao() {
  alert("Olá");
}

// ============================================================================================

clearInterval(); // Limpa o contador definido com setInterval()
var horario;

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  horario = date.toLocaleTimeString();
  alert(horario);
}

function myStopFunction() {
  clearInterval(myInterval);
}

// ============================================================================================

setTimeout(); // chama uma função APÓS X segundos (milissegundos)
const myTimeout = setTimeout(minhaFuncao, 5000);

function minhaFuncao() {
  document.getElementById("demo").innerHTML = "Olá!";
  myStopFunction();
}

function myStopFunction() {
  clearTimeout(myTimeout);
}
