/** @type {HTMLCanvasElement} */
import { BatMonster } from "./class/BatMonster.js";

import { animate } from "./lib/functions.js";

const canvas = document.querySelector(".container");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const numberOfEnemies = 20;
const enemiesArr = [];

const enemiesSrc = [
  "../assets/img/enemies/enemy1.png",
  "../assets/img/enemies/enemy2.png",
  "../assets/img/enemies/enemy3.png",
  "../assets/img/enemies/enemy4.png",
];
const enemyObj = new Image();
enemyObj.src = enemiesSrc[0];

for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArr.push(new BatMonster(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, enemyObj));
}

animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, enemiesArr);
