import Game from './game.js';

window.onload = function() {
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  canvas.height = 617;
  const frames = 0;
  const ctx = canvas.getContext('2d');
  let gamePaused = false;
  const game = new Game(canvas, ctx, frames);
  // let newGame = setTimeout(game.gameLoop, 1000 / 30);




// newGame();
  game.gameLoop();



  window.addEventListener('keypress', (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 32:
        game.bird.jump();
        break;
      case 112:
      game.pauseGame();
        break;
      default:
        console.log('this is not the key you are looking for');
    }
  });
};
