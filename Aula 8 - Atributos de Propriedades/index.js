var pessoa = {
    nome: 'Viccenzo', 
    _idade: 19, 
    _sexo: 'Masculino',
    casado: false,
    state: 'pristine', 
    get idade(){ 
        this.state = 'dirty'; 
        return this._idade; 
    },
    set idade(value){
        this.idade = value;
    }
};

Object.defineProperty(pessoa, 'idade', { //deixar de mostrar essa propriedade
    enumerable: false
});

Object.defineProperty(pessoa, "nome", { //definir se a propriedade vai ficar estática ou poderá ser deletada ao longo do código
    configurable: false, //impossibilitar remoção
    value: 'Roberto',
    writable: false //não poderá mais ser reescrita
});

pessoa.nome = 'Escarrone'; //continuo podendo alterar o seu valor
console.log(pessoa);

for (propriedade in pessoa){
    console.log(propriedade); 
}

console.log('----------------------------------------------------');

Object.defineProperty(pessoa, 'sexo', {
    get: function(){ //atributo de acesso para acessar o valor
        return this._sexo;
    },
    set: function(value) { //atributo de alteração
        this._sexo = value;
    }
});

pessoa.sexo = 'Feminino';

var sexo = pessoa.sexo;
console.log(sexo);