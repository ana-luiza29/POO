// Classe abstrata "Personagens"
abstract class Personagens {
    protected String nome; 

// Construct da Classe Personagem
    public Personagem(String nome) {
        this.nome = nome;
    }

// Metodo abstract
public abstract void atacar();
public abstract void defender();
  }