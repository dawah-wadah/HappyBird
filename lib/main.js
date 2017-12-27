import Game from "./game.js";
import crawler from './crawler.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 700;
  canvas.height = 736;
  const frames = 0;
  const game = new Game(canvas, ctx, frames);
  crawler((ip) => window.ip = ip)
  game.gameLoop();
  
  let playerID = document.getElementById("fname");
  let submitButton = document.getElementById("submit");
  
  
  submitButton.onclick = e => {
    e.preventDefault();
    console.log(playerID.value);
    let modal = document.getElementById("form");
    modal.className += "hidden";
    window.playerName = playerID.value;
  };

  document.addEventListener("keypress", e => {
    if (window.playerName) {
      switch (e.keyCode) {
        case 32:
          switch (game.currentState) {
            case "Splash":
              game.currentState = "Running";
              game.bird.jump();

              break;
            case "Running":
              game.bird.jump();

              break;
            case "GameOver":
              game.currentState = "Splash";
              game.reset();
              break;
            default:
          }
          break;
        case 112:
          game.pauseGame();
          break;
        default:
          console.log("this is not the key you are looking for");
      }
    }
  });
});
