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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bird_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__foreground_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__tree_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__background_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipe_js__ = __webpack_require__(5);






window.onload = function() {
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  canvas.height = 617;
  const ctx = canvas.getContext('2d');

  const background = new __WEBPACK_IMPORTED_MODULE_3__background_js__["a" /* default */](canvas, ctx);
  const foreground = new __WEBPACK_IMPORTED_MODULE_1__foreground_js__["a" /* default */](canvas, ctx);
  const bird = new __WEBPACK_IMPORTED_MODULE_0__bird_js__["a" /* default */](canvas, ctx, 200, 100, 100);
  const pipes = [];

  function generateRandomPipes(context, canvasObject) {
    let lengthTop = Math.round(Math.random() * 200 + 100);
    let lengthBottom = canvasObject.height - 120 - lengthTop;
    let returnVal = {};
    returnVal.top = new __WEBPACK_IMPORTED_MODULE_4__pipe_js__["a" /* default */](canvasObject.width, -5, lengthTop, 7, context, true);
    returnVal.bottom = new __WEBPACK_IMPORTED_MODULE_4__pipe_js__["a" /* default */](canvasObject.width,
      canvasObject.height + 10 - lengthBottom, lengthBottom, 7, context, false);
    return returnVal;
  }


  setInterval(function() {
    let pipeSet = generateRandomPipes(ctx, canvas);
    pipes.push(pipeSet.top, pipeSet.bottom);
    if (pipes.length > 18) {
      pipes.shift();
      pipes.shift();
    }
  }, 800);
  const trees = [];

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  setInterval(function() {
    if (getRandomIntInclusive(20, 0) % 2 === 0) {
      let shade = getRandomIntInclusive(0, 3);
      trees.push(new __WEBPACK_IMPORTED_MODULE_2__tree_js___default.a(canvas, ctx, canvas.width, shade));
    }
  }, 600);
  ctx.fillStyle = '#FFF';
  gameLoop();

  window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 32:
        bird.jump();
        break;
      default:
        console.log('this is not the key you are looking for');
    }
  });


  function gameLoop() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    background.render();
    trees.forEach((tree) => {
      tree.update();
      tree.render();
    });
    bird.update();
    bird.render();
    pipes.forEach((pipe) => {
      pipe.update();
      pipe.render();
    });
    foreground.update();
    foreground.render();
    window.requestAnimationFrame(gameLoop);
  }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    this.termVelocity = 4;
    this.frames = 0;
    this.rotation = 0;
    this.spritePicker = 0;
    this.image = new Image();
    this.image.src = 'res/flying-pokemon.png';
  }

  update() {
    this.frames += .002;
    if (this.yVel < this.termVelocity) {
      this.yVel += this.gravity;
    }
    this.spritePicker = Math.floor(this.frames) % 3;
    this.yPos += this.yVel;
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
      this.ctx.rotate(90 * Math.PI / 360);
      this.spritePicker = 2;
    }
    if (this.yVel > 3) {
      this.ctx.rotate(120 * Math.PI / 360);
      this.spritePicker = 2;
    }
    this.ctx.translate(-(this.xPos + this.width/2), -(this.yPos + this.height/2));
    var spriteWidth = this.image.width / 3 * this.spritePicker;
    this.ctx.drawImage(this.image, spriteWidth,
      0,
      64,
      60,
      this.xPos,
      this.yPos,
      this.width,
      this.height);
    this.ctx.restore();
  }

  jump() {
    this.spritePicker = 0;
    this.yVel = -9;
    this.frames += 1;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Bird);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Foreground {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.fgPos = 0;
    this.fgSpeed = 4;
    this.fgWidth = 336;
    this.fgImg = new Image();
    this.fgImg.src = 'res/ground.png';
  }
  
  update() {
    this.fgPos -= this.fgSpeed;
    if (this.fgPos < -this.fgWidth) {
      this.fgPos = 0;
    }
  }

  render() {
    for (var i = 0; i < this.canvas.width / this.fgWidth + 1; i++) {
      this.ctx.drawImage(this.fgImg, this.fgPos + i * this.fgWidth, 505);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Foreground);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Tree {
  constructor(canvas, ctx, xPos, spritePicker) {
    this.image = new Image();
    this.image.src = 'res/trees.png';
    this.treesWidth = 76;
    this.xPos = xPos;
    this.spritePicker = spritePicker;
    this.speed = 4;
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Background {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.bgPos = 0;
    this.bgSpeed = 2;
    this.bgWidth = 288;
    this.bgImg = new Image();
    this.bgImg.src = 'res/bg.png';
  }



update() {
    this.bgPos -= this.bgSpeed;
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Pipe {
  constructor(xPos, yPos, length, speed, ctx, top) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.length = length;
    this.speed = speed;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = 'res/59894.png';
    this.top = top;
  }
update() {
    this.xPos -= this.speed;
  }
render() {
    if (this.top) {
      this.ctx.drawImage(this.image, 56,
        323, 26, 161, this.xPos, this.yPos, 100, this.length);
    } else {
      this.ctx.drawImage(this.image, 85,
        323, 26, 161, this.xPos, this.yPos, 100, this.length);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Pipe);


/***/ })
/******/ ]);
//# sourceMappingURL=happy_bird.js.map