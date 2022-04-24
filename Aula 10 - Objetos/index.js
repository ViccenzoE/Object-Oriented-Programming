var pessoa = {};

Object.defineProperties(pessoa, {
    _nome: {
        value: "Viccenzo",
        enumerable: true,
        configurable: false,
        writable: true
     },
    _sexo: {
        value: "M",
        enumerable: true,
        configurable: true,
        writable: true
    },
    _idade: {
        value: 16,
        enumerable: true,
        configurable: true,
        writable: true
    },

    nome: {
        get: function(){
            return this._nome;
        },
        set: function(value){
            this._nome = value;
        }
    },

    sexo: {
        get: function(){
            return this._sexo;
        },
        set: function(value){
            this._sexo = value;
        }
    }
});

var atributos = Object.getOwnPropertyDescriptor(pessoa, '_nome'); //acessar os atributos configurados para as propriedades de dados
console.log(atributos);

Object.preventExtensions(pessoa); //impede que sejam adicionadas novas propriedades ao objeto
console.log(Object.isExtensible(pessoa)); //verifica se um objeto é extensível (posso tirar ou colocar propriedades)
pessoa.altura = '1,85';
console.log(pessoa)

Object.seal(pessoa);
console.log(Object.isSealed(pessoa)); //verifica se um objeto está selado (não consigo mais alterar nada)

Object.freeze(pessoa); //objeto permanece no estado que estava, não podendo alterar suas propriedades
console.log(pessoa);
console.log(Object.isFrozen(pessoa)); //verifica se ele está congelado