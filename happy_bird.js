/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const scoreAnimation = [{
    x: 225 / 4 * 0,
    y: 249 / 3 * 0,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 1,
    y: 249 / 3 * 0,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 2,
    y: 249 / 3 * 0,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 3,
    y: 249 / 3 * 0,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 0,
    y: 249 / 3 * 1,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 1,
    y: 249 / 3 * 1,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 2,
    y: 249 / 3 * 1,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 3,
    y: 249 / 3 * 1,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 0,
    y: 249 / 3 * 2,
    width: 225 / 4,
    height: 249 / 3,
  },
  {
    x: 225 / 4 * 1,
    y: 249 / 3 * 2,
    width: 225 / 4,
    height: 249 / 3,
  },


];
/* harmony export (immutable) */ __webpack_exports__["a"] = scoreAnimation;


const scoreCardAnimation = {
  0: {
    x: 395,
    y: 69,
    width: 38,
    height: 58,
  },
  1: {
    x: 229,
    y: 127,
    width: 20,
    height: 58,
  },
  2: {
    x: 251,
    y: 127,
    width: 38,
    height: 58,
  },
  3: {
    x: 151,
    y: 127,
    width: 38,
    height: 58,
  },
  4: {
    x: 114,
    y: 127,
    width: 38,
    height: 58,
  },
  5: {
    x: 75,
    y: 127,
    width: 38,
    height: 58,
  },
  6: {
    x: 37,
    y: 127,
    width: 38,
    height: 58,
  },
  7: {
    x: 0,
    y: 127,
    width: 38,
    height: 58,
  },
  8: {
    x: 471,
    y: 69,
    width: 38,
    height: 58,
  },
  9: {
    x: 434,
    y: 69,
    width: 38,
    height: 58,
  },
};
/* harmony export (immutable) */ __webpack_exports__["b"] = scoreCardAnimation;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(2);




document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 617;
  const frames = 0;
  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](canvas, ctx, frames);
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bird_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foreground_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__score_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scoreCard__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splashScreen_js__ = __webpack_require__(11);









