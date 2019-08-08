if (get({}, null) !== undefined) {
  throw new Error('boom!');
}
if (get({}, null, null) !== null) {
  throw new Error('boom!');
}