import { describe, test, expect } from 'vitest'

describe('test', () => {
  test('should passed', () => {
    expect((1 << 1) + (1 << 3) + (1 << 5)).toBe(42)
  })
})
