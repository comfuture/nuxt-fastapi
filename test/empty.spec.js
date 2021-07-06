describe('test', () => {
  it('should passed', () => {
    expect((1 << 1) + (1 << 3) + (1 << 5)).toBe(42)
  })
})
