const arr = [
  ['name', 'developer'],
  ['age', 5],
  [
    'skills',
    [
      ['html', 4],
      ['css', 5],
      ['js', 5],
    ],
  ],
];

function arrayToObject(arr: any[]): Record<string, any> {
  return arr.reduce((conversionResult, row) => {
    const [key, value] = row;

    if (Array.isArray(value)) {
      conversionResult[key] = arrayToObject(value);
    } else {
      conversionResult[key] = value;
    }

    return conversionResult;
  }, {});
}

const result = arrayToObject(arr);
console.log(result);
