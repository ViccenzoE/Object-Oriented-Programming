var pessoa = (function(nome, idade, sexo){

    var nome = nome;
    var idade = idade;
    var sexo = sexo;
    
    var getNome = function(){
        return nome;
    }
    var getSexo = function(){
        return sexo;
    }
    var getIdade = function(){
        return idade;
    }

    var metodos = {
        getNome: getNome,
        getIdade: getIdade,
        getSexo: getSexo
    }

    Object.freeze(metodos);

    return metodos;

})('Viccenzo', 19, 'M');
console.log(pessoa.getNome());