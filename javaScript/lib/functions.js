/* darw fun */

const animate = function (
  ctx,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  layerArr,
  eneimesArr,
  currentTime = performance.now()
) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  layerArr.forEach((layer) => {
    const deltaTime = currentTime - layer.frameTime;
    if (deltaTime >= layer.frameDuration) {
      layer.frameTime = currentTime;
      layer.update;
    }
    
    layer.draw;
  });

  eneimesArr.forEach((enemyArr) => {
    enemyArr.forEach((enemy) => {
      const deltaTime = currentTime - enemy.frameTime;
      if (deltaTime >= enemy.frameDuration * enemy.flapSpeed) {
        enemy.frameTime = currentTime;
        enemy.update;
      }
      enemy.draw;
    });
  });

  // enemiesArr.update;
  // enemiesArr.draw;
  requestAnimationFrame((time) =>
    animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, layerArr, eneimesArr, time)
  );
};

/*---------------------------------------------------- */

export { animate };
