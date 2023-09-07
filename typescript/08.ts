function combos(target) {
  const resultingSets: number[][] = [];

  function collectSets(reducedInt, currSet, startInt = 1) {
    if (reducedInt < 0) {
      return;
    }

    if (reducedInt === 0) {
      resultingSets.push([...currSet]);
      return;
    }

    for (let i = startInt; i <= reducedInt; i++) {
      currSet.push(i);
      collectSets(reducedInt - i, currSet, i);
      currSet.pop();
    }
  }

  collectSets(target, []);
  return resultingSets;
}

const sets = combos(10);
console.log(sets);
