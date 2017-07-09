// import Bird from './bird.js';
// import Foreground from './foreground.js';
// import Tree from './tree.js';
// import Background from './background.js';
// import Pipe from './pipe.js';
import Game from './game.js';

window.onload = function() {
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  canvas.height = 617;
  const frames = 0;
  const ctx = canvas.getContext('2d');
  const game = new Game(canvas, ctx, frames);

  // const background = new Background(canvas, ctx);
  // const foreground = new Foreground(canvas, ctx);
  // const bird = new Bird(canvas, ctx, 200, 100, 100);
  // const pipes = [];
  // const trees = [];
  //
  // function generateRandomPipes(context, canvasObject) {
  //   let lengthTop = Math.round(Math.random() * 200 + 100);
  //   let lengthBottom = canvasObject.height - 120 - lengthTop;
  //   let returnVal = {};
  //   returnVal.top = new Pipe(canvasObject.width, -5, lengthTop, 7, context, true);
  //   returnVal.bottom = new Pipe(canvasObject.width,
  //     canvasObject.height + 10 - lengthBottom, lengthBottom, 7, context, false);
  //   return returnVal;
  // }
  //
  //
  // setInterval(function() {
  //   let pipeSet = generateRandomPipes(ctx, canvas);
  //   pipes.push(pipeSet.top, pipeSet.bottom);
  //   if (pipes.length > 8) {
  //     pipes.shift();
  //     pipes.shift();
  //   }
  // }, 1200);



  // function getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // setInterval(function() {
  //   if (getRandomIntInclusive(20, 0) % 2 === 0) {
  //     let shade = getRandomIntInclusive(0, 3);
  //     trees.push(new Tree(canvas, ctx, canvas.width, shade));
  //   }
  // }, 600);
  // ctx.fillStyle = '#FFF';


  game.gameLoop();

  window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 32:
        game.bird.jump();
        break;
      default:
        console.log('this is not the key you are looking for');
    }
  });

  // function checkArrays() {
  //
  //   let fourPipes = pipes.slice(0,5);
  //   fourPipes.forEach((pipe) => {
  //     if (bird.yPos + bird.height >= pipe.yPos
  //       && bird.yPos <= pipe.yPos + pipe.length
  //       && bird.xPos + bird.width >= pipe.xPos
  //       && bird.xPos <= pipe.xPos + pipe.width) {
  //       console.log('shit collide');
  //     }
  //   });
  // }
  //
  //
  // function gameLoop() {
  //   checkArrays();
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   background.update();
  //   background.render();
  //   trees.forEach((tree) => {
  //     tree.update();
  //     tree.render();
  //   });
  //   bird.update();
  //   bird.render();
  //   pipes.forEach((pipe) => {
  //     pipe.update();
  //     pipe.render();
  //   });
  //   foreground.update();
  //   foreground.render();
  //   window.requestAnimationFrame(gameLoop);
  // }
};
