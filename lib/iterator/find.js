export default function find(predicate) {
  let index = 0;
  for (const item of this) {
    if (predicate(item, index, this)) {
      return item;
    }
    ++index;
  }
  return undefined;
}
