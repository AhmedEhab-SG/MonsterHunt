class Enemy {
  constructor(ctx, width, height, enemyImg) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.enemyImg = enemyImg;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.widthObj = this.spriteWidth / 2.5;
    this.heightObj = this.spriteHeight / 2.5;
    this.x = Math.random() * (width - this.widthObj);
    this.y = Math.random() * (height - this.heightObj);
    this.frame = 0;
    this.frameTime = 0;
  }

  get draw() {
    // this.ctx.strokeRect(this.x, this.y, this.width, this.height);
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

  set update(updateObj) {
    this.x += updateObj.x;
    this.y += updateObj.y;
    this.frame > updateObj.totalFrames ? (this.frame = 0) : this.frame++;
  }

  get update() {
    return this.x, this.y, this.totalFrames;
  }
}

/*----------------------------------------------------------*/

export { Enemy };
