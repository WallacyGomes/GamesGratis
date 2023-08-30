import { url, options } from "./modules/getapi.js";
import TextLimit from "./modules/textlimit.js";

// controla a quantidade de jogos que irá aparecer na tela
let show = 12;
// controla o index
let index = 0;

async function showGames() {
  const response = await fetch(url, options);
  const result = await response.json();

  const gamesDiv = document.querySelector(".games");

  // mostra os jogos no site conforme o index
  for (index; index < show; index++) {
    const game = result[index];

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
  }
}

showGames();

// mostra os próximos jogos seguindo o index
function showMore() {
  show += 12;
  showGames();
}

const btnMostrar = document.querySelector("[data-mostrar]");
btnMostrar.addEventListener("click", showMore);
