import { backgroundAnimation } from './backGroundAnimation.js';

class Background {
  constructor(canvas, ctx, speed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPos = 0;
    this.time = true;
    this.speed = speed / 7;
    this.width = 230;
    this.bgImg = new Image();
    this.bgImg.src = 'res/TheBird2.png';
  }



update() {
    this.xPos -= this.speed;
    if (this.xPos < -this.width) {
      this.xPos = 0;
    }
  }

render() {
  let sprite;
    if (this.time) {
      sprite = backgroundAnimation.day;
    } else {
      sprite = backgroundAnimation.night;
    }
    for (var i = 0; i < this.canvas.width / this.width + 1; i++) {
      this.ctx.drawImage(this.bgImg,
        sprite.x,
        sprite.y,
        sprite.width,
        sprite.height,
        this.xPos + i * this.width,
        0,
        sprite.width,
        sprite.height
       );
    }
  }
}

export default Background;
