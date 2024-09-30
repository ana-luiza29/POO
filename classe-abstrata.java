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

  // Classe derivada "Guerreiro"
  class Guerreiro extends Personagens {
    private String arma;

    // Sobrescrita do metodo Atacar da classe Personagem
    @override
    public void atacar() {
        System.out.println(nome + " ataca com a " + arma + "!");
    }  

    // Sobrescrita do metodo defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " levantando o escudo para se defender!");
    }
  }

    // Classe derivada "Mago"
    class Mago extends Personagens {
        private String magia;

        // Constructor da classe Mago
        public Mago(String nome, String magia) {
            super(nome);
            this.magia = magia;
        }

        // Sobrescrita do metodo Atacar da classe Abstrata Personagem
        @Override
        public void atacar() {
            System.out.println(nome + " lança magia " + magia + "!");
        }

        // Sobrescrita do metodo defender da classe Abstrata Personagem
        @Override
        public void defender() {
            System.out.println(nome + " usa escudo magico para se defender!");
        }
  }
  