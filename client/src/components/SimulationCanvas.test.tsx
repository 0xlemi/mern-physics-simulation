import { render } from '@testing-library/react';
import SimulationCanvas from './SimulationCanvas';
import * as physicsSetup from '../utils/physicsSetup';
import * as physicsObjects from '../utils/physicsObjects';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../constants/canvasConfig';

jest.mock('../utils/physicsSetup', () => ({
  setupEngine: jest.fn(() => ({ world: {} })), // Mocking a valid engine object
  setupRender: jest.fn(),
  setupRunner: jest.fn(),
}));
jest.mock('../utils/physicsObjects', () => ({
    createGround: jest.fn(() => ({ /* mock ground object */ })),
    createShapes: jest.fn(() => [
        { /* mock shape 1 */ },
        { /* mock shape 2 */ },
    ]),
}));
jest.mock('matter-js', () => ({
  World: { add: jest.fn() },
  Runner: { run: jest.fn(), stop: jest.fn() },
  Render: { run: jest.fn(), stop: jest.fn() },
}));

describe('SimulationCanvas', () => {
  it('renders canvas with correct dimensions', () => {
    const { container } = render(<SimulationCanvas />);
    const canvas = container.querySelector('canvas') as HTMLCanvasElement; // Assert type
    expect(canvas).not.toBeNull(); // Ensure canvas is not null
    expect(canvas?.getAttribute('width')).toBe(CANVAS_WIDTH.toString());
    expect(canvas?.getAttribute('height')).toBe(CANVAS_HEIGHT.toString());
  });

  it('sets up physics engine and objects', () => {
    render(<SimulationCanvas />);
    expect(physicsSetup.setupEngine).toHaveBeenCalled();
    expect(physicsSetup.setupRender).toHaveBeenCalled();
    expect(physicsSetup.setupRunner).toHaveBeenCalled();
    expect(physicsObjects.createGround).toHaveBeenCalledWith(CANVAS_WIDTH, CANVAS_HEIGHT);
    expect(physicsObjects.createShapes).toHaveBeenCalled();
  });
});