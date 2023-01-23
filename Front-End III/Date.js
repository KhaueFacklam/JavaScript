// ================================ DATE ================================

getDate(); // Retorna o dia do mês (de 1 a 31)
var d = new Date();
var dia = d.getDate();
var d = new Date("July 21, 1983 01:15:00"); // Obter o dia de uma data específica
var day = d.getDate();

// ======================================================================

getDay(); // Retorna o dia da semana (de 0 a 6)
var d = new Date();
var dia = d.getDay();
var d = new Date("July 21, 1983 01:15:00"); // Obter o dia da semana de uma data específica
var day = d.getDay();

// ======================================================================

getFullYear(); // retorna o ano completo
var d = new Date();
var year = d.getFullYear();
var d = new Date("July 21, 1983 01:15:00"); // Obter o ano de uma data específica:
var year = d.getFullYear();

// ======================================================================

getHours(); // Retorna o ano
var d = new Date();
var hora = d.getHours();
var d = new Date("July 21, 1983 01:15:00"); // Obter as horas de uma data específica
var hora = d.getHours();

// ======================================================================

getMilliseconds(); // retorna os milissegundos (0 a 999)
var d = new Date();
var ms = d.getMilliseconds();
var d = new Date("July 21, 1983 01:15:00:526"); // Obter os milissegundos de uma data específica:
var ms = d.getMilliseconds();

// ======================================================================

getMinutes(); // retorna os minutos (0 a 59)
var d = new Date();
var minutos = d.getMinutes();
var d = new Date("July 21, 1983 01:15:00"); // Obter os minutos de uma data específica:
var minutos = d.getMinutes();

// ======================================================================

getMonth(); // retorna o mês (0 a 11)
var d = new Date();
var mes = d.getMonth();

var mes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]; // Obtenha o nome do mês (não apenas um número):

var d = new Date();
var nome = mes[d.getMonth()];

// ======================================================================

getSeconds(); // retorna os segundos (0 a 59)
var d = new Date();
var segundos = d.getSeconds();

// Adicione zeros e dois pontos para exibir a hora:
var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
var time = h + ":" + m + ":" + s;

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// ======================================================================
getTime(); // retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00.
var d = new Date();
var time = d.getTime();

// Calcular milissegundos em um ano
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
var year = day * 365;

// Dividir o tempo com um ano
var d = new Date();
var years = Math.round(d.getTime() / year);

// ======================================================================

toLocaleString(); // obtenha data e hora, usando convenções de localidade:
var d = new Date();
var text = d.toLocaleString();

// ======================================================================

toLocaleTimeString(); // obtenha o horário, usando convenções de localidade
var d = new Date();
var text = d.toLocaleTimeString();

// ======================================================================

toLocaleDateString(); // obtenha a data, usando convenções de localidade
var d = new Date();
var text = d.toLocaleDateString();
