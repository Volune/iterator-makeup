export default function some(predicate) {
  let index = 0;
  for (const item of this) {
    if (predicate(item, index, this)) {
      return true;
    }
    ++index;
  }
  return false;
}
