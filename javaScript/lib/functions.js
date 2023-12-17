/* darw fun */

const animate = function (
  ctx,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  enemiesArr,
  currentTime = performance.now()
) {
  // this will clear old paint
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  enemiesArr.forEach((enemy) => {
    const deltaTime = currentTime - enemy.frameTime;
    if (deltaTime >= enemy.frameDuration * enemy.flapSpeed) {
      enemy.frameTime = currentTime;
      enemy.update;
    }
    enemy.draw;
    
  });

  // will make aniamtion loop like set interval
  requestAnimationFrame((time) =>
    animate(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, enemiesArr, time)
  );
};

/*---------------------------------------------------- */

export { animate };
