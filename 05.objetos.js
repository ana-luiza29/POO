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

// Objetao/Instancia "!pessoal" criada apartir da classe Pessoa 
const pessoal = new Pessoa('Ana Luiza', 16, 1.72, 62);
pessoal.falar(); // Chamada do metodo falara() da Classe Pessoa 