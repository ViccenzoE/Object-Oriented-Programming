function mostraNome(){
    return 'Viccenzo';
}

var mostraNome = {
    'nome': 'Viccenzo'
};

var teste = (typeof mostraNome);
if(teste === 'function'){
    console.log(true);
} else {
    console.log('mostraNome não é uma função');
}




function showName(){
    return 'João';
}

if(showName instanceof Function){
    var nome = showName();
}

console.log(nome);





var carros = ['Fiesta', 'Uno', 'Pálio'];
var auto = new Object(); //caso fosse um array, o valor de ambas as variáveis seria igual

if (auto instanceof Array){
    console.log(carros);
} else {
    console.log(typeof auto);
}

if(Array.isArray(carros)) { //funcionada mesma maneira do instanceof, mas possui menos problemas
    console.log(carros);
}