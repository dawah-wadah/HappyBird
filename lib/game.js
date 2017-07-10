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
    this.state = false;
    this.speed = 7;
    this.background = new Background(this.canvas, this.ctx, this.speed);
    this.foreground = new Foreground(this.canvas, this.ctx, this.speed);
    this.bird = new Bird(canvas, ctx, 200, 70, 50);
    this.pipes = [];
    this.trees = [];
    this.gameID = 0;
    this.score = 0;


    this._generateRandomPipes = this._generateRandomPipes.bind(this);
    this._getRandomIntInclusive = this._getRandomIntInclusive.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.assetsMaker = this.assetsMaker.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.isRunning = this.isRunning.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
  }

  isRunning() {
    let game;
    if (!this.state) {
      return (game = window.requestAnimationFrame(this.gameLoop));
    } else {
      return (window.cancelAnimationFrame(game));
    }

  }

  pauseGame() {
    if (!this.state) {
      this.state = true;

    } else {
      console.log('unpaused');
      this.gameID = window.requestAnimationFrame(this.gameLoop);
      this.state = false;

    }
  }


  _generateRandomPipes(context, canvasObject) {
    let lengthTop = Math.floor(Math.random() * 200 + 100);
    let lengthBottom = canvasObject.height - 150 - lengthTop;
    let returnVal = {};
    returnVal.top = new Pipe(canvasObject.width,
      0,
      lengthTop,
      this.speed,
      context,
      true);
    returnVal.bottom = new Pipe(canvasObject.width,
      canvasObject.height - lengthBottom,
      lengthBottom,
      this.speed,
      context,
      false);
    return returnVal;
  }

  assetsMaker() {
    if (this.frames % 60 === 0) {
      let pipeSet = this._generateRandomPipes(this.ctx, this.canvas);
      this.pipes.push(pipeSet.top, pipeSet.bottom);
      if (this._getRandomIntInclusive(20, 0) % 2 === 0) {
        let shade = this._getRandomIntInclusive(0, 3);
        this.trees.push(new Tree(this.canvas, this.ctx, this.canvas.width, shade, this.speed));
      }
    }

    if (this.pipes.length > 10) {
      this.pipes.shift();
      this.pipes.shift();
    }
    if (this.trees.length > 10) {
      this.trees.shift();
      this.trees.shift();
      this.trees.shift();
    }
  }

  _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  _collided(objA, objB) {
    let a = objA.xPos < objB.xPos + objB.width;
    let b = objA.xPos + objA.width > objB.xPos;
    let c = objA.yPos < objB.yPos + objB.height;
    let d = objA.height + objA.yPos > objB.yPos;
    if (a && b && (c && d)) {
      return true;
    }
  }


  checkCollisions() {

    let fourPipes = this.pipes.slice(0, 5);
    fourPipes.forEach((pipe) => {
      if (this._collided(this.bird, pipe)) {
        this.bird.die();
        // this.pauseGame();

      }
      // console.log(pipe.passedBird(this.bird));
    });
    if (this._collided(this.bird, this.foreground)) {
      console.log('hit floor');
    }

  }


  gameLoop() {

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.frames++;
    this.background.render();
    if (!this.bird.dead) {

      this.assetsMaker();
      this.checkCollisions();
      this.background.update();
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
    } else {
      this.bird.update();
      this.bird.render();
    }
    if (!this.state) {
      this.gameID = window.requestAnimationFrame(this.gameLoop);
    } else {
      window.cancelAnimationFrame(this.gameID);
    }
  }

}

export default Game;
