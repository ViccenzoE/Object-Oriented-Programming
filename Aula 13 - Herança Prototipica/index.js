function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var makePessoa = function(nome, idade, sexo){
    return{
        constructor: makePessoa,
        nome: nome,
        idade: idade,
        sexo: sexo,
        getIdade: function(){
            return this.idade;
        }
    }
}

var pessoaCriada = Object.create(makePessoa, { //Crirar objetos derivando propriedades de outros objetos
    endereco: {
        value: 'Rua Fulano de Tal 2022 - Passo Fundo, RS',
        writable: true,
        configurable: true,
        enumerable: true
    }
});

var viccenzo = new Pessoa('Viccenzo', 19, 'M');
var roberto = makePessoa('Roberto', 25, 'M');

console.log(viccenzo, roberto);
console.log(Object.getPrototypeOf(roberto));

console.log(roberto.getIdade());
console.log(pessoaCriada);

var pessoaCriada = Object.create(roberto, { //Crirar objetos derivando propriedades de outros objetos
    endereco: { //está herdando características a mais fora o value, vindas do próprio objetos
        value: 'Rua Fulano de Tal 2022 - Passo Fundo, RS',
        writable: true,
        configurable: true,
        enumerable: true
    }
});