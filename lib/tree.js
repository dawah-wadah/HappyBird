class Tree {
  constructor(canvas, ctx, xPos, spritePicker, speed) {
    this.image = new Image();
    this.image.src = 'res/trees.png';
    this.treesWidth = 76;
    this.xPos = xPos;
    this.spritePicker = spritePicker;
    this.speed = 16/(speed);
    this.canvas = canvas;
    this.ctx = ctx;
  }

  update() {
    this.xPos -= this.speed;
  }

  render() {
    var spriteWidth = this.image.width / 4 * this.spritePicker;
    this.ctx.drawImage(this.image, spriteWidth, 11,
       this.image.width / 4, 100,
       this.xPos,
       505 - 90, 100, 100);
  }
}

export default Tree;
