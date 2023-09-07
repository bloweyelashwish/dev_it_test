const isObject = (obj: object | null) => obj && typeof obj === 'object';

function deepEqual(expected: object, given: object): boolean {
  const expectedKeys = Object.keys(expected);
  const givenKeys = Object.keys(given);

  if (expectedKeys.length !== givenKeys.length) {
    return false;
  }

  for (const key of expectedKeys) {
    const expectedVal = expected[key];
    const givenVal = given[key];

    if (isObject(expectedVal) && isObject(givenVal)) {
      return deepEqual(expectedVal, givenVal);
    }

    if (expectedVal !== givenVal) {
      return false;
    }
  }

  return true;
}

console.assert(deepEqual({ name: 'test' }, { name: 'test' }));
console.assert(deepEqual({ name: 'test' }, { name: 'test1' }));
console.assert(
  deepEqual(
    { name: 'test', data: { value: 1 } },
    { name: 'test', data: { value: 2 } }
  )
);
console.assert(deepEqual({ name: 'test' }, { name: 'test', age: 10 }));
