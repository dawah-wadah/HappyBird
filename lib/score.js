import {scoreAnimation} from './score_animation.js';

class Score {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.width = 100;
    this.height = 100;
    this.xPos = this.canvas.width /2 - this.width;
    this.yPos = this.height;
    this.image = new Image();
    this.image.src = 'res/score.png';
  }

update(score){
  this.score = score;
}


  render() {

    //debugging
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos,this.yPos,this.width,this.height);

    this.ctx.drawImage(this.image,
      scoreAnimation[this.score].x,
      scoreAnimation[this.score].y,
      scoreAnimation[this.score].width,
      scoreAnimation[this.score].height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );

  }
}

export default Score;
