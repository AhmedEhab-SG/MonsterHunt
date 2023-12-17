/** @type {HTMLCanvasElement} */
import { BatMonster } from "./class/eneimes/BatMonster.js";
import { BirdMonster } from "./class/eneimes/BirdMonster.js";
import { GhostMonster } from "./class/eneimes/GhostMonster.js";
import { SpinMonster } from "./class/eneimes/SpinMonster.js";

import { animate } from "./lib/functions.js";

const canvas = document.querySelector(".container");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

const numberOfEnemies = 20;
const batsArr = [];
const birdArr = [];

for (let i = 0; i < numberOfEnemies; i++) {
  //batsArr.push(new BatMonster(ctx, CANVAS_WIDTH, CANVAS_HEIGHT));
  batsArr.push(new SpinMonster(ctx, CANVAS_WIDTH, CANVAS_HEIGHT));
}

//animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, batsArr);
animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, batsArr);
