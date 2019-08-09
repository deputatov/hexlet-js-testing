test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([], 0)).toEqual([]);
  expect(without(['one'], 1)).toEqual(['one']);
  expect(without(['1'])).toEqual(['1']);
});
