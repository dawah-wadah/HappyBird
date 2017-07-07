class Bird {
  constructor(canvas, ctx) {
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
  }

  update() {
    this.frames += .002;
    if (this.yVel < this.termVelocity) {
      this.yVel += this.gravity;
    }
    this.spritePicker = Math.floor(this.frames) % 3;
    this.yPos += this.yVel;
  }

  render() {
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
  }

  jump() {
    this.spritePicker = 0;
    this.yVel = -9;
    this.frames += 1;
  }
}

export default Bird;
