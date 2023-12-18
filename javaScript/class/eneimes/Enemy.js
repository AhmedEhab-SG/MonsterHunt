class Enemy {
  constructor(
    ctx,
    canvasWidth,
    canvasHeight,
    enemyImg,
    spriteWidth,
    spriteHeight
  ) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.enemyImg = new Image();
    this.enemyImg.src = enemyImg;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.widthObj = this.spriteWidth / 2.5;
    this.heightObj = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvasWidth - this.widthObj);
    this.y = Math.random() * (canvasHeight - this.heightObj);
    this.speed = Math.random() * 4 + 1;
    this.frame = 0;
    this.frameTime = 0;
  }

  get draw() {
    this.ctx.drawImage(
      this.enemyImg,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.widthObj,
      this.heightObj
    );
  }

  get update() {
    this.frame > 4 ? (this.frame = 0) : this.frame++;
  }
}

/*----------------------------------------------------------*/

export { Enemy };
