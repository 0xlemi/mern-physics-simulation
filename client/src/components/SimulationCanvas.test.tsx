import { render } from '@testing-library/react';
import SimulationCanvas from './SimulationCanvas';
import * as physicsSetup from '../utils/physicsSetup';
import * as physicsObjects from '../utils/physicsObjects';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConfig';
import { Engine, Render, World } from 'matter-js';

jest.mock('../utils/physicsSetup', () => ({
  setupEngine: jest.fn(() => ({
    world: {
      gravity: { y: 0 },
      add: jest.fn(),
    },
  })),
  setupRender: jest.fn(),
  setupRunner: jest.fn(),
}));

jest.mock('../utils/physicsObjects', () => ({
  createGround: jest.fn(() => ({ /* mock ground object */ })),
  createBox: jest.fn(),
  createCircle: jest.fn(),
  createTriangle: jest.fn(),
  createPentagon: jest.fn(),
}));

jest.mock('matter-js', () => ({
  World: { add: jest.fn(), clear: jest.fn() },
  Runner: { run: jest.fn() },
  Render: { run: jest.fn(), stop: jest.fn() },
  Engine: jest.fn(),
}));

describe('SimulationCanvas', () => {
  it('renders canvas with correct dimensions', () => {
    const { container } = render(<SimulationCanvas />);
    const canvas = container.querySelector('canvas');
    expect(canvas).not.toBeNull();
    expect(canvas?.getAttribute('width')).toBe(CANVAS_WIDTH.toString());
    expect(canvas?.getAttribute('height')).toBe(CANVAS_HEIGHT.toString());
  });

  it('sets up physics engine and objects', () => {
    render(<SimulationCanvas />);
    expect(physicsSetup.setupEngine).toHaveBeenCalled();
    expect(physicsSetup.setupRender).toHaveBeenCalled();
    expect(physicsSetup.setupRunner).toHaveBeenCalled();
    expect(physicsObjects.createGround).toHaveBeenCalled();
    expect(physicsObjects.createBox).toHaveBeenCalled();
    expect(physicsObjects.createCircle).toHaveBeenCalled();
    expect(physicsObjects.createTriangle).toHaveBeenCalled();
    expect(physicsObjects.createPentagon).toHaveBeenCalled();
  });

  it('sets gravity', () => {
    const mockEngine = {
      world: {
        gravity: { y: 0 },
      }
    };
    jest.spyOn(physicsSetup, 'setupEngine').mockReturnValue(mockEngine as unknown as Engine);
    render(<SimulationCanvas />);
    expect(mockEngine.world.gravity.y).toBe(1);
  });

  it('cleans up on unmount', () => {
    const { unmount } = render(<SimulationCanvas />);
    unmount();
    expect(jest.mocked(Render.stop)).toHaveBeenCalled();
    expect(jest.mocked(World.clear)).toHaveBeenCalled();
  });
});