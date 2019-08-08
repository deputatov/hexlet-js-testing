assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 5), [1, 2, 3]);
assert.deepEqual(take([1, 2, 3], 0), []);