function carregar() {
  var msg = document.querySelector("div#msg");
  var img = document.querySelector("img#imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    img.src = "fotoManha.png";
    document.body.style.background = "#f5e4ca"
  } else if (hora >= 12 && hora < 18) {
    img.src = "fotoTarde.png";
    document.body.style.background = "#feba9f"
  } else {
    img.src = "fotoNoite.png";
    document.body.style.background = "#105a78"
  }
}
