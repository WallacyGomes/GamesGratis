import { url, options } from "./getapi.js";

export default function initHomeGames() {
  url;
  options;

  const gamesDiv = document.querySelector(".games");

  async function showHomeGames() {
    try {
        
      const response = await fetch(url, options);
      const result = await response.json();

      result.forEach((game) => {
        const gameId = game.id;

        if (gameId === 540 || gameId === 466 || gameId === 286) {
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
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  showHomeGames();
}
