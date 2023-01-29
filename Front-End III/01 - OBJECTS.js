// PROTOTYPE ===========================================

function Pessoa(nome, idade, email) {
  this.nome = nome;
  this.idade = idade;
  this.email = email;
}

var pessoa1 = new Pessoa("Glederson", 40, "glederson@gmail.com");

pessoa1.sexo = "masculino";//adiciona propriedade ao OBJETO

Pessoa.prototype.apresentar = function () {//adiciona propriedade ao TIPO(CLASSE)
  console.log(`Olá, meu nome é ${this.nome} e meu email é ${this.email}.`);
};

console.log(pessoa1);
console.log(pessoa1.apresentar());


// FETCH =================================================
function Game () {
    
    this.getDeck = async function (){//opção 1
        const response = await fetch('url.blablabla')
        const data = await response.json()
        const deck_id = data.deck_id
    }

    this.getDeck = function (){//opção 2
        fetch('url.blablabla')
        .then((response) => response.json())
        .then((data) => {const deck_id = data.deck_id})
        .catch((err) => console.log(err))
    }

} 

// ARROW FUNCTION =================================================
elementoDOM.addEventListener('click', clicou) //sem arrow
function clicou(){
    //cod
}

elementoDOM.addEventListener('click', () => {/*cod*/}) //com arrow