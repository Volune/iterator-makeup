export default function * zip(...iterables) {
  const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
  let undoneIteratorsCount = iterators.length;
  const nextIteration = (iterator, index) => {
    if (!iterator) {
      return undefined;
    }
    const iteration = iterator.next();
    if (iteration.done) {
      iterators.splice(index, 1, null);
      --undoneIteratorsCount;
      return undefined;
    }
    return iteration.value;
  };
  if (undoneIteratorsCount <= 0) {
    return;
  }
  for (; ;) {
    const values = iterators.map(nextIteration);
    if (undoneIteratorsCount <= 0) {
      return;
    }
    yield values;
  }
}
