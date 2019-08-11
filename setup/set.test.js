let data;
let dataCopy;

beforeEach(() => {
  data = { a: [{ b: { c: 3 } }] };
  dataCopy = cloneDeep(data);
});

test('Plain set', () => {
  set(data, 'a', 3);
  dataCopy.a = 3;
  expect(data).toEqual(dataCopy);
});

test('Nested set', () => {
  set(data, 'a[0].b.c', 4);
  dataCopy.a[0].b.c = 4;
  expect(data).toEqual(dataCopy);
});

test('New property', () => {
  set(data, 'a[0].b.d', 4);
  dataCopy.a[0].b.d = 4;
  expect(data).toEqual(dataCopy);
});
