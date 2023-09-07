const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

type BulkRunCb = <T>(...args: T[]) => void;
async function bulkRun(
  fnArray: [BulkRunCb, Parameters<BulkRunCb>][]
): Promise<any[]> {
  const tasks = fnArray.map((tuple) => {
    const [fn, args] = tuple;

    return new Promise((resolve) => {
      fn(...args, (result) => {
        resolve(result);
      });
    });
  });

  const results = await Promise.all(tasks);
  return results;
}

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
