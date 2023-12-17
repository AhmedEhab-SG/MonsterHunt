import { Enemy } from "./Enemy.js";

class BatMonster extends Enemy {
  constructor(ctx, width, height, enemyImg) {
    super(ctx, width, height, enemyImg);
    this.frameDuration = 1000 / 60;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }

  get update() {
    super.update;
    this.x += Math.random() * 7 - 3.5;
    this.y += Math.random() * 5 - 2.5;
    this.totalFrames = 4;
  }
}

export { BatMonster };
