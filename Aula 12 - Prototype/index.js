function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

Pessoa.prototype.getNome = function(){ //para utilzar em mais de um objeto
    return this.nome;
}
Pessoa.prototype.getIdade = function(){
    return this.idade;
}
Pessoa.prototype.getSexo = function(){
    return this.sexo;
}


var viccenzo = new Pessoa('Viccenzo', 19, 'M');
var joao = new Pessoa('Joao', 19, 'M');
console.log(viccenzo.getNome(), viccenzo.getIdade(), viccenzo.getSexo());
console.log(joao.getNome(), joao.getIdade(), joao.getSexo());


//para não precisar fazer uma estrutura para cada get
Pessoa.prototype = {
    constructor: Pessoa, //para comportar Pessoa, o qual cria os objetos, como Constructor

    getNome: function(){ 
        return this.nome;
    },
    getIdade: function(){ 
        return this.idade;
    },
    getSexo: function(){ 
        return this.sexo;
    }
}

var viccenzo = new Pessoa('Viti', 19, 'M');
console.log(viccenzo.getNome(), viccenzo.getIdade(), viccenzo.getSexo());

console.log(viccenzo instanceof Pessoa);
console.log(viccenzo.constructor === Pessoa);