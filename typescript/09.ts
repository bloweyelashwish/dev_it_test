function add(a: number) {
  let sum = a;

  function inner(b: number) {
    sum += b;
    return inner;
  }

  Object.assign(inner, {
    valueOf: () => sum,
  });
  return inner;
}

const sumRes = add(1)(6)(100);
console.log(Number(sumRes));
