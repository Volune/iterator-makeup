export default function forEach(consumer) {
  let index = 0;
  for (const item of this) {
    consumer(item, index, this);
    ++index;
  }
}
