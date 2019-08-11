test('Checking basic functionality', () => {
  const validator = new Validator();
  expect(validator.isValid('some value')).toBe(true);
  validator.addCheck(v => v > 5);
  expect(validator.isValid(8)).toBe(true);
  expect(validator.isValid(3)).toBe(false);
});

test('Checking for an empty argument', () => {
  const validator = new Validator();
  expect(validator.isValid()).toBe(true);
});

test('Check for multiple checks', () => {
  const validator = new Validator();
  validator.addCheck(_.isNumber);
  validator.addCheck(v => v < 5);
  validator.addCheck(v => v < 4);
  validator.addCheck(v => v < 3);
  expect(validator.isValid(2)).toBe(true);
  expect(validator.isValid(0)).toBe(true);
});