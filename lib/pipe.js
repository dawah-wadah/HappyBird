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

export default Pipe;