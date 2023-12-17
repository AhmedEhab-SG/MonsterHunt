import { Enemy } from "./Enemy.js";
import { enemiesSrc } from "../../../assets/scripts/enemies.js";

class BirdMonster extends Enemy {
  constructor(ctx, canvasWidth, canvasHeight) {
    super(ctx, canvasWidth, canvasHeight, enemiesSrc[1], 266, 188);
    this.frameDuration = 1000 / 90;
    this.flapSpeed = Math.floor(Math.random() * 4 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.moveCurve = Math.random() * 5;
  }

  get update() {
    super.update;
    this.x -= this.speed;

    this.y += this.moveCurve * Math.sin(this.angle);
    this.angle += this.angleSpeed;

    if (this.x + this.widthObj < 0) {
      this.x = this.canvasWidth;
    }
  }
}

export { BirdMonster };
