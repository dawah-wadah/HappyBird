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

export default Background;
