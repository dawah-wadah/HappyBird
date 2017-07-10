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
    this.checked = false;
    this.passedBird = this.passedBird.bind(this);
  }
  update() {
    this.xPos -= this.speed;
  }
  render() {
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
    if (this.top) {
      this.ctx.drawImage(this.image, 56,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    } else {
      this.ctx.drawImage(this.image, 84,
        323, 26, 160, this.xPos, this.yPos, this.width, this.height);
    }
  }

  passedBird(bird, score) {
    // if (this.xPos + this.width <= bird.xPos + bird.width &&
    //     this.xPos <= bird.xPos)
    let a = bird.xPos > this.xPos + this.width - 5;
    // let b = bird.xPos + bird.width - 5 > this.xPos;

    if (a) {
      return true;
    } else {
      return false;
    }
  }
}

export default Pipe;
