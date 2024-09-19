import { CANVAS_WIDTH, CANVAS_HEIGHT } from './canvasConfig';

describe('canvasConfig', () => {
  it('exports CANVAS_WIDTH and CANVAS_HEIGHT', () => {
    expect(CANVAS_WIDTH).toBeDefined();
    expect(CANVAS_HEIGHT).toBeDefined();
    expect(typeof CANVAS_WIDTH).toBe('number');
    expect(typeof CANVAS_HEIGHT).toBe('number');
  });
});