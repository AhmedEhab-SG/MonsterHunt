import { Enemy } from "./Enemy.js";
import { enemiesSrc } from "../../../assets/script/assetsPath.js";

class BatMonster extends Enemy {
  constructor(ctx, width, height) {
    super(ctx, width, height, enemiesSrc[0], 293, 155);
    this.frameDuration = 1000 / 60;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  get update() {
    super.update;
    this.x += Math.random() * 7 - 3.5;
    this.y += Math.random() * 5 - 2.5;
  }
}

export { BatMonster };
