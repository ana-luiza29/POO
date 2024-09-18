class Musica {
    constructor(nome, artista, album, ano, genero, duracao, produtora, compositor, letra, popularidade) {
        this.nome = nome;
        this.artista = artista;
        this.album = album;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.produtora = produtora;
        this.compositor = compositor;
        this.letra = letra;
        this.popularidade = popularidade;
    }
}

 tocar () {
    console.log(`tocando a musica ${this.nome} do artista ${this.artista}`);
 }

 detalhe() {
    console.log(`nome: ${this.nome}, artista: ${this.artista}, album: ${this.album}, ano: ${this.ano}`)

 }
  mudarPopularidade() {
    this.popularidade += 1;
    console.log(`A popularidade da musica ${this.nome} do artista ${this.artista} foi aumentada para : ${this.popularidade}`);
 
  }
   
  mostrarLetra ()  {
    console.log(`Letra da musica ${this.nome} do artista ${this.artista}: ${this.letra}`);
  }
  
  class Pop extends Musica {
    constructor(nome, artista, album, ano, genero, duracao, produtora, compositor, letra, popularidade, estilo) {
      super(nome, artista, album, ano, genero, duracao, produtora, compositor, letra, popularidade);
      this.estilo = estilo;
      this.coreografia = coreografia;
    }
  }