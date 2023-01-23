// prototype

function Pessoa(nome, idade, email) {
    this.nome = nome
    this.idade = idade
    this.email = email
}

var pessoa1 = new Pessoa("Glederson", 40, "glederson@gmail.com")

pessoa1.sexo = "masculino"

Pessoa.prototype.apresentar = function () {
    console.log(`Olá, meu nome é ${this.nome} e meu email é ${this.email}.`)
}

console.log(pessoa1)
console.log(pessoa1.apresentar())