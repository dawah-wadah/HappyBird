import { birdAnimation } from './bird_Animations.js';

class Bird {
  constructor(canvas, ctx, xPos, width, height) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.gravity = .4;
    this.xPos = xPos;
    this.width = width;
    this.height = height;
    this.yPos = canvas.height / 2;
    this.yVel = 0;
    this.dead = false;
    this.termVelocity = 4;
    this.frames = 0;
    this.spritePicker = 0;
    this.image = new Image();
    this.image.src = 'res/flappybird2.png';
    this.status =  this.status.bind(this);
  }

  update() {
    this.frames += .3;
    if (this.yVel < this.termVelocity) {
      this.yVel += this.gravity;
    }
    this.spritePicker = Math.floor(this.frames) % 3;
    if (this.yPos + birdAnimation[this.spritePicker].height < 505) {
      this.yPos += this.yVel;
    }
  }

  render() {
    this.ctx.save();
    this.ctx.translate(this.xPos + this.width/2, this.yPos + this.height/2);
    if (this.yVel < 0) {
      this.ctx.rotate(-30 * Math.PI / 360);
    }
    if (this.yVel > 1 && this.yVel < 2) {
      this.ctx.rotate(45 * Math.PI / 360);
      this.spritePicker = 1;
    }
    if (this.yVel > 2 && this.yVel < 3) {
      this.ctx.rotate(60 * Math.PI / 360);
      this.spritePicker = 2;
    }
    if (this.yVel > 3) {
      this.ctx.rotate(70 * Math.PI / 360);
      this.spritePicker = 2;
    }
    this.ctx.translate(-(this.xPos + this.width/2), -(this.yPos + this.height/2));
    var spriteWidth = this.image.width / 3 * this.spritePicker;
    this.ctx.drawImage(this.image,
      birdAnimation[this.spritePicker].x,
      birdAnimation[this.spritePicker].y,
      birdAnimation[this.spritePicker].width,
      birdAnimation[this.spritePicker].height,
      this.xPos,
      this.yPos,
      birdAnimation[this.spritePicker].width,
      birdAnimation[this.spritePicker].height
    );
    this.ctx.restore();
  }

  jump() {
    this.spritePicker = 0;
    this.yVel = -9;
    this.frames += .1;
  }

  status(){
    return this.dead;
  }
}

export default Bird;