class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.currentState = 'Splash';
    this.ctx = ctx;
    this.frames = frames;
    // this.currentState = false;
    this.speed = 7;
    this.background = new __WEBPACK_IMPORTED_MODULE_3__background_js__["a" /* default */](this.canvas, this.ctx, this.speed);
    this.foreground = new __WEBPACK_IMPORTED_MODULE_1__foreground_js__["a" /* default */](this.canvas, this.ctx, this.speed);
    this.splashScreen = new __WEBPACK_IMPORTED_MODULE_7__splashScreen_js__["a" /* default */](this.canvas, this.ctx);
    this.bird = new __WEBPACK_IMPORTED_MODULE_0__bird_js__["a" /* default */](canvas, ctx, 200, 70, 48);
    this.pipes = [];
    this.trees = [];
    this.gameID = 0;
    this.score = 0;
    this.highscore = 0;
    this.scoreTracker = new __WEBPACK_IMPORTED_MODULE_5__score_js__["a" /* default */](this.canvas, this.ctx, 100, 100);
    this.scoreCard = new __WEBPACK_IMPORTED_MODULE_6__scoreCard__["a" /* default */](this.canvas, this.ctx);
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
  }

  reset(){
    this.score = 0;
    this.bird.dead = false;
    this.bird.frames = 0;
    this.bird.gravity = .4;
    this.bird.yPos = this.canvas.height / 2;
    this.bird.yVel = 0;
    this.pipes = [];
    this.frames = 0;
    this.trees = [];
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
    returnVal.top = new __WEBPACK_IMPORTED_MODULE_4__pipe_js__["a" /* default */](canvasObject.width,
      0,
      lengthTop,
      this.speed,
      context,
      true);
    returnVal.bottom = new __WEBPACK_IMPORTED_MODULE_4__pipe_js__["a" /* default */](canvasObject.width,
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
        this.trees.push(new __WEBPACK_IMPORTED_MODULE_2__tree_js__["a" /* default */](this.canvas,
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
        this.currentState = 'GameOver';
      }
    });
    if (this._collided(this.bird, this.foreground)) {
      this.collisionSound.play();
      this.bird.die();
    }

  }

  _assetsUpdater(assets, boolean) {
    if (assets.constructor === Array) {
      assets.forEach((asset) => {
        if (boolean) {asset.update();}
        asset.render();
      });
    } else {
      if (boolean) {assets.update();}
      assets.render();
    }
  }

  gameSplashScreen(){

    this.background.update();
    this._assetsUpdater(this.foreground, true);
    this._assetsUpdater(this.bird, false);
    this.splashScreen.render();
  }



  gameRunningScreen() {
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

  gameOverScreen(){
    if(this.score > this.highscore){
      this.highscore = this.score;
    }
    this._assetsUpdater(this.trees, false);
    this._assetsUpdater(this.pipes, false);
    this._assetsUpdater(this.foreground, false);
    this._assetsUpdater(this.bird, false);
    this._assetsUpdater(this.scoreTracker, false);
    this.scoreCard.update(this.score, this.highscore);
    this._assetsUpdater(this.scoreCard, false);
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

    if (this.currentState !== 'Paused' ) {
      this.gameID = window.requestAnimationFrame(this.gameLoop);
    } else {
      window.cancelAnimationFrame(this.gameID);
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__ = __webpack_require__(4);


class Bird {
  constructor(canvas, ctx, xPos, width, height, state) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.gravity = .4;
    this.xPos = xPos;
    this.width = width;
    this.height = height;
    this.currentState = "Splash";
    this.yPos = canvas.height / 2;
    this.yVel = 0;
    this.dead = false;
    this.termVelocity = 4;
    this.frames = 0;
    this.spritePicker = 0;
    this.image = new Image();
    this.image.src = 'res/flappybird2.png';
    this.die = this.die.bind(this);
    this.deathSound = new Audio;
    this.deathSound.src = 'res/sounds/sfx_die.wav';
    this.flapSound = new Audio;
    this.flapSound.src = 'res/sounds/sfx_wing.wav';
  }

  update(state = 'Splash') {
    this.frames += .09;
    this.spritePicker = Math.floor(this.frames) % 3;
    this.currentState = state;
    this.yPos += this.yVel;

    switch (this.currentState) {
      case 'Running':
        if (this.yVel < this.termVelocity) {
          this.yVel += this.gravity;
        }
        break;
      case 'GameOver':
        if (this.yPos < 490) {
          this.yVel += 2;
        } else {
          this.yVel = 0;
          this.gravity = 0;
          this.yPos = 490;
        }
        break;
      default:

    }
  }

  render() {
    this.ctx.save();
    this.ctx.translate(this.xPos + this.width / 2, this.yPos + this.height / 2);
    if (this.yVel < 0) {
      this.ctx.rotate(-30 * Math.PI / 360);
    }
    if (this.yVel > 1 && this.yVel < 2) {
      this.ctx.rotate(45 * Math.PI / 360);
      this.spritePicker = 1;
    }
    if (this.yVel > 2 && this.yVel < 3) {
      this.ctx.rotate(60 * Math.PI / 360);
      this.spritePicker = 2;
    }
    if (this.yVel > 3) {
      this.ctx.rotate(70 * Math.PI / 360);
      this.spritePicker = 2;
    }
    if (this.dead) {
      this.ctx.rotate(120 * Math.PI / 360);
      this.spritePicker = 2;
    }
    this.ctx.translate(-(this.xPos + this.width / 2), -(this.yPos + this.height / 2));
    var spriteWidth = this.image.width / 3 * this.spritePicker;
    //debugging

    //
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos,this.yPos,this.width,this.height);


    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__["a" /* birdAnimation */][this.spritePicker].x,
      __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__["a" /* birdAnimation */][this.spritePicker].y,
      __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__["a" /* birdAnimation */][this.spritePicker].width,
      __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__["a" /* birdAnimation */][this.spritePicker].height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
    this.ctx.restore();

  }

  jump() {
    this.spritePicker = 0;
    this.yVel = -9;
    this.frames += .1;
    this.flapSound.play();
  }

  die() {
    this.dead = true;
    this.deathSound.play();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bird);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const birdAnimation = [
  // {
  //   x: 914 / 5 * 0 ,
  //   y: 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 1,
  //   y: 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 2 ,
  //   y: 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 3 ,
  //   y: 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 4 ,
  //   y: 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 0 ,
  //   y: 505/3 * 1,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 1 ,
  //   y: 505/3 * 1,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 2 ,
  //   y: 505/3 * 1,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 3 ,
  //   y: 505/3 * 1,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 4 ,
  //   y: 505/3 * 1,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 0 ,
  //   y: 505/3 * 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 1 ,
  //   y: 505/3 * 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 2 ,
  //   y: 505/3 * 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  // {
  //   x: 914 / 5 * 3 ,
  //   y: 505/3 * 2,
  //   width:914 / 5 ,
  //   height: 141,
  // },
  {
    x: 208 / 3 * 0 ,
    y: 0,
    width: 208 / 3 ,
    height: 50,
  },
  {
    x: 208 / 3 * 1 ,
    y: 0,
    width: 208 / 3 ,
    height: 50,
  },
  {
    x: 208 / 3 * 2 ,
    y: 0,
    width: 208 / 3 ,
    height: 50,
  },
];
/* harmony export (immutable) */ __webpack_exports__["a"] = birdAnimation;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Foreground {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPos = 0;
    this.speed = 16/(speed * 4);
    this.width = 336;
    this.height = 112;
    this.yPos = 505;
    this.image = new Image();
    this.image.src = 'res/ground.png';
  }

  update() {
    this.xPos -= this.speed;
    if (this.xPos < -this.width) {
      this.xPos = 0;
    }
  }

  render() {
    for (var i = 0; i < this.canvas.width / this.width + 1; i++) {
      this.ctx.drawImage(this.image, this.xPos + i * this.width, this.yPos);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Foreground);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tree {
  constructor(canvas, ctx, xPos, spritePicker, speed) {
    this.image = new Image();
    this.image.src = 'res/trees.png';
    this.treesWidth = 76;
    this.xPos = xPos;
    this.spritePicker = spritePicker;
    this.speed = 16/(speed);
    this.canvas = canvas;
    this.ctx = ctx;
  }

  update() {
    this.xPos -= this.speed;
  }

  render() {
    var spriteWidth = this.image.width / 4 * this.spritePicker;
    this.ctx.drawImage(this.image, spriteWidth, 11,
       this.image.width / 4, 100,
       this.xPos,
       505 - 90, 100, 100);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Tree);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Background {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPos = 0;
    this.speed = speed / 7;
    this.width = 288;
    this.bgImg = new Image();
    this.bgImg.src = 'res/bg.png';
  }



update() {
    this.xPos -= this.speed;
    if (this.xPos < -this.width) {
      this.xPos = 0;
    }
  }

render() {
    for (var i = 0; i < this.canvas.width / this.width + 1; i++) {
      this.ctx.drawImage(this.bgImg, this.xPos + i * this.width, 0);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Background);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Pipe {
  constructor(xPos, yPos, height, speed, ctx, top) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.height = height;
    this.width = 100;
    this.speed = speed;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'res/59894.png';
    this.top = top;
    this.checked = false;
    this.passedBird = this.passedBird.bind(this);
  }
  update() {
    this.xPos -= this.speed;
  }
  render() {
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    if (this.top) {
      this.ctx.drawImage(this.image, 56,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    } else {
      this.ctx.drawImage(this.image, 84,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    }
  }

  passedBird(bird, score) {
    // if (this.xPos + this.width <= bird.xPos + bird.width &&
    //     this.xPos <= bird.xPos)
    let a = bird.xPos > this.xPos + this.width - 5;
    // let b = bird.xPos + bird.width - 5 > this.xPos;

    if (a) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pipe);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__score_animation_js__ = __webpack_require__(0);


class Score {
  constructor(canvas, ctx, width, height) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.xPos = this.canvas.width /2 - this.width;
    this.yPos = this.height;
    this.image = new Image();
    this.image.src = 'res/score.png';
  }

update(score){
  this.score = score;
}


  render() {

    //debugging
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos,this.yPos,this.width,this.height);

if (this.score < 10) {
    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score].x,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score].y,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score].width,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score].height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  } else {
    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][(this.score - this.score % 10) / 10 ].x,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][(this.score - this.score % 10) / 10 ].y,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][(this.score - this.score % 10) / 10 ].width,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][(this.score - this.score % 10) / 10 ].height,
      this.xPos - this.width / 2,
      this.yPos,
      this.width,
      this.height
    );
    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score % 10 ].x,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score % 10 ].y,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score % 10 ].width,
      __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["a" /* scoreAnimation */][this.score % 10 ].height,
      this.xPos + this.width / 2,
      this.yPos,
      this.width,
      this.height
    );


  }

  }
}

