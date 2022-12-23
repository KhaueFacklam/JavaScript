var imagens = []
var cont = 0, pontos = 0;
addEventListener("load", function () {
    var timer = setInterval(function name(params) {
        let image = document.createElement("img")
        image.setAttribute("src","fire.png")
        image.addEventListener("click",pontuar)
        let vertical = Math.floor(Math.random() * 96);
        let horizontal = Math.floor(Math.random() * 98);
        image.style.top = vertical+'vh';
        image.style.left = horizontal+'vw';
        document.body.appendChild(image);
        imagens.push = image;
        cont++;
        if (cont == 10) {
            clearInterval(timer);
            let mensagem = document.getElementById("pontos")
            mensagem.innerHTML = mensagem.innerHTML + " FIM DE JOGO"
            removeEventListener("click", document.getElementsByTagName("img"))
        }
    }, 2000)
})

function pontuar() {
    cont--;
    pontos++;
    document.getElementById("pontos").innerHTML = pontos
    this.setAttribute("src","");
}
