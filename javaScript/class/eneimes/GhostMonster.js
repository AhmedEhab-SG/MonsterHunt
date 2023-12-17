import { Enemy } from "./Enemy.js";
import { enemiesSrc } from "../../../assets/scripts/enemies.js";

class GhostMonster extends Enemy {
  constructor(ctx, canvasWidth, canvasHeight) {
    super(ctx, canvasWidth, canvasHeight, enemiesSrc[2], 218, 177);
    this.frameDuration = 1000 / 144;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.3 + 1.5;
    this.moveWidth = Math.random() * 360 + 180;
    this.moveHeight = Math.random() * 360 + 180;
  }

  get update() {
    super.update;
    this.x =
      (this.canvasWidth / 2 - this.widthObj) *
        Math.sin((this.angle * Math.PI) / this.moveWidth) +
      (this.canvasWidth / 2 - this.widthObj / 2);
    this.y =
      (this.canvasHeight / 2 - this.heightObj) *
        Math.cos((this.angle * Math.PI) / this.moveHeight) +
      (this.canvasHeight / 2 - this.heightObj / 2);

    this.angle += this.angleSpeed;

    if (this.x + this.widthObj < 0) {
      this.x = this.canvasWidth;
    }
  }
}

export { GhostMonster };
