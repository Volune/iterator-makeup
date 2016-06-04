export default function * take(n = 1) {
  let remainingToTake = n;
  for (const item of this) {
    if (remainingToTake > 0) {
      --remainingToTake;
      yield item;
    } else {
      break;
    }
  }
}
