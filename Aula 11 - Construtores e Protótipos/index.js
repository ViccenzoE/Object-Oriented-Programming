//construtores são funções chamadas/instanciadas pela palavra "New"
 function Pessoa(nome, idade, sexo){ //sempre a primeira letra maiúscula
    this._nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    Object.defineProperties(this, { //difinindo propriedades de dados das variáveis
        _nome:{ //underline para ligação
            enumerable: true,
            configurable: true,
            wiretable: true
        },
        nome:{ //configuração da propriedadede acesso
            get: function(){ //retorna o valor
                return this_nome;
            },
            set: function(value){ //modifica o valor retornado
                this._nome = value;
            }
        }
    });
    Object.preventExtensions(this); //evita que sejam adicionadas propriedades
 }

 var viccenzo = new Pessoa('Viccenzo', 19, 'Masculino'); //função instanciada
 console.log(viccenzo);
 console.log(viccenzo instanceof Pessoa); //verifica se o objeto foi criado a partir daquela função construtora
 console.log(viccenzo.constructor === Pessoa); //verifica se o objeto foi criado a partir do construtor

 viccenzo.nome = 'Escarrone'; //alteração de nome pelo getter e setter
 viccenzo.endereco = "Rua 123"; //adicionar propriedade (bloqueado)

 for(propriedade in viccenzo){ //enumera as variáveis
     console.log(propriedade);
 }


 for(propriedade in viccenzo){ //enumera as variáveis
    console.log(propriedade);
}


for(propriedade in viccenzo){ //mostra o valor das variáveis
    console.log(viccenzo[propriedade]);
}


for(propriedade in viccenzo){ //variável + valor
    console.log(propriedade + ": " + viccenzo[propriedade]);
}
