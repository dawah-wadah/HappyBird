class Foreground {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPos = 0;
    this.speed = 16/(speed * 4);
    this.width = 336;
    this.height = 112;
    this.yPos = 624;
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

export default Foreground;
