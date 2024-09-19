import {  createGround, createShapes } from './physicsObjects';
import { Bodies } from 'matter-js';

jest.mock('matter-js', () => ({
  Bodies: {
    rectangle: jest.fn(),
    circle: jest.fn(),
    polygon: jest.fn(),
  },
}));

describe('physicsObjects', () => {

  describe('createGround', () => {
    it('creates a rectangle body for ground', () => {
      createGround(800, 600);
      expect(Bodies.rectangle).toHaveBeenCalledWith(400, 575, 800, 50, { // Update y-coordinate to 575
        isStatic: true,
        render: { fillStyle: '#5D4037' }, // Add render property if applicable
      });
    });
  });

  describe('createShapes', () => {
    it('creates multiple shapes', () => {
      const shapes = createShapes();
      expect(shapes.length).toBeGreaterThan(0);
      expect(Bodies.rectangle).toHaveBeenCalled();
      expect(Bodies.polygon).toHaveBeenCalledTimes(2); 
    });
  });
});