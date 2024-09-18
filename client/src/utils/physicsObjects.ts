import { Bodies } from 'matter-js';

export const createGround = (width: number, height: number) => {
  const groundHeight = 50;
  return Bodies.rectangle(
    width / 2,
    height - groundHeight / 2,
    width,
    groundHeight,
    { 
      isStatic: true,
      render: { fillStyle: '#5D4037' }
    }
  );
};

export const createShapes = () => [
  Bodies.rectangle(400, 200, 80, 80, { render: { fillStyle: '#F94144' } }),
  Bodies.circle(400, 100, 40, { render: { fillStyle: '#F3722C' } }),
  Bodies.polygon(300, 200, 3, 50, { render: { fillStyle: '#90BE6D' } }),
  Bodies.polygon(500, 200, 5, 50, { render: { fillStyle: '#43AA8B' } }),
];