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

pessoa.nome = "José";
pessoa.sexo = "Não-binárie"
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.sexo);
