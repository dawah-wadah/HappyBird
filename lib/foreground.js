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

export default Foreground;
