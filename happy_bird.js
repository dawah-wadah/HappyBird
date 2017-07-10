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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_js__ = __webpack_require__(1);


window.onload = function() {
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  canvas.height = 617;
  const frames = 0;
  const ctx = canvas.getContext('2d');
  let gamePaused = false;
  const game = new __WEBPACK_IMPORTED_MODULE_0__game_js__["a" /* default */](canvas, ctx, frames);




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


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bird_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foreground_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_js__ = __webpack_require__(7);






class Game {
  constructor(canvas, ctx, frames) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.frames = frames;
    this.state = false;
    this.speed = 7;
    this.background = new __WEBPACK_IMPORTED_MODULE_3__background_js__["a" /* default */](this.canvas, this.ctx, this.speed);
    this.foreground = new __WEBPACK_IMPORTED_MODULE_1__foreground_js__["a" /* default */](this.canvas, this.ctx, this.speed);
    this.bird = new __WEBPACK_IMPORTED_MODULE_0__bird_js__["a" /* default */](canvas, ctx, 200, 70, 50);
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
        this.trees.push(new __WEBPACK_IMPORTED_MODULE_2__tree_js__["a" /* default */](this.canvas, this.ctx, this.canvas.width, shade, this.speed));
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
      }
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
    }
    if (!this.state) {
      this.gameID = window.requestAnimationFrame(this.gameLoop);
    } else {
      window.cancelAnimationFrame(this.gameID);
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bird_Animations_js__ = __webpack_require__(3);


class Bird {
  constructor(canvas, ctx, xPos, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.gravity = .4;
    this.xPos = xPos;
    this.width = width;
    this.height = height;
    this.yPos = canvas.height / 2;
    this.yVel = 0;
    this.dead = false;
    this.termVelocity = 4;
    this.frames = 0;
    this.spritePicker = 0;
    this.image = new Image();
    this.image.src = 'res/flappybird2.png';
    this.die =  this.die.bind(this);
  }

  update() {
    this.frames += .3;
    this.yPos += this.yVel;
    if (this.yVel < this.termVelocity) {
      this.yVel += this.gravity;
    }
    this.spritePicker = Math.floor(this.frames) % 3;

    if(this.dead){
      this.yVel += 10;
    }
  }

  render() {
    this.ctx.save();
    this.ctx.translate(this.xPos + this.width/2, this.yPos + this.height/2);
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
      this.ctx.rotate(90 * Math.PI / 360);
      this.spritePicker = 2;
    }
    this.ctx.translate(-(this.xPos + this.width/2), -(this.yPos + this.height/2));
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
  }

  die(){
  this.dead = true;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bird);


/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Tree {
  constructor(canvas, ctx, xPos, spritePicker, speed) {
    this.image = new Image();
    this.image.src = 'res/trees.png';
    this.treesWidth = 76;
    this.xPos = xPos;
    this.spritePicker = spritePicker;
    this.speed = 16/(speed * 4);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Background {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.bgPos = 0;
    this.speed = speed / 7;
    this.bgWidth = 288;
    this.bgImg = new Image();
    this.bgImg.src = 'res/bg.png';
  }



update() {
    this.bgPos -= this.speed;
    if (this.bgPos < -this.bgWidth) {
      this.bgPos = 0;
    }
  }

render() {
    for (var i = 0; i < this.canvas.width / this.bgWidth + 1; i++) {
      this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Background);


/***/ }),
/* 7 */
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
    this.passedBird = this.passedBird.bind(this);
  }
update() {
    this.xPos -= this.speed;
  }
render() {
    if (this.top) {
      this.ctx.fillStyle='#FFF';
      this.ctx.drawImage(this.image, 56,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    } else {
      this.ctx.drawImage(this.image, 84,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    }
  }

  passedBird(bird){
    if (this.xPos + this.width <= bird.xPos + bird.width &&
        this.xPos <= bird.xPos){
          return true;
        } else { return false;}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pipe);


/***/ })
/******/ ]);
//# sourceMappingURL=happy_bird.js.map