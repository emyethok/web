
const games = [
  { title: "Super Mario Bros (NES)", rom: "nes/mario.nes", thumb: "assets/mario.jpg" },
  { title: "Contra III (SNES)", rom: "snes/contra.smc", thumb: "assets/contra.jpg" },
  { title: "Sonic the Hedgehog (SEGA)", rom: "sega/sonic.bin", thumb: "assets/sonic.jpg" }
];

const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("search");

function renderGames(filter = "") {
  gameGrid.innerHTML = "";
  const filtered = games.filter(game => game.title.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(game => {
    const el = document.createElement("a");
    el.href = `game.html?rom=${encodeURIComponent(game.rom)}&title=${encodeURIComponent(game.title)}`;
    el.className = "game-card";
    el.innerHTML = `<img src="${game.thumb}" alt="${game.title}" /><p>${game.title}</p>`;
    gameGrid.appendChild(el);
  });
}

searchInput.addEventListener("input", () => renderGames(searchInput.value));
renderGames();
