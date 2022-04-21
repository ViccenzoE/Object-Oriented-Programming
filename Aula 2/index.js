//TIPOS PRIMITIVOS
var idade = 19; //number
var sexo = 'f'; //string
var nome = 'Viccenzo'; //string
var sobrenome; //undefined
var existe = true; //boolean
var endereco = null; //object 

var primeiroChar = nome.charAt(0); //pegar a letra desejada
var nomeMaiusculo = nome.toUpperCase(); //deixar tudo em maísuculo

console.log(primeiroChar);
console.log(nomeMaiusculo);
console.log(idade.toFixed(2)); //adiciona duas casas decimais
console.log(endereco === null); //true 
console.log(!!idade); //true --> está preenchida 
//dupla negativa para o contrário de nulo
console.log(typeof nome);

//////////////////////////////////////////////////////////////////////////////////////////////////


//TIPOS DE REFERÊNCIA OU PRÓPRIO
//são os tipos de declarações já existentes. Ex.: constructor, function, datas, array, etc.
//todo tipo de referência possui sua versão literal correspondente

var pessoa = new Object(); //método construtor para criar um objeto
var pessoa2 = { //método literal
    'nome': 'Viccenzo', //chave e valor
    'idade': '19',
    'sexo': 'M'
};
console.log(typeof pessoa); //retorna obejto

var mostraNome = new Function("console.log('Viccenzo');"); //método construtor
mostraNome();
function mostraIdade(){ //método literal
    console.log('idade é igual a ' + idade);
}
mostraIdade();

var carro = new Array('Gol', 'Uno', 'Corolla'); //método construtor 
console.log(carro);
var carros = ['Gol', 'Uno', 'Corolla']; //método literal
console.log(carros);

