var pessoa = {
    nome: 'Viccenzo',
    idade: '29',
    getNome: function(){ //método do objeto
        console.log(pessoa.nome); //acessar propriedade do objeto
    }
};

var carros = {
    nome: 'Gol',
    marca: 'VW',
    getNome: function() {
        console.log(this.nome); //posso usar o this no lugar do próprio objeto
    }
}

pessoa.getNome(); //executar a função
carros.getNome();

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Para não percisar referênciar todas as vezes o objeto, podemos fazer assim:

var getNome = function(){ //função declarada com o this
    console.log(this.nome);
}

var pessoa = {
    nome: 'Viccenzo',
    idade: '29',
    getNome: getNome //referenciado o "this" que acessa o objeto
};

var carros = {
    nome: 'Gol',
    marca: 'VW',
    getNome: getNome
}

pessoa.getNome(); 
carros.getNome();

//obs.: não importa o nome, se é getNome ou outro nome

///////////////////////////////////////////////////////////////////////////////////////////////////////

//ALTERAR O VALOR DO THIS: 3 MÉTODOS

//MÉTODO 1:
var getNome = function(nome){ //passando o parâmetro
    console.log(this.nome = nome); //atribuindo o parâmetro para que possa ser alterado posteriormente
}

var pessoa = {
    nome: 'Viccenzo',
    idade: '29',
    getNome: getNome 
};

var carros = {
    nome: 'Gol',
    marca: 'VW',
    getNome: getNome
}

pessoa.getNome(); 
carros.getNome();

getNome.call(pessoa, 'Pedro'); //atribui elementos para os parâmetros atirbuidos na função
//o primeiro é o objeto (o qual o this se refere) e o segundo é a atribuição do parâmetro


var getNome = function(nome, sobrenome){ 
    this.nome = nome;
    this.sobrenome = sobrenome;
    console.log(this);
}

var pessoa = {
    nome: 'Viccenzo',
    sobrenome: 'Alvarez Cabral',
    idade: '29',
    getNome: getNome 
};

var carros = {
    nome: 'Gol',
    marca: 'VW',
    getNome: getNome
}

pessoa.getNome(); 
carros.getNome();

getNome.call(pessoa, 'Pedro', 'Sampaio');
getNome.call(carros, 'Fiat');

//MÉTODO 2 --> ARRAY COM MÚLTIPLOS PARÂMETROS
getNome.apply(pessoa, ['Pedro', 'Sampaio']);


//MÉTODO 3 --> BIND: GERA UMA NOVA FUNÇÃO
var getNome = getNome.bind(pessoa, 'Pedro', 'Sampaio');
getNome();