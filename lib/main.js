window.onload = function() {
  console.log('ready');
  const canvas = document.getElementById('canvas');
  canvas.width = window.innerWidth;
  canvas.height = 1080;

  const ctx = canvas.getContext('2d');

  const environment = new Environment(canvas, ctx);
  ctx.fillStyle = '#FFFFFF';
  gameLoop();

  function gameLoop() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    environment.update();
    environment.render();
    window.requestAnimationFrame(gameLoop);
  }
};

const Environment = function(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.bgPos = 0;
  this.fgPos = 0;
  this.bgSpeed = 3;
  this.bgWidth = 1920;
  this.bgImg = document.getElementById('bg');
};

Environment.prototype.update = function () {
  this.bgPos -= this.bgSpeed;
  if (this.bgPos < -this.bgWidth) {
    this.bgPos = 0;
  }
};

Environment.prototype.render = function () {
  for (var i = 0; i < this.canvas.width/this.bgWidth+1; i++) {
    this.ctx.drawImage(this.bgImg, this.bgPos+i*this.bgWidth, 0);
  }
};
