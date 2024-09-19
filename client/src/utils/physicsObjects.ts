import { Bodies } from 'matter-js';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConfig';

export const createGround = () => {
  return Bodies.rectangle(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 10, CANVAS_WIDTH, 20, { 
    isStatic: true,
    render: { fillStyle: '#4A2511' } // Darker Brown
  });
};

export const createBox = (x: number, y: number, width: number, height: number) => {
  return Bodies.rectangle(x, y, width, height, {
    render: { fillStyle: '#e74c3c' } // Vibrant red
  });
};

export const createCircle = (x: number, y: number, radius: number) => {
  return Bodies.circle(x, y, radius, {
    render: { fillStyle: '#2ecc71' } // Bright green
  });
};

export const createTriangle = (x: number, y: number, sideLength: number) => {
  return Bodies.polygon(x, y, 3, sideLength, {
    render: { fillStyle: '#f39c12' } // Vibrant orange
  });
};

export const createPentagon = (x: number, y: number, radius: number) => {
  return Bodies.polygon(x, y, 5, radius, {
    render: { fillStyle: '#9b59b6' } // Bright purple
  });
};