class Highscore {
  constructor(canvas, ctx, scoreCard) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.scoreCard = scoreCard;
    this.globalHighscores = [];
  }

  update() {
    let scoresTable = window.firebase.database().ref("scores");
    scoresTable.orderByChild("score")
      .limitToLast(5).on('value', (snapshot, highscores) => {
        highscores = [];
        snapshot.forEach((childSnapshot) => {
          highscores.push((childSnapshot.val()));
        });
        this.globalHighscores = highscores.reverse();
      });
  }

  render() {
    let scoresY = this.scoreCard.yPos + this.scoreCard.height / 2;
    this.globalHighscores.forEach((score) => {
      this.ctx.font = "20px Georgia";
      this.ctx.fillText(`${score.username}`, this.scoreCard.xPos + 20, scoresY);
      this.ctx.fillText(`${score.score}`, this.scoreCard.xPos + 150, scoresY);
      scoresY += 25;
    });
  }
}


export default Highscore;
