export default function *(n = 1) {
  let remainingToDrop = n;
  for (const item of this) {
    if (remainingToDrop > 0) {
      --remainingToDrop;
    } else {
      yield item;
    }
  }
}