/* harmony default export */ __webpack_exports__["a"] = (Score);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__score_animation_js__ = __webpack_require__(0);



class ScoreCard {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 655;
    this.y = 482;
    this.score = 0;
    this.highscore = 0;
    this.imageHeight = 145;
    this.imageWidth = 290;
    this.width = 290 * 2;
    this.height = 145 * 2;
    this.yVel = 0;
    this.xPos = this.canvas.width / 2 - this.width / 2;
    this.yPos = 0;
    this.image = new Image();
    this.image.src = 'res/TheBird.png';
    this.scoreImage = new Image();
    this.scoreImage.src = 'res/numbers.png';
  }

  update(score, highscore) {
    this.score = score;
    this.highscore = highscore;
    let middle = this.canvas.height / 2 - this.height / 2;
    this.yPos += this.yVel;
    if (this.yPos < middle) {
      this.yVel += 2;
    } else {
      this.yVel = 0;
      this.gravity = 0;
      this.yPos = middle;
    }
  }
  render() {

    // score

    this.ctx.drawImage(this.image,
      this.x,
      this.y,
      this.imageWidth,
      this.imageHeight,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );

    if (this.score < 10) {

      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score].height,
        this.xPos + 470,
        this.yPos + 90,
        42,
        49
      );
    } else {
      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.score - this.score % 10) / 10].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.score - this.score % 10) / 10].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.score - this.score % 10) / 10].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.score - this.score % 10) / 10].height,
        this.xPos + 440,
        this.yPos + 90,
        42,
        49
      );
      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score % 10].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score % 10].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score % 10].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.score % 10].height,
        this.xPos + 490,
        this.yPos + 90,
        42,
        49
      );
    }
    if (this.highscore < 10) {

      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore].height,
        this.xPos + 470,
        this.yPos + 190,
        42,
        49
      );
    } else {
      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.highscore - this.highscore % 10) / 10].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.highscore - this.highscore % 10) / 10].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.highscore - this.highscore % 10) / 10].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][(this.highscore - this.highscore % 10) / 10].height,
        this.xPos + 440,
        this.yPos + 190,
        42,
        49
      );
      this.ctx.drawImage(this.scoreImage,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore % 10].x,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore % 10].y,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore % 10].width,
        __WEBPACK_IMPORTED_MODULE_0__score_animation_js__["b" /* scoreCardAnimation */][this.highscore % 10].height,
        this.xPos + 490,
        this.yPos + 190,
        42,
        49
      );

    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (ScoreCard);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__ = __webpack_require__(12);


