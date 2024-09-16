class Veiculo {
  constructor(marca, ano, cor, preco, modelo) {
    this.marca = marca;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
    this.modelo = modelo;
  }
  ligar() {
    console.log(`${this.marca} ${this.modelo}  esta ligando.`);
  }

  desligar() {
    console.log(`${this.marca} ${this.modelo}  esta desligando.`);
  }
}

class Carro extends Veiculo {
  constructor(marca, ano, cor, preco, modelo, numPortas, tipodecombustivel) {
    super(marca, ano, cor, preco, modelo);
    this.numPortas = numPortas;
    this.tipodecombustivel = tipodecombustivel;
  }
  ligar() {
    console.log(`${this.marca} ${this.modelo}  esta ligado com o motor a  ${this.tipodecombustivel}`);
  }

  desligar() {
    console.log(`${this.marca} ${this.modelo} com a ${this.numPortas} portas esta desligando.`);
  }
}

// Criando instancia de carros
const carro1 = new Carro("Toyota", 2024, "Azul", 343.523, "Sw4", 4, "Flex");
const carro2 = new Carro("Volkswagen", 2024, "Preto", 119.990, "Nivus", 4, "Gasolina");

carro1.ligar(); // Saida: A esse é Toyota Sw4  esta ligado com o motor a  Flex
carro1.desligar(); // Saida: A esse é Toyota Sw4 com a 4 portas esta desligando.


carro2.ligar(); // Saida: A esse é Volkswagen Nivus  esta ligado com o motor a  Gasolina
carro2.desligar(); // Saida: A esse é Volkswagen Nivus com a 4 portas esta desligando.'

