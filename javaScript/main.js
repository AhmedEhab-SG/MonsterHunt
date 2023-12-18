/** @type {HTMLCanvasElement} */

import { Layer } from "./class/background/Layer.js";
import { monsterClassArr } from "./class/scripts/classesMap.js";
import { animate } from "./lib/functions.js";
import { backgroundsSrc } from "../assets/script/assetsPath.js";

const canvas = document.querySelector(".container");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = screen.width);
const CANVAS_HEIGHT = (canvas.height = screen.height);

const gameSpeed = 5;

const numberOfEnemies = 5;
const typesOfEnemies = 4;

const layerArr = [];
const enemiesArr = [];

for (let i = 0; i < typesOfEnemies; i++) {
  enemiesArr[i] = [];
  for (let j = 0; j < numberOfEnemies; j++) {
    enemiesArr[i].push(
      new monsterClassArr[i](ctx, CANVAS_WIDTH, CANVAS_HEIGHT)
    );
  }
}

for (let i = 0; i < backgroundsSrc.length; i++) {
  layerArr.push(
    new Layer(
      ctx,
      backgroundsSrc[i],
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      0.13 * i,
      gameSpeed
    )
  );
}

animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, layerArr, enemiesArr);
