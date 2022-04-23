var pessoa = {};
pessoa.nome = 'Viccenzo'; //posso adicionar novas propriedades para meu objeto
pessoa.idade = 19;
pessoa.sexo = 'Masculino';
pessoa.casado = false;


delete pessoa.idade; //deletar uma das propriedades
console.log(pessoa);

console.log(pessoa.hasOwnProperty("casado"));

if ('casado' in pessoa){ //verifica se a propriedade está no objeto
    delete pessoa.casado;
}

console.log(pessoa.hasOwnProperty("casado")); //verifica se a propriedade existe
console.log(pessoa);


//posso fazer da mesma forma com o if, mas utilizando o hasOwnProperty
if (pessoa.hasOwnProperty("casado")){ 
    delete pessoa.casado;
}

 //as propriedades dos objetos são inumeráveis, ou seja, é possível criar arrays com elas
for (propriedade in pessoa){ //primeiro "propriedade" e depois o objeto
    console.log(propriedade) 
}

//verificar o valor armazenado na propriedade
for (propriedade in pessoa){
    console.log(pessoa[propriedade]); //valor que foi atribuído às propriedades
}

//outra maneira de pegar as propriedades e valores
var i, size;
var propriedades = Object.keys(pessoa); //propriedades no objeto

for(i = 0, size = propriedades.length; i < size; i++){
    console.log(propriedades[i]); //propriedades
    console.log(pessoa[propriedades[i]]); //valor da propriedade
}


//propriedades nativas, entretanto, não são enumerárveis 
console.log(pessoa.propertyIsEnumerable("length")); //retorna false, pois não é enumerável 