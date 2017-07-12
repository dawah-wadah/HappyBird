import {scoreAnimation} from './score_animation.js';

class Score {
  constructor(canvas, ctx, width, height) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.xPos = this.canvas.width /2;
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

if (this.score < 10) {
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
  } else {
    this.ctx.drawImage(this.image,
      scoreAnimation[(this.score - this.score % 10) / 10 ].x,
      scoreAnimation[(this.score - this.score % 10) / 10 ].y,
      scoreAnimation[(this.score - this.score % 10) / 10 ].width,
      scoreAnimation[(this.score - this.score % 10) / 10 ].height,
      this.xPos - this.width / 2,
      this.yPos,
      this.width,
      this.height
    );
    this.ctx.drawImage(this.image,
      scoreAnimation[this.score % 10 ].x,
      scoreAnimation[this.score % 10 ].y,
      scoreAnimation[this.score % 10 ].width,
      scoreAnimation[this.score % 10 ].height,
      this.xPos + this.width / 2,
      this.yPos,
      this.width,
      this.height
    );


  }

  }
}

export default Score;
