import { Enemy } from "./Enemy.js";
import { enemiesSrc } from "../../../assets/scripts/enemies.js";

class SpinMonster extends Enemy {
  constructor(ctx, canvasWidth, canvasHeight) {
    super(ctx, canvasWidth, canvasHeight, enemiesSrc[3], 213, 213);
    this.frameDuration = 1000 / 60;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.newX = Math.random() * (this.canvasWidth - this.widthObj);
    this.newY = Math.random() * (this.canvasHeight - this.heightObj);
    this.interval = Math.floor(Math.random() * 70 + 10);
  }

  get update() {
    super.update;

    if (
      Math.floor((performance.now() - this.frameTime) * this.frameDuration) %
        this.interval ===
      0
    ) {
      this.newX = Math.random() * (this.canvasWidth - this.widthObj);
      this.newY = Math.random() * (this.canvasHeight - this.heightObj);
    }

    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx / 70;
    this.y -= dy / 70;

    if (this.x + this.widthObj < 0) {
      this.x = this.canvasWidth;
    }
  }
}

export { SpinMonster };
