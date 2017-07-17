import {animation} from './playPauseAnimation.js';


class PlayPause {
  constructor(canvas, ctx, sprite, callback, state) {
    this.canvas = canvas;

    this.ctx = ctx;
    this.state = state;
    this.callback = callback;
    this.spritePicker = sprite;
    this.xPos = canvas.width * .80;
    this.width = 100;
    this.height = 100;
    this.yPos = canvas.height * .10;
    this.image = new Image();
    this.image.src = 'res/pause-play.jpg';
    this.pause = this.pause.bind(this);
    this.canvas.addEventListener('click', this.pause, false);
  }

  pause(e){
    if (e.offsetX > this.xPos
    && e.offsetX < this.xPos + this.width
    && e.offsetY > this.yPos
    && e.offsetY < this.yPos + this.height
  && (this.state === 'Running' || this.state === 'Paused'))
    {
      this.callback();
    }
  }



  update(state){
    this.state = state;
    this.state === 'Paused' ? this.spritePicker = 1 : this.spritePicker = 0;
  }

  render(){
    this.ctx.drawImage(this.image,
      animation[this.spritePicker % 2].x,
      animation[this.spritePicker % 2].y,
      animation[this.spritePicker % 2].width,
      animation[this.spritePicker % 2].height,
      this.xPos,
      this.yPos,
      this.width,
      this.height
    );
  }


}

export default PlayPause;
