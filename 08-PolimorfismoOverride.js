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
