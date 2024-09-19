import { createGround, createBox, createCircle, createTriangle, createPentagon } from './physicsObjects';
import { Bodies } from 'matter-js';

jest.mock('matter-js', () => ({
  Bodies: {
    rectangle: jest.fn(),
    circle: jest.fn(),
    polygon: jest.fn(),
  },
}));

jest.mock('../constants/canvasConfig', () => ({
  CANVAS_WIDTH: 800,
  CANVAS_HEIGHT: 600,
}));

describe('physicsObjects', () => {
  describe('createGround', () => {
    it('creates a rectangle body for ground', () => {
      createGround();
      expect(Bodies.rectangle).toHaveBeenCalledWith(400, 590, 800, 20, {
        isStatic: true,
        render: { fillStyle: '#4A2511' },
      });
    });
  });

  describe('createBox', () => {
    it('creates a rectangle body', () => {
      createBox(100, 200, 50, 50);
      expect(Bodies.rectangle).toHaveBeenCalledWith(100, 200, 50, 50, {
        render: { fillStyle: '#e74c3c' },
      });
    });
  });

  describe('createCircle', () => {
    it('creates a circle body', () => {
      createCircle(150, 250, 30);
      expect(Bodies.circle).toHaveBeenCalledWith(150, 250, 30, {
        render: { fillStyle: '#2ecc71' },
      });
    });
  });

  describe('createTriangle', () => {
    it('creates a triangle body', () => {
      createTriangle(200, 300, 60);
      expect(Bodies.polygon).toHaveBeenCalledWith(200, 300, 3, 60, {
        render: { fillStyle: '#f39c12' },
      });
    });
  });

  describe('createPentagon', () => {
    it('creates a pentagon body', () => {
      createPentagon(250, 350, 40);
      expect(Bodies.polygon).toHaveBeenCalledWith(250, 350, 5, 40, {
        render: { fillStyle: '#9b59b6' },
      });
    });
  });
});