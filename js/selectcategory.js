import { url, options } from "./getapi.js";

export default function initSelectCategory() {
  url;
  options;

  const gamesDiv = document.querySelector(".games");
  const selectOpt = document.querySelector("#genre");
  selectOpt.addEventListener("change", selectCategory);

  async function selectCategory(genre) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      const optSelected = genre.target.value;

      // Removendo jogos
      const games = document.querySelectorAll(".game");
      games.forEach((jogo) => jogo.remove());

      result.forEach((game) => {
        const gameGenre = game.genre;

        if (gameGenre === optSelected) {
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
        } else {
          return false;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}
