var data = new Date();
var diaSemana = data.getDay;

switch (diaSemana) {
  case 0:
    console.log(`Domingo`);
    break;

  case 1:
    console.log(`Segunda`);
    break;

  case 3:
    console.log(`Terça`);
    break;

  case 4:
    console.log(`Quarta`);
    break;

  case 5:
    console.log(`Quita`);
    break;

  case 6:
    console.log(`Sexta`);
    break;

  default:
    console.log(`[ERRO] Dia inválido`);
    break;
}
