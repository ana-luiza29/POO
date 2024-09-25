
class Esporte {
    constructor() {
        this.nome = '';
        this.numJogadores = 0;
        this.duracaoJogo = 0;
        this.modalidade = '';
        this.regras = '';
        this.ambiente = ''; 
        this.popularidade = 0;
        this.equipamentos = '';
        this.categoria = ''; 
        this.instituicaoReguladora = '';
    }

    // Métodos acessores (getters) e modificadores (setters)
    getNome() {
        return this.nome;
    }

    setNome(nome) {
        this.nome = nome;
    }

    getNumJogadores() {
        return this.numJogadores;
    }

    setNumJogadores(num) {
        this.numJogadores = num;
    }

    // Método para calcular a duração total de uma partida, considerando intervalos
    calcularDuracao(intervalos) {
        return this.duracaoJogo + intervalos;
    }

    // Sobrecarga: calcular a popularidade em diferentes regiões
    calcularPopularidade(regiao) {
        if (regiao === "global") {
            return this.popularidade;
        } else {
            return this.popularidade * 0.8; 
        }
    }

  
    exibirInformacoes() {
        console.log(`Esporte: ${this.nome}, Jogadores: ${this.numJogadores}, Duração: ${this.duracaoJogo} minutos, Popularidade: ${this.popularidade}%`);
    }
}

class Futebol extends Esporte {
    constructor() {
        super();
        this.tipoBola = '';
        this.tamanhoCampo = 0; 
    }

    definirBola(tipo) {
        this.tipoBola = tipo;
    }

    definirTamanhoCampo(tamanho) {
        this.tamanhoCampo = tamanho;
    }
}

class Basquete extends Esporte {
    constructor() {
        super();
        this.alturaCesta = 0;
        this.duracaoQuartos = 0; 
    }

    definirAlturaCesta(altura) {
        this.alturaCesta = altura;
    }
}

class Tenis extends Esporte {
    constructor() {
        super();
        this.tipoQuadra = '';
        this.tipoRaquete = '';
    }

    definirTipoQuadra(tipo) {
        this.tipoQuadra = tipo;
    }
}

class Volei extends Esporte {
    constructor() {
        super();
        this.alturaRede = 0;
        this.tipoJogo = ''; 
    }

    definirAlturaRede(altura) {
        this.alturaRede = altura;
    }
}


class FutebolFeminino extends Futebol {
    exibirInformacoes() {
        console.log(`Esporte: Futebol Feminino, Jogadores: ${this.numJogadores}, Tamanho do Campo: ${this.tamanhoCampo} m²`);
    }
}

let jogoFutebol = new Futebol();
jogoFutebol.setNome("Futebol");
jogoFutebol.setNumJogadores(22);
jogoFutebol.duracaoJogo = 90;
jogoFutebol.definirBola("Futebol padrão");
jogoFutebol.exibirInformacoes();

let jogoBasquete = new Basquete();
jogoBasquete.setNome("Basquete");
jogoBasquete.setNumJogadores(10);
jogoBasquete.duracaoJogo = 48;
jogoBasquete.definirAlturaCesta(3.05);
jogoBasquete.exibirInformacoes();

let jogoTenis = new Tenis();
jogoTenis.setNome("Tênis");
jogoTenis.setNumJogadores(2);
jogoTenis.duracaoJogo = 120;
jogoTenis.definirTipoQuadra("Saibro");
jogoTenis.exibirInformacoes();

let jogoVolei = new Volei();
jogoVolei.setNome("Vôlei");
jogoVolei.setNumJogadores(12);
jogoVolei.duracaoJogo = 60;
jogoVolei.definirAlturaRede(2.43);
jogoVolei.exibirInformacoes();


jogoFutebol.setNumJogadores(18);
jogoFutebol.exibirInformacoes();
