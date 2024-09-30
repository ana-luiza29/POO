// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new Error("Não é possivel instanciar a classe abstrata Personagem diretamente");
        }
        this.nome = nome;
    }
    // Metodo abstrato simulado
    atacar() {
        throw new Error("0 metodo atacar() dever ser implementado pela classe derivada");
    }

    // Metodo abstrato simulado
    defender() {
        throw new Error("0 metodo defender() dever ser implementado pela classe derivada");
    }
}

// Classe derivada "Guerreiro" 
class Guerreiro extends Personagem {
    constructor(nome, arma ) {
        super(nome);
        this.arma = arma;
    }
// Implementação dos metodos abstratos da classe Personage
    atacar() {
        console.log(`${this.nome} ataca com ${this.arma}!`);
    }

    defender() {
        console.log(`${this.nome} levanta o escudo para se defender!`);
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }
// Implementação dos metodos abstratos da classe Personagem
    atacar() {
        console.log(`${this.nome} lança a magia ${this.magia}!`);
    }

    defender() {
        console.log(`${this.nome} usa um escudo mágico para se defender!`);
    }
}
// Criando instancias e testando o comportamento
try {
    const personagem = new Personagem("inaválido") // isso vai lançar um erro
} catch (error) {
    console.log(error.message); // "Não é possi´vel instanciar a classe abstrata Personagem diretamente"
}

const guerreiro = new Guerreiro("Thorin", "Espada"); 
guerreiro.atacar(); // Saída: Thorin ataca com espada
guerreiro.defender(); // Saída: Thorin defende com o escudo

const mago = new Mago("Gandalf", "Bola de Fogo");
mago.atacar(); // Saída: "Gandalf lança a magia Bola de fogo!"
mago.defender(); // Saida: "Gandalf usa um escudo magico para se defender"