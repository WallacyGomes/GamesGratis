import { url, options } from "./getapi.js";
import TextLimit from "./textlimit.js";

export default function initSearchTitle() {
  url;
  options;

  const searchTag = document.querySelector("#search");
  const btnSearch = document.querySelector(".btn-search");
  const gamesDiv = document.querySelector(".games");

  async function searchTitle() {
    try {
      const response = await fetch(url, options);
      const result = await response.json();

      let found = false;

      const title = searchTag.value.toLowerCase();

      // Removendo jogos
      const games = document.querySelectorAll(".game");
      games.forEach((jogo) => jogo.remove());

      const notFoundMsg = document.querySelectorAll(".notfound");
      notFoundMsg.forEach((msg) => msg.remove());

      result.forEach((game) => {
        if (game.title.toLowerCase() === title) {
          const gameDiv = document.createElement("div");
          gameDiv.classList.add("game");
          gameDiv.innerHTML = `<img src="${game.thumbnail}" alt="imagem do jogo">
                <h2>${game.title}</h2>
                <p><q>${game.short_description}</q></p>
                <ul class="info">
                    <li data-genero><strong>Gênero:</strong> ${game.genre}</li>
                    <li data-desenvolvedor><strong>Desenvolvedor:</strong> ${game.developer}</li>
                    <li data-distribuidor><strong>Distribuidor:</strong> ${game.publisher}</li>
                    <li data-lancamento><strong>Lançamento:</strong> ${game.release_date}</li>
                </ul>
                <a href="${game.game_url}" target="_blank" class="btn-game">Ir para o site</a>`;
          gamesDiv.appendChild(gameDiv);
          const textLimit = new TextLimit(".game p", ".game h2");
          textLimit.init();

          searchTag.value = "";
          found = true;
        }
      });

      if (found === false) {
        const divNotFound = document.createElement("div");
        divNotFound.classList.add("notfound");
        divNotFound.innerHTML = `<p>Talvez você tenha digitado algo errado 🤔</p>`;
        gamesDiv.appendChild(divNotFound);
      }
    } catch (error) {
      console.error(error);
    }
  }
  btnSearch.addEventListener("click", searchTitle);
}
