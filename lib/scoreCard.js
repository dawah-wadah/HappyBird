import {
  scoreCardAnimation
} from './score_animation.js';


class ScoreCard {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 655;
    this.y = 482;
    this.score = 0;
    this.highscore = 0;
    this.globalHighscores = [];
    this.imageHeight = 145;
    this.imageWidth = 290;
    this.width = 290 * 2;
    this.height = 145 * 2;
    this.yVel = 0;
    this.xPos = this.canvas.width / 2 - this.width / 2;
    this.yPos = 0;
    this.image = new Image();
    this.image.src = 'res/TheBird.png';
    this.scoreImage = new Image();
    this.scoreImage.src = 'res/numbers.png';
  }

  update(score, highscore) {
    this.score = score;
    this.highscore = highscore;
    let middle = this.canvas.height / 2 - this.height / 2;
    this.yPos += this.yVel;
    if (this.yPos < middle) {
      this.yVel += 2;
    } else {
      this.yVel = 0;
      this.gravity = 0;
      this.yPos = middle;
    }

  }



  render() {

    // score

    this.ctx.drawImage(this.image,
      this.x,
      this.y,
      this.imageWidth,
      this.imageHeight,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );

    if (this.score < 10) {

      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[this.score].x,
        scoreCardAnimation[this.score].y,
        scoreCardAnimation[this.score].width,
        scoreCardAnimation[this.score].height,
        this.xPos + 470,
        this.yPos + 90,
        42,
        49
      );
    } else {
      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[(this.score - this.score % 10) / 10].x,
        scoreCardAnimation[(this.score - this.score % 10) / 10].y,
        scoreCardAnimation[(this.score - this.score % 10) / 10].width,
        scoreCardAnimation[(this.score - this.score % 10) / 10].height,
        this.xPos + 440,
        this.yPos + 90,
        42,
        49
      );
      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[this.score % 10].x,
        scoreCardAnimation[this.score % 10].y,
        scoreCardAnimation[this.score % 10].width,
        scoreCardAnimation[this.score % 10].height,
        this.xPos + 490,
        this.yPos + 90,
        42,
        49
      );
    }
    if (this.highscore < 10) {

      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[this.highscore].x,
        scoreCardAnimation[this.highscore].y,
        scoreCardAnimation[this.highscore].width,
        scoreCardAnimation[this.highscore].height,
        this.xPos + 470,
        this.yPos + 190,
        42,
        49
      );
    } else {
      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[(this.highscore - this.highscore % 10) / 10].x,
        scoreCardAnimation[(this.highscore - this.highscore % 10) / 10].y,
        scoreCardAnimation[(this.highscore - this.highscore % 10) / 10].width,
        scoreCardAnimation[(this.highscore - this.highscore % 10) / 10].height,
        this.xPos + 440,
        this.yPos + 190,
        42,
        49
      );
      this.ctx.drawImage(this.scoreImage,
        scoreCardAnimation[this.highscore % 10].x,
        scoreCardAnimation[this.highscore % 10].y,
        scoreCardAnimation[this.highscore % 10].width,
        scoreCardAnimation[this.highscore % 10].height,
        this.xPos + 490,
        this.yPos + 190,
        42,
        49
      );


    }
  }
}

export default ScoreCard;
