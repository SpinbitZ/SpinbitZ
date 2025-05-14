import { describe, it, expect, vi } from 'vitest';
import { registerAspects } from '../../fraop/aspects';

describe('FRAOP Aspects', () => {
  it('registers aspects without errors', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    registerAspects();
    expect(consoleSpy).toHaveBeenCalledWith('Aspects registered');
    consoleSpy.mockRestore();
  });
}); 