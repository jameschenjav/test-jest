describe('test', () => {
  it('should pass', () => {
    expect(1).toBe(1);
  });

  it('should fail', async () => {
    await page.goto('https://github.com/');
    await expect(await page.title()).toBe('Google');
  });
});
