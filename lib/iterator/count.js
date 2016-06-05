export default function count() {
  let result = 0;
  const iterator = this[Symbol.iterator]();
  while (!iterator.next().done) {
    ++result;
  }
  return result;
}
