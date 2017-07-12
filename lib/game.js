import Bird from './bird.js';
import Foreground from './foreground.js';
import Tree from './tree.js';
import Background from './background.js';
import Pipe from './pipe.js';
import Score from './score.js';
import ScoreCard from './scoreCard';
import SplashScreen from './splashScreen.js';
import Highscore from './highscore.js';

class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.currentState = 'Splash';
    this.ctx = ctx;
    this.frames = frames;
    this.martinCheck = false;
    this.speed = 7;
    this.background = new Background(this.canvas, this.ctx, this.speed);
    this.foreground = new Foreground(this.canvas, this.ctx, this.speed);
    this.splashScreen = new SplashScreen(this.canvas, this.ctx);
    this.playerName = prompt("Welcome to Happy Bird! Please enter your name for the leaderboards.");
    this.bird = new Bird(canvas, ctx, canvas.width/4 , 70, 48);
    this.pipes = [];
    this.trees = [];
    this.gameID = 0;
    this.score = 0;
    this.scorePushed = false;
    this.highscore = 0;
    this.scoreTracker = new Score(this.canvas, this.ctx, 100, 100);
    this.scoreCard = new ScoreCard(this.canvas, this.ctx);
    this.highscores = new Highscore(this.canvas, this.ctx, this.scoreCard);
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
    this.gameRunningScreen = this.gameRunningScreen.bind(this);
    this.gameSplashScreen = this.gameSplashScreen.bind(this);
    this.sendScore = this.sendScore.bind(this);
  }

  reset() {
    this.score = 0;
    this.bird.dead = false;
    this.bird.frames = 0;
    this.bird.gravity = .4;
    this.bird.yPos = this.canvas.height / 2;
    this.bird.yVel = 0;
    this.pipes = [];
    this.frames = 0;
    this.trees = [];
    this.martinCheck = false;
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
    let lengthTop = Math.floor(Math.random() * 300 + 100);
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

    if (this.pipes.length > 4) {
      this.pipes.splice(0, 2);
    }
    if (this.trees.length > 6) {
      this.trees.splice(0, 1);
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
        this.currentState = 'GameOver';
      }
    });

    if (this._collided(this.bird, this.foreground)) {
      this.currentState = 'GameOver';
      this.collisionSound.play();
      this.bird.die();
    }
    if (this.bird.yPos < -150) {
      if (!this.martinCheck) {
        this.currentState = 'GameOver';
        this.martinCheck = true;
        this.bird.die();
        window.alert('You flew too close to the sun, Martin');
      }
    }

  }

  _assetsUpdater(assets, boolean) {
    if (assets.constructor === Array) {
      assets.forEach((asset) => {
        if (boolean) {
          asset.update();
        }
        asset.render();
      });
    } else {
      if (boolean) {
        assets.update();
      }
      assets.render();
    }
  }

  gameSplashScreen() {

    this.background.update();
    this._assetsUpdater(this.foreground, true);
    this._assetsUpdater(this.bird, false);
    this.splashScreen.render();
    if (this.scorePushed) {
      this.scorePushed = false;
    }
  }



  gameRunningScreen() {
    if (this.score > 1) {
      this.background.time = false;
    }
    this.assetsMaker();
    this.checkCollisions();
    this.background.update();
    this.scoreTracker.render();
    this._assetsUpdater(this.trees, true);
    this._assetsUpdater(this.bird, false);
    this.pipes.forEach((pipe) => {
      if (pipe.passedBird(this.bird)) {
        if (!pipe.checked) {
          pipe.checked = true;
          this.score += .5;
          this.pointSound.play();
        }
      }
      this._assetsUpdater(pipe, true);
    });
    this._assetsUpdater(this.foreground);
  }

  sendScore() {
    if (!this.scorePushed) {
      this.scorePushed = true;
      let newscore = window.firebase.database().ref("scores").push();
      window.newscore = newscore;
      newscore.set({
        username: this.playerName,
        score: parseInt(this.score)
      });
    }
  }

  gameOverScreen() {
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
    this._assetsUpdater(this.trees, false);
    this._assetsUpdater(this.pipes, false);
    this._assetsUpdater(this.foreground, false);
    this._assetsUpdater(this.bird, false);
    this.scoreCard.update(this.score, this.highscore);
    this._assetsUpdater(this.scoreCard, false);
    this.sendScore();
    this._assetsUpdater(this.highscores, true);

  }


  gameLoop() {
    this.frames++;
    this.bird.update(this.currentState);
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.scoreTracker.update(Math.floor(this.score));
    this.background.render();

    switch (this.currentState) {
      case 'Splash':
        this.gameSplashScreen();
        break;
      case 'Running':
        this.gameRunningScreen();

        break;
      case 'GameOver':
        this.gameOverScreen();
        break;
      default:
    }

    if (this.currentState !== 'Paused') {
      this.gameID = window.requestAnimationFrame(this.gameLoop);
    } else {
      window.cancelAnimationFrame(this.gameID);
    }
  }

}

export default Game;
