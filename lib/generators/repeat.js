export default function * repeat(item, repeatCount = 1) {
  let remainingCount = repeatCount;
  if (remainingCount < 0) {
    remainingCount = +Infinity;
  }
  while (remainingCount > 0) {
    yield item;
    --remainingCount;
  }
}
