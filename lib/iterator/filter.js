export default function * filter(predicate) {
  let index = 0;
  for (const item of this) {
    if (predicate(item, index, this)) {
      yield item;
    }
    ++index;
  }
}
