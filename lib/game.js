import Bird from './bird.js';
import Foreground from './foreground.js';
import Tree from './tree.js';
import Background from './background.js';
import Pipe from './pipe.js';
import Score from './score.js';

class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.currentState = 'Running';
    this.ctx = ctx;
    this.frames = frames;
    // this.currentState = false;
    this.speed = 7;
    this.background = new Background(this.canvas, this.ctx, this.speed);
    this.foreground = new Foreground(this.canvas, this.ctx, this.speed);
    this.bird = new Bird(canvas, ctx, 200, 70, 48);
    this.pipes = [];
    this.trees = [];
    this.gameID = 0;
    this.score = 9;
    this.scoreCard = new Score(this.canvas, this.ctx);
    this.collisionSound = new Audio();
    this.collisionSound.src = 'res/sounds/sfx_hit.wav';
    this.pointSound = new Audio();
    this.pointSound.src = 'res/sounds/sfx_point.wav';


    this._generateRandomPipes = this._generateRandomPipes.bind(this);
    this._getRandomIntInclusive = this._getRandomIntInclusive.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.assetsMaker = this.assetsMaker.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
    this._assetsUpdater = this._assetsUpdater.bind(this);
  }


  pauseGame() {
    if (this.currentState === 'Running') {
      this.currentState = 'Paused';

    } else {
      console.log('unpaused');
      this.gameID = window.requestAnimationFrame(this.gameLoop);
      this.currentState = 'Running';

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
        this.trees.push(new Tree(this.canvas,
          this.ctx,
          this.canvas.width,
          shade,
          this.speed));
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
    let a = objA.xPos < objB.xPos + objB.width - 5;
    let b = objA.xPos + objA.width - 5 > objB.xPos;
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
        this.collisionSound.play();
        this.bird.die();
      }
    });
    if (this._collided(this.bird, this.foreground)) {
      this.collisionSound.play();
      this.bird.die();
    }

  }

  _assetsUpdater(assets){
    if (assets.constructor === Array){
      assets.forEach((asset) => {
        asset.update();
        asset.render();
      });
    } else {
      assets.update();
      assets.render();
    }
  }



  gameRunningScreen(){
          this.assetsMaker();
          this.checkCollisions();
          this.background.update();
          this.scoreCard.render();
          this._assetsUpdater(this.trees);
          this.bird.update();
          this.bird.render();
          this.pipes.forEach((pipe) => {
            if (pipe.passedBird(this.bird)){
              if (!pipe.checked){
                pipe.checked = true;
                this.score += .5;
                this.pointSound.play();

              }
            }
            pipe.update();
            pipe.render();
          });
          this.foreground.update();
          this.foreground.render();
  }


  gameLoop() {
    this.frames++;

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.scoreCard.update(Math.floor(this.score));
    this.background.render();
    if (!this.bird.dead) {

      this.assetsMaker();
      this.checkCollisions();
      this.background.update();
      this.scoreCard.render();
      this._assetsUpdater(this.trees);
      this.bird.update();
      this.bird.render();
      this.pipes.forEach((pipe) => {
        if (pipe.passedBird(this.bird)){
          if (!pipe.checked){
            pipe.checked = true;
            this.score += .5;
            this.pointSound.play();

          }
        }
        pipe.update();
        pipe.render();
      });
      this.foreground.update();
      this.foreground.render();
    } else {
      this.trees.forEach((tree) => {
        tree.render();
      });
      this.bird.update();
      this.bird.render();
      this.pipes.forEach((pipe) => {
        pipe.render();
      });
      this.foreground.render();
      this.bird.update();
      this.bird.render();
      this.scoreCard.render();
    }
    if (this.currentState === 'Running') {
      this.gameID = window.requestAnimationFrame(this.gameLoop);
    } else {
      window.cancelAnimationFrame(this.gameID);
    }
  }

}

export default Game;