class SplashScreen {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.height = 200;
    this.width = 200;
    this.xPos = this.canvas.width / 2 - this.width / 2;
    this.yPos = this.canvas.height / 2 - this.height/ 2;
    this.image = new Image();
    this.image.src = 'res/TheBird2.png';

  }

  update(){

  }

  render(){
    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].getReadyIcon.x,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].getReadyIcon.y,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].getReadyIcon.width,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].getReadyIcon.height,
      this.xPos,
      this.yPos  - this.yPos/2,
      this.width + 100,
      this.height / 2
    );
    this.ctx.drawImage(this.image,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].tapIcon.x,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].tapIcon.y,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].tapIcon.width,
      __WEBPACK_IMPORTED_MODULE_0__splashAnimations_js__["a" /* splashAnimation */].tapIcon.height,
      this.xPos,
      this.yPos,
      this.width + 100,
      this.height
    );
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SplashScreen);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const splashAnimation = {
  getReadyIcon: {
    x: 1098,
    y:84,
    width: 1340 - 1098,
    height: 150 - 84
  },
  tapIcon: {
    x: 898,
    y: 175,
    width: 1042 - 890,
    height: 302 - 169,
  }

};
/* harmony export (immutable) */ __webpack_exports__["a"] = splashAnimation;



/***/ })
/******/ ]);
//# sourceMappingURL=happy_bird.js.map