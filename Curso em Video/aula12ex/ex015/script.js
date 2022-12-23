var verifica = document.querySelector("input#verifica");
verifica.addEventListener("click", verificar);
var result = document.querySelector("div#result");

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();

  var formAno = document.querySelector("input#txtAno");

  if (
    formAno.value.length == 0 ||
    formAno.value > ano ||
    formAno.value < 1900
  ) {
    alert("Verifique os dados e tente novamente");
  } else {
    var formSexo = document.getElementsByName("radioSex");
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSexo[0].checked) {
      genero = "homem";

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "fotoManha.png");
      } else if (idade >= 10 && idade < 21) {
        img.setAttribute("src", "fotoNoite.png");
      } else if (idade >= 21 && idade < 50) {
        //adulto
      } else {
        //idoso
      }
    } else if (formSexo[1].checked) {
      genero = "mulher";

      if (idade >= 0 && idade < 10) {
        //criança
      } else if (idade >= 10 && idade < 21) {
        //jovem
      } else if (idade >= 21 && idade < 50) {
        //adulto
      } else {
        //idoso
      }
    }
  }

  result.innerHTML = `Você é ${genero} e a sua idade é ${idade}`;
  result.appendChild(img);
}
