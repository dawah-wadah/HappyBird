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

export default Background;
