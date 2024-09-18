import React, { useRef, useEffect } from 'react';
import { Engine, Render, World, Bodies } from 'matter-js';

const SimulationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 500,
        background: '#f0f0f0',
        wireframes: false,
      },
    });

    const box = Bodies.rectangle(400, 250, 80, 80, { 
      render: { fillStyle: '#e74c3c' }
    });
    World.add(engine.world, [box]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <canvas
        ref={canvasRef}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default SimulationCanvas;
