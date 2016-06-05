import isIterable from '../helpers/isIterable';

export default function * merge(...iterables) {
  const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
  if (isIterable(this)) {
    iterators.unshift(this[Symbol.iterator]());
  }
  let iteratorIndex = 0;
  let iteratorsLength = iterators.length;
  while (iteratorIndex < iteratorsLength) {
    const iteration = iterators[iteratorIndex].next();
    if (iteration.done) {
      iterators.splice(iteratorIndex, 1);
      --iteratorsLength;
    } else {
      yield iteration.value;
      ++iteratorIndex;
      if (iteratorIndex >= iteratorsLength) {
        iteratorIndex = 0;
      }
    }
  }
}
