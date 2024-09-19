import { setupEngine, setupRender, setupRunner } from './physicsSetup';
import { Engine, Render, Runner } from 'matter-js';

jest.mock('matter-js', () => ({
  Engine: {
    create: jest.fn(() => ({ world: {} })),
  },
  Render: {
    create: jest.fn(),
  },
  Runner: {
    create: jest.fn(() => ({})), // Return an empty object
  },
}));

describe('physicsSetup', () => {
  describe('setupEngine', () => {
    it('creates and returns an engine', () => {
      const engine = setupEngine();
      expect(Engine.create).toHaveBeenCalled();
      expect(engine).toBeDefined();
    });
  });

  describe('setupRender', () => {
    it('creates a render with correct options', () => {
      const mockCanvas = {}; 
      const engine = Engine.create(); 
      setupRender(mockCanvas as unknown as HTMLCanvasElement, engine); 
      expect(Render.create).toHaveBeenCalledWith({
        canvas: mockCanvas,
        engine,
        options: expect.objectContaining({
          width: expect.any(Number),
          height: expect.any(Number),
          background: '#f0f0f0',
          wireframes: false,
        }),
      });
    });
  });

  describe('setupRunner', () => {
    it('creates and returns a runner', () => {
      const runner = setupRunner();
      expect(Runner.create).toHaveBeenCalled();
      expect(runner).toBeDefined();
    });
  });
});