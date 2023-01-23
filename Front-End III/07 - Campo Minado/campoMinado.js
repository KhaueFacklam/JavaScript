function CampoMinado(linhas, colunas, bombas){
    //linhas/colunas minimo 5
    this.linhas = linhas
    this.colunas = colunas
    this.bombas = bombas
    if (this.linhas < 5) {this.linhas = 5} 
    if (this.colunas < 5){this.colunas = 5}
    if (this.bombas < 3){this.bombas = 3} 
    this.table = document.querySelector('#campoMinado')

    
    this.table.addEventListener('click', (event) => {
        let clickedElement = event.target
        if (clickedElement.classList.contains('bomba')) {
            clickedElement.classList.add('bum')
            console.log("BUM");
            this.bumPopUp()
        } else {
            clickedElement.classList.add('desativada')    
        }
        clickedElement.classList.add('bomba')
    })
    
    this.render = function(){
        for (let i = 0; i < this.linhas; i++) {
            let tr = document.createElement('tr')
            this.table.appendChild(tr)
            for (let i = 0; i < this.colunas; i++) {
                let td = document.createElement('td')
                this.table.appendChild(td)
            }
        }
    }

    this.plantarBombas = function(){
        var tds = document.querySelectorAll('td')
        let count = 0
        while (count < this.bombas)  {
            let pos = Math.floor(Math.random() * tds.length+1)
            if(!tds[pos].classList.contains('bomba')){
                tds[pos].classList.add('bomba')
                count++
            }
        } 
    }

    this.bumPopUp = function () {
        let bumPopUp = document.createElement('div')
        bumPopUp.classList.add('bumPopUp')
        bumPopUp.innerHTML = 'BUM!'
        document.body.appendChild(bumPopUp)
    }

    this.render()
    this.plantarBombas()

}

var campoMinado = new CampoMinado(12, 10, 12)
