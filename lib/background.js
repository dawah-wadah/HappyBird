import { backgroundAnimation } from './backGroundAnimation.js';

class Background {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPos = 0;
    this.time = 'day';
    this.speed = speed / 7;
    this.width = 230;
    this.bgImg = new Image();
    this.bgImg.src = 'res/TheBird2.png';
  }



update(score) {
    this.xPos -= this.speed;
    if (this.xPos < -this.width) {
      this.xPos = 0;
    }
  }

render() {
    for (var i = 0; i < this.canvas.width / this.width + 1; i++) {
      this.ctx.drawImage(this.bgImg,
        backgroundAnimation.day.x,
        backgroundAnimation.day.y,
        backgroundAnimation.day.width,
        backgroundAnimation.day.height,
        this.xPos + i * this.width,
        0,
        backgroundAnimation.day.width,
        backgroundAnimation.day.height
       );
    }
  }
}

export default Background;
