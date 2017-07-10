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

export default Pipe;
