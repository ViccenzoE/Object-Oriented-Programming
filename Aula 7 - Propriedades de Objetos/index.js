var pessoa = {
    nome: 'Viccenzo',  //propriedades de dados --> armazenam valores
    _idade: 19, //underline para acessar o dado
    sexo: 'Masculino',
    casado: false,
    state: 'pristine', 
    get idade(){ //get --> propriedade de 
        this.state = 'dirty'; //
        return this._idade; //underline --> acesso de uma propriedade de dado através de uma propriedade de acesso
    },
 //   set idade(value){ //propriedades de modificação exigem um parâmetro
 //       this.idade = value;
 //   }
};
pessoa.idade = 21; //setter
console.log(pessoa.idade);  //getter
console.log(pessoa.state);

//propriedades de acesso servem para modificar propriedades de dados
//PROPRIEDADES GETTERS -> LER DADOS
//PROPRIEDADES SETTERS -> MODIFICAR DADOS
