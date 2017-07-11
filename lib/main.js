import Game from './game.js';



document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 617;
  const frames = 0;
  const game = new Game(canvas, ctx, frames);
  game.gameLoop();

  document.addEventListener('keypress', (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 32:

      switch (game.currentState) {
        case 'Splash':
        game.currentState = 'Running';
        game.bird.jump();

          break;
        case 'Running':
        game.bird.jump();

          break;
        case 'GameOver':
        game.currentState = 'Splash';
        game.reset();
          break;
        default:
      }
      break;
      case 112:
      game.pauseGame();
      break;
      default:
      console.log('this is not the key you are looking for');
    }
  });

});
