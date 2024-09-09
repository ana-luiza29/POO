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
  falar() {
    console.log(`minha idade é  ${this.idade}!`);
  }
}

// Objeto/Instancia "!pessoal" criada a partir da classe Pessoa 
const pessoa1 = new Pessoa('Ana Luiza', 16, 1.72, 62);
pessoal.falar(); // Chamada do metodo falara() da Classe Pessoa 
pessoa1.falarIdade(); //


const pessoa2 = new Pessoa('Allan', 22, 1.85, 78);
pessoa2.falar(); // Chamada do metodo falara() da Classe Pessoa
pessoa2.falarIdade(); // Chamada do metodo falara() da


const pessoa3 = new Pessoa('Allan', 22, 1.85, 78);
pessoa3.falar(); // Chamada do metodo falara() da Classe Pessoa
pessoa3.falarIdade();