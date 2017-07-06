window.onload = function() {
  console.log('ready');
  const canvas = document.getElementById('canvas');
  canvas.width = 2000;
  // canvas.width = window.innerWidth;
  canvas.height = 505;

  const ctx = canvas.getContext('2d');

  const environment = new Environment(canvas, ctx);
  const bird = new Bird(canvas, ctx);
  ctx.fillStyle = '#FFF';
  gameLoop();

  window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38:
        bird.jump();
        console.log('he jumped');
        break
      case 37:
        break
      case 40:
        break
      case 39:
        break
      default:
        console.log('this is not the key you are looking for')
    }

  });


  function gameLoop() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    environment.update();
    environment.render();
    bird.update();
    bird.render();
    window.requestAnimationFrame(gameLoop);
  }
};

const Environment = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 3;
  this.bgWidth = 288;
  this.bgImg = document.getElementById('bg');
};

Environment.prototype.update = function() {
  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth) {
    this.bgPos = 0;
  }
};

Environment.prototype.render = function() {
  for (var i = 0; i < this.canvas.width / this.bgWidth + 1; i++) {
    this.ctx.drawImage(this.bgImg, this.bgPos + i * this.bgWidth, 0);
  }
};

const Bird = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.gravity = .2;
  this.yPos = 0;
  // this.yPos = canvas.height/2;
  this.yVel = 0;
  this.termVelocity = 4;
  this.frames = 0;
  this.rotation = 0;
  this.spritePicker = 0;
  console.log(this.spritePicker);
  this.image = new Image();
  this.image.src = 'res/flying-pokemon.png';
};

Bird.prototype.update = function() {
  this.frames += .0625;
  if (this.yVel < this.termVelocity){
    this.yVel += this.gravity;
  }
  this.spritePicker = Math.floor(this.frames) % 3;
  this.yPos += this.yVel;
};

Bird.prototype.render = function() {
  var spriteWidth = this.image.width / 3 * this.spritePicker;
  this.ctx.save();
  if (this.yVel < 0) {
    this.ctx.translate(20, this.yPos);
    this.ctx.rotate(-30*Math.PI/360);
    this.ctx.translate(-20, -this.yPos);
  }
  if (this.yVel > 3) {
    this.ctx.translate(60, this.yPos);
    this.ctx.rotate(30*Math.PI/360);
    this.ctx.translate(-60, -this.yPos);
  }
    this.ctx.drawImage(this.image, spriteWidth, 0, 64, 60, 70, this.yPos, 100, 100);
  this.ctx.restore();
};

Bird.prototype.jump = function() {
  this.yVel = -8;
  this.frames += .8;
};
