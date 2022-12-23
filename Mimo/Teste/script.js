//---------------------------------------   FORMATO   ---------------------------------------\\
var NomeDaVariavel = "Valor da Variável";

//-----------------------------------------  TESTES  ----------------------------------------\\
var nome = "Khaue";
console.log("Hello World");
console.log(nome);
console.log(!false);                                            //reultado será TRUE

//----------------------------------  VERIFICADOR RELACIONAL  --------------------------------\\
console.log(10 === 10);                                         //reultado será TRUE
console.log("Gremio" === "Grêmio!");                            //reultado será FALSE
console.log(1 !== 10);                                          //reultado será TRUE

//--------------------------------------  CONDICIONAIS  -------------------------------------\\
var qualquer = true;
if (qualquer) {
    console.log("Hello");
}
else {
    console.log("Bye");
};

//-----------------------------------------  ARRAYS  ----------------------------------------\\
//-------------------------  adicionar e remover valores de um array  ------------------------\\
var arrayTeste = ["Valor um", "Valor dois"];
arrayTeste.push("Valor tres");
var removido = arrayTeste.pop(); //parentes vazios removem ultimo valor / variável recebe ele
console.log(arrayTeste);
console.log(removido);
//--------------------  contar e armazenar o número de elementos de um array  ----------------\\
console.log(arrayTeste.length);
var UmArrayQualquer = ["Um","Dois","Tres","Quatro"]
var armazenar = UmArrayQualquer.length
console.log(armazenar);
//--------------------------  array preenchido com valores de 1 a 1000  ----------------------\\
var myNumbers = [];
for (var i = 1; i <= 1000; i++) {
 myNumbers.push(i);
}
//---------------------------  adicionando variáveis dentro de arrays  -----------------------\\
var n1 = 10;
var n2 = 20;
var n3 = 30;
var arrayTeste = [n1,n2,n3];
console.log(arrayTeste);

//-----------------------------------------  FUNÇÔES  ----------------------------------------\\
function nomeDaFuncao(){
    console.log("Meu Penis");
};
nomeDaFuncao();                                 //chamando apenas a função sem passar valores

//-------------------------  declarando uma função e passando valores  -----------------------\\
function getName(valor1, valor2, valor3){
    console.log("Olá, " + valor1 + valor3);
}
getName("Khaue", " Fabião", " Tavares");

//--------- chamando uma função, retornando o resultado em um variável e imprimindo-a  -------\\
function getResultado(valor1, valor2, valor3){
    return valor1 + valor2 + valor3;
}
var resultado = getResultado("um", " dois", " tres");
    console.log(resultado);

//-------------------------------------  exemplo Parte 02  -----------------------------------\\    
function conta(valor1, valor2, valor3){
return valor1 + valor2 * valor3;
}
var resultado = conta(15, 12, 6);
    console.log(resultado);

//-------------------------------------------  OBJETO  ----------------------------------------\\
//------------------  as informações contidas dentro, são chamadas de propriedades  -----------\\
var variavelNome = {
        propriedade01: "Bla Bla Bla",
        propriedade02: true,
        propriedade03: 18
};
console.log(variavelNome);

//---------------------  acessando e atualizando uma propriedade específica  ------------------\\    
console.log(variavelNome.propriedade03);

variavelNome.propriedade02 = "Blé Blé Blé";
console.log(variavelNome);

//---------------------------------------  OBJECT'S METHODS  ----------------------------------\\
//------------------------  é o MESMO que FUNÇÕES, porém dentro de objetos  -------------------\\
var objeto = {
    propriedade01: "Descrição 1",
    propriedade02: function(conteudo) {
        console.log("Descrição 2, " + conteudo + ", PUTA MERDA");
    }
}

//----------------------------  acionando/chamando uma method no objeto  -----------------------\\
    objeto.propriedade02(18);

//-----------------------  usando methods para acessar propriedades de objetos  ----------------\\
var objeto2 = {
    propriedade01: "Descrição 1",
    propriedade02: "Descrição 2",
    propriedade03: function(){ 
        console.log(this);      //"THIS", refere-se ao OBJTO que contem o METHOD. Neste caso, toda a variavél objeto. Ou
      //console.log(this.propriedade01); para acessar uma propriedade específica
    }
}

    objeto2.propriedade03();

//-------------------------------------  exemplo Parte 02  -----------------------------------\\ 
    var objeto3 = {
        marca: "Samsung",
        ligar: true,
        liga: function(){ 
            return this.ligar;      
        }
    }
    
    console.log(objeto3.liga());

//-----------------------  usando methods para alterar propriedades de objetos  ----------------\\
var objeto4 = {
    propriedade01: "Descrição 1",
    propriedade02: "Descrição 2",
    propriedade03: function(){
        this.propriedade02 = "Cocô!";
        console.log(this.propriedade02);
    }
}

    objeto4.propriedade03();

//---------------------------------------------  CLASS  ----------------------------------------\\
class Book {
    constructor(author, title){
        this.author = author;
        this.title = title;
    }
}
//-----------------------------------------  usando classes  -----------------------------------\\ 

var book1 = new Book ("Khaue", "Biografia");
console.log(book1);










