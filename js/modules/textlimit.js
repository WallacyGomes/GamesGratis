export default class textLimit {
  constructor(descricao, titulo) {
    this.gameDescricao = document.querySelectorAll(descricao);
    this.gameTitulo = document.querySelectorAll(titulo);

    this.maxTextDescricao = 30;
    this.maxTextTitulo = 26;
  }
  
  // limita a quantidade de caracteres
  // da descrição do jogo
  limitDesc() {
      this.gameDescricao.forEach((texto) => {
      const textOriginal = texto.textContent;
      const textLimited = `${texto.textContent.slice(0, this.maxTextDescricao)} (...)`;
      if (texto.textContent.length > this.maxTextDescricao) {
        texto.textContent = textLimited;
        texto.classList.add("limitado");

        texto.addEventListener("click", () => {
          if (texto.textContent === textLimited) {
            texto.textContent = textOriginal;
            texto.classList.remove("limitado");
          }
        });
      }
    });
  }

  // limita a quantidade de caracteres
  // do título do jogo
  limitTitle() {
    this.gameTitulo.forEach((texto) => {
        const textOriginal = texto.textContent;
        const textLimited = `${texto.textContent.slice(0, this.maxTextTitulo)} (...)`;

        if (texto.textContent.length > this.maxTextTitulo) {
          texto.textContent = textLimited;
          texto.classList.add("limitado");

          texto.addEventListener("click", () => {
            if (texto.textContent === textLimited) {
              texto.textContent = textOriginal;
              texto.classList.remove("limitado");
            }
          });
        }
      });
  }

  init() {
    if (this.gameDescricao.length && this.gameTitulo.length) {
      this.limitDesc();
      this.limitTitle();
    }
    return this;
  }
  
}
