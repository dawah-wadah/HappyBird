import {splashAnimation} from './splashAnimations.js';

class SplashScreen {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.height = 200;
    this.width = 200;
    this.xPos = this.canvas.width / 2 - this.width / 2;
    this.yPos = this.canvas.height / 2 - this.height/ 2;
    this.image = new Image();
    this.image.src = 'res/TheBird2.png';

  }

  update(){

  }

  render(){
    this.ctx.drawImage(this.image,
      splashAnimation.getReadyIcon.x,
      splashAnimation.getReadyIcon.y,
      splashAnimation.getReadyIcon.width,
      splashAnimation.getReadyIcon.height,
      this.xPos,
      this.yPos  - this.yPos/2,
      this.width + 100,
      this.height / 2
    );
    this.ctx.drawImage(this.image,
      splashAnimation.tapIcon.x,
      splashAnimation.tapIcon.y,
      splashAnimation.tapIcon.width,
      splashAnimation.tapIcon.height,
      this.xPos,
      this.yPos,
      this.width + 100,
      this.height
    );
  }
}

export default SplashScreen;
