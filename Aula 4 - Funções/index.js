//MANEIRAS DE CRIAR FUNÇÕES

//DECLARAÇÃO
mostraNome(); //posso chamar antes de declarar a função

function mostraNome(){
    console.log('Viccenzo');
}


//EXPRESSÃO (VARIÁVEL + EXPRESSÃO ANÔNIMA)
var mostraNome = function(){
    console.log('Viccenzo');
}
mostraNome(); //precisa ser chamada depois de declarada



var mostraNome = function(){
    return 'Viccenzo';
}
var nome = mostraNome(); //posso atribuir valores para funções
console.log(nome);



var mostraNome = function(nome){ //posso atribuir parâmetros para as funções
    return nome;
}
var nome = mostraNome('Viccenzo'); 
console.log(nome);



var mostraNome = function(nome, sobrenome){ 
    return arguments[1]; //arguments se refere aos componentes inclusos, partindo do primeiro
}
var nome = mostraNome('Viccenzo', 'Escarrone'); 
console.log(nome);



var mostraNome = function(nome, sobrenome){ 
    return arguments.length;  //retorna o número de argumentos dentro da variável
}
var nome = mostraNome('Viccenzo', 'Escarrone'); 
console.log(nome);



var mostrarNome = function (nome, sobreNome) { 
    var qtd = arguments.length;
    var nomeCompleto = '';

    while (qtd > 0) {
        nomeCompleto +=  ' ' + arguments[qtd - 1];
        qtd--;
    }

    console.log(nomeCompleto);
}
mostrarNome('Viccenzo', 'Escarrone'); 

