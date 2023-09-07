const obj = {
  name: 'developer',
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

function objectToArray(object: Record<string, any>) {
  return Object.entries(object).map(([key, value]) => {
    if (typeof value === 'object') {
      return [key, objectToArray(value)];
    }

    return [key, value];
  });
}

const res = objectToArray(obj);
console.log(res);
