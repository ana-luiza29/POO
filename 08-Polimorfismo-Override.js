// Classe base Personagem
class Personagem {
    constructor(nome, vida) {
        // Atributos
        // Inicialização dos atributos
        this.nome = nome;
        this.vida = vida;
    
}

atacar() {
    // Método para atacar
    console.log(`${this.nome} realiza um ataque basico`);
 
}
 receberDano(dano) {
    this.vida = dano;
    console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
 }
}

// Classe Guerreiro que herda de personagem

class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
        super.atacar();
        console.log(`${this.nome} realiza um ataque com a ${this.arma}`);
    }
}

// Classe Mago que herda de Personagem

class Mago extends Personagem {
    constructor(nome, vida, feiticio) {
        super(nome, vida);
        this.feiticio = feiticio;
    }

    atacar() {
        super.atacar();
        console.log(`${this.nome} lanca ${this.feiticio}`);
    }
}