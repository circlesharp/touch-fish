test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
})

test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('the shopping list has beer on it', () => {
  const shoppingList = [ 'beer', 'apple' ];
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

/* Exceptions */
test('compiling android goes as expected', () => {
  const compileAndroidCode = () => {
    throw new Error('fuck');
  };
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);
  expect(compileAndroidCode).toThrow('fuck');
  expect(compileAndroidCode).toThrow(/f*ck/);
});
