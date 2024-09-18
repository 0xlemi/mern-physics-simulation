import { useEffect, useRef } from 'react';
import { Render, World, Runner } from 'matter-js';
import { createGround, createShapes } from '../utils/physicsObjects';
import { setupEngine, setupRender, setupRunner } from '../utils/physicsSetup';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConfig';

const SimulationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = setupEngine();
    engineRef.current = engine;

    const render = setupRender(canvasRef.current, engine);
    const runner = setupRunner();

    const ground = createGround(CANVAS_WIDTH, CANVAS_HEIGHT);
    const shapes = createShapes();

    World.add(engine.world, [ground, ...shapes]);

    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
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
