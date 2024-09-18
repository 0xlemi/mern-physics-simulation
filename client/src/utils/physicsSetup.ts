import { Engine, Render, Runner } from 'matter-js';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConfig';

export const setupEngine = () => Engine.create();

export const setupRender = (canvas: HTMLCanvasElement, engine: Matter.Engine) => 
  Render.create({
    canvas,
    engine,
    options: {
      width: CANVAS_WIDTH,
      height: CANVAS_HEIGHT,
      background: '#f0f0f0',
      wireframes: false,
    },
  });

export const setupRunner = () => Runner.create();