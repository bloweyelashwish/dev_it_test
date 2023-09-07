const demoData = {
  a: {
    b: {
      c: 12,
      d: 'Hello World',
    },
    e: [1, 2, 3],
  },
};

function mapObject(demoData: Record<string, any>, prefix = '') {
  return Object.entries(demoData).reduce((mappedObj, entry) => {
    const [key, value] = entry;

    if (Object.prototype.toString.call(value) === '[object Object]') {
      mappedObj = { ...mappedObj, ...mapObject(value, `${prefix}${key}/`) };
    } else {
      mappedObj[prefix + key] = value;
    }

    return mappedObj;
  }, {});
}

const resMap = mapObject(demoData);
console.log(resMap);
