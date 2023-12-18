class Layer {
  constructor(
    ctx,
    imgSrc,
    canvasWidth,
    canvasHeight,
    speedModifier,
    gameSpeed
  ) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = canvasHeight;
    this.image = new Image();
    this.image.src = imgSrc;
    this.speedModifier = speedModifier;
    this.gameSpeed = gameSpeed;
    this.speed = this.gameSpeed * this.speedModifier;
    this.frameDuration = 1000 / 120;
    this.frameTime = 0;
  }
  get draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
  get update() {
    this.speed = this.gameSpeed * this.speedModifier;

    if (this.x <= -this.width) {
      this.x = 0;
    }

    this.x = Math.floor(this.x - this.speed);
  }
}

export { Layer };
