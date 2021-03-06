import {
  birdAnimation
} from './bird_Animations.js';

class Bird {
  constructor(canvas, ctx, xPos, width, height, state) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.gravity = .6;
    this.xPos = xPos;
    this.width = width;
    this.height = height;
    this.currentState = "Splash";
    this.yPos = canvas.height / 2;
    this.yVel = 0;
    this.dead = false;
    this.termVelocity = 5;
    this.frames = 0;
    this.spritePicker = 0;
    this.image = new Image();
    this.image.src = 'res/flappybird2.png';
    this.die = this.die.bind(this);
    this.deathSound = new Audio;
    this.deathSound.src = 'res/sounds/sfx_die.wav';
    this.flapSound = new Audio;
    this.flapSound.src = 'res/sounds/sfx_wing.wav';
  }

  update(state = 'Splash') {
    this.frames += .2;
    this.spritePicker = Math.floor(this.frames) % 3;
    this.currentState = state;
    this.yPos += this.yVel;

    switch (this.currentState) {
      case 'Running':
        if (this.yVel < this.termVelocity) {
          this.yVel += this.gravity;
        }
        break;
      case 'GameOver':
        if (this.yPos < 627 - this.width) {
          this.yVel += 2;
        } else {
          this.yVel = 0;
          this.gravity = 0;
          this.yPos = 627 - this.width;
        }
        break;
      default:

    }
  }

  render() {
    this.ctx.save();
    this.ctx.translate(this.xPos + this.width / 2, this.yPos + this.height / 2);
    this.ctx.rotate(this.yVel * 15 * Math.PI / 360);
    if (this.yVel > 1)
    { this.spritePicker = 1;}
    if (this.dead) {
      this.ctx.rotate(120 * Math.PI / 360);
      this.spritePicker = 2;
    }
    this.ctx.translate(-(this.xPos + this.width / 2), -(this.yPos + this.height / 2));
    var spriteWidth = this.image.width / 3 * this.spritePicker;
    //debugging

    //
    // this.ctx.fillStyle = '#FF0000';
    // this.ctx.fillRect(this.xPos,this.yPos,this.width,this.height);


    this.ctx.drawImage(this.image,
      birdAnimation[this.spritePicker].x,
      birdAnimation[this.spritePicker].y,
      birdAnimation[this.spritePicker].width,
      birdAnimation[this.spritePicker].height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
    this.ctx.restore();

  }

  jump() {
    this.spritePicker = 0;
    this.yVel = -8;
    this.frames += .05;
    this.flapSound.play();
  }

  die() {
    this.dead = true;
    this.deathSound.play();
  }
}

export default Bird;
