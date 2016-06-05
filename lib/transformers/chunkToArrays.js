function * uncheckedChunkToArrays(size) {
  const iterator = this[Symbol.iterator]();
  let index;
  let iteration = iterator.next();
  while (!iteration.done) {
    const array = new Array(size);
    array[0] = iteration.value;
    index = 1;
    while (index < size) {
      iteration = iterator.next();
      if (iteration.done) {
        array.length = index;
        break;
      }
      array[index] = iteration.value;
      ++index;
    }
    yield array;
    if (!iteration.done) {
      iteration = iterator.next();
    }
  }
}

export default function chunkToArrays(size = 1) {
  // size should be a positive integer
  if (size !== (size | 0) || size <= 0) {
    throw new Error(`Invalid argument size=${size}`);
  }

  return uncheckedChunkToArrays.call(this, size);
}
