let item1;
let item2;
let items;

beforeEach(() => {
  item1 = { name: 'car', price: 3 };
  item2 = { name: 'house', price: 10 };
  items = [{ count: 5, good: item1 }, { count: 2, good: item2 }];
});

test('Checking basic functionality Cart', () => {
  const cart = new Cart();
  cart.addItem(item1, 5);
  cart.addItem(item2, 2);
  expect(cart.getItems()).toEqual(items);
  expect(cart.getCount()).toEqual(7);
  expect(cart.getCost()).toEqual(35);
});

// Teacher's solution
// test('Cart', () => {
//   const cart = new Cart();
//   expect(cart.getItems()).toHaveLength(0);

//   cart.addItem({ name: 'car', price: 3 }, 5);
//   expect(cart.getItems()).toHaveLength(1);
//   expect(cart.getCost()).toBe(15);
//   expect(cart.getCount()).toBe(5);

//   cart.addItem({ name: 'house', price: 10 }, 2);
//   expect(cart.getItems()).toHaveLength(2);
//   expect(cart.getCost()).toBe(35);
//   expect(cart.getCount()).toBe(7);
// });