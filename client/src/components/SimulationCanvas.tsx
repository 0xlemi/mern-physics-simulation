import { useEffect, useRef } from 'react';
import { Render, Runner, World } from 'matter-js';
import { createGround, createBox, createCircle, createTriangle, createPentagon } from '../utils/physicsObjects';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants/canvasConfig';
import { setupEngine, setupRender, setupRunner } from '../utils/physicsSetup';

const SimulationCanvas= () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = setupEngine();
    const runner = setupRunner();
    const render = setupRender(canvasRef.current, engine);

    // Create world
    const world = engine.world;

    // Add ground to the world
    const ground = createGround();
    World.add(world, ground);

    // Add some initial objects
    const box = createBox(400, 200, 80, 80);
    const circle = createCircle(300, 50, 40);
    const triangle = createTriangle(500, 100, 60);
    const pentagon = createPentagon(600, 300, 40);

    World.add(world, [box, circle, triangle, pentagon]);

    // Set gravity
    engine.world.gravity.y = 1;

    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup function
    return () => {
      Render.stop(render);
      World.clear(world, false);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default SimulationCanvas;
