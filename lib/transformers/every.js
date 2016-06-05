export default function every(predicate) {
  let index = 0;
  for (const item of this) {
    if (!predicate(item, index, this)) {
      return false;
    }
    ++index;
  }
  return true;
}
