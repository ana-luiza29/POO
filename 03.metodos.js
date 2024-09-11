class Pessoa {
  constructor(nome, idade, altura, peso, genero) {
    // atributos
    // inicializaçao do atri
    this.altura = altura;
    this.peso = peso;
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
  }
  // metodos 
  falar() {
    console.log(`Ola, meu nome e ${this.nome}!`);
  }
}

