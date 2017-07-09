import Bird from './bird.js';
import Foreground from './foreground.js';
import Tree from './tree.js';
import Background from './background.js';
import Pipe from './pipe.js';

class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frames = frames;
    this.background = new Background(this.canvas, this.ctx);
    this.foreground = new Foreground(this.canvas, this.ctx);
    this.bird = new Bird(canvas, ctx, 200, 100, 100);
    this.pipes = [];
    this.trees = [];


    this._generateRandomPipes = this._generateRandomPipes.bind(this);
    this._getRandomIntInclusive = this._getRandomIntInclusive.bind(this);
    this.checkArrays = this.checkArrays.bind(this);
    this.assetsMaker = this.assetsMaker.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
  }


  _generateRandomPipes(context, canvasObject) {
    let lengthTop = Math.round(Math.random() * 200 + 100);
    let lengthBottom = canvasObject.height - 120 - lengthTop;
    let returnVal = {};
    returnVal.top = new Pipe(canvasObject.width, -5, lengthTop, 7, context, true);
    returnVal.bottom = new Pipe(canvasObject.width,
      canvasObject.height + 10 - lengthBottom, lengthBottom, 7, context, false);
    return returnVal;
  }

  assetsMaker() {
    if (this.frames % 60 === 0) {
      let pipeSet = this._generateRandomPipes(this.ctx, this.canvas);
      this.pipes.push(pipeSet.top, pipeSet.bottom);
      if (this._getRandomIntInclusive(20, 0) % 2 === 0) {
        let shade = this._getRandomIntInclusive(0, 3);
        this.trees.push(new Tree(this.canvas, this.ctx, this.canvas.width, shade));
      }
    }

    if (this.pipes.length > 10) {
      this.pipes.shift();
      this.pipes.shift();
    }
  }

  _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  checkArrays() {

    let fourPipes = this.pipes.slice(0, 5);
    fourPipes.forEach((pipe) => {
      if (this.bird.yPos + this.bird.height >= pipe.yPos &&
        this.bird.yPos <= pipe.yPos + pipe.length &&
        this.bird.xPos + this.bird.width >= pipe.xPos &&
        this.bird.xPos <= pipe.xPos + pipe.width) {
        console.log('shit collide');
      }
    });
  }

  gameLoop() {
    this.frames++;
    this.assetsMaker();
    this.checkArrays();
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.background.update();
    this.background.render();
    this.trees.forEach((tree) => {
      tree.update();
      tree.render();
    });
    this.bird.update();
    this.bird.render();
    this.pipes.forEach((pipe) => {
      pipe.update();
      pipe.render();
    });
    this.foreground.update();
    this.foreground.render();
    window.requestAnimationFrame(this.gameLoop);
  }

}

export default Game;
