export default function * map(operator) {
  let index = 0;
  for (const item of this) {
    yield operator(item, index, this);
    ++index;
  }
}
