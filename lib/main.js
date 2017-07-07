window.onload = function() {
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  canvas.height = 617;

  const ctx = canvas.getContext('2d');


  const background = new Background(canvas, ctx);
  const foreground = new Foreground(canvas, ctx);
  const bird = new Bird(canvas, ctx);

  function generateRandomPipes(context, canvasObject) {
    let lengthTop = Math.round(Math.random() * 200 + 100);
    let lengthBottom = canvasObject.height - 120 - lengthTop;
    let returnVal = {};
    returnVal.top = new Pipe(canvasObject.width, -5, lengthTop, 10, context, true);
    returnVal.bottom = new Pipe(canvasObject.width,
      canvasObject.height + 10 - lengthBottom, lengthBottom, 10, context, false);
    return returnVal;
  }

  const pipes = [];

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
      trees.push(new Tree(canvas, ctx, canvas.width, shade));
    }
  }, 600);
  ctx.fillStyle = '#FFF';
  gameLoop();

  window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38:
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
    pipes.forEach((pipe) => {
      pipe.update();
      pipe.render();
    });
    foreground.update();
    foreground.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop);
  }
};

const Foreground = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.fgPos = 0;
  this.fgSpeed = 4;
  this.fgWidth = 336;
  this.fgImg = new Image();
  this.fgImg.src = 'res/ground.png';

};

Foreground.prototype.update = function() {
  this.fgPos -= this.fgSpeed;
  if (this.fgPos < -this.fgWidth) {
    this.fgPos = 0;
  }
};

Foreground.prototype.render = function() {
  for (var i = 0; i < this.canvas.width / this.fgWidth + 1; i++) {
    this.ctx.drawImage(this.fgImg, this.fgPos + i * this.fgWidth, 505);
  }
};

const Background = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.bgPos = 0;
  this.bgSpeed = 2;
  this.bgWidth = 288;
  this.bgImg = new Image();
  this.bgImg.src = 'res/bg.png';
};



const Tree = function(canvas, ctx, xPos, spritePicker) {
  this.image = new Image();
  this.image.src = 'res/trees.png';
  this.treesWidth = 76;
  this.xPos = xPos;
  this.spritePicker = spritePicker;
  this.speed = 4;
  this.canvas = canvas;
  this.ctx = ctx;
};

Tree.prototype.update = function() {
  this.xPos -= this.speed;
};
Tree.prototype.render = function() {
  var spriteWidth = this.image.width / 4 * this.spritePicker;
  this.ctx.drawImage(this.image, spriteWidth, 11, this.image.width / 4, 100, this.xPos, 505 - 90, 100, 100);
};

Background.prototype.update = function() {
  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth) {
    this.bgPos = 0;
  }
};

Background.prototype.render = function() {
  for (var i = 0; i < this.canvas.width / this.bgWidth + 1; i++) {
    this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
  }
};

const Bird = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.gravity = .4;
  this.yPos = canvas.height / 2;
  this.yVel = 0;
  this.termVelocity = 4;
  this.frames = 0;
  this.rotation = 0;
  this.spritePicker = 0;
  this.image = new Image();
  this.image.src = 'res/flying-pokemon.png';
};

Bird.prototype.update = function() {
  this.frames += .002;
  if (this.yVel < this.termVelocity) {
    this.yVel += this.gravity;
  }
  this.spritePicker = Math.floor(this.frames) % 3;
  this.yPos += this.yVel;
};

Bird.prototype.render = function() {
  this.ctx.save();
  this.ctx.translate(135, this.yPos + 50);
  if (this.yVel < 0) {
    this.ctx.rotate(-30 * Math.PI / 360);
  }
  if (this.yVel > 1 && this.yVel < 2) {
    this.ctx.rotate(45 * Math.PI / 360);
    this.spritePicker = 2;
  }
  if (this.yVel > 2 && this.yVel < 3) {
    this.ctx.rotate(90 * Math.PI / 360);
    this.spritePicker = 2;
  }
  if (this.yVel > 3) {
    this.ctx.rotate(120 * Math.PI / 360);
    this.spritePicker = 2;
  }
  this.ctx.translate(-135, -(this.yPos + 50));
  var spriteWidth = this.image.width / 3 * this.spritePicker;
  this.ctx.drawImage(this.image, spriteWidth, 0, 64, 60, 100, this.yPos, 100, 100);
  this.ctx.restore();
};

Bird.prototype.jump = function() {
  this.spritePicker = 0;
  this.yVel = -9;
  this.frames += 1;
};

const Pipe = function(xPos, yPos, length, speed, ctx, top) {
  this.xPos = xPos;
  this.yPos = yPos;
  this.length = length;
  this.speed = speed;
  this.ctx = ctx;
  this.image = new Image();
  this.image.src = 'res/59894.png';
  this.top = top;
};

Pipe.prototype.update = function() {
  this.xPos -= this.speed;
};

Pipe.prototype.render = function() {
  if (this.top) {
    this.ctx.drawImage(this.image, 56,
      323, 26, 161, this.xPos, this.yPos, 100, this.length);
  } else {
    this.ctx.drawImage(this.image, 85,
      323, 26, 161, this.xPos, this.yPos, 100, this.length);
  }
};
