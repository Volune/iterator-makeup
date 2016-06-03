export default function * tap(consumer) {
  let index = 0;
  for (const item of this) {
    consumer(item, index, this);
    yield item;
    ++index;
  }
}
