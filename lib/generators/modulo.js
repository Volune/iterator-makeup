export default function * modulo(modulus, repeatCount = modulus, offset = 0) {
  let remainingCount = repeatCount;
  if (remainingCount < 0) {
    remainingCount = +Infinity;
  }
  const endValue = modulus + offset;
  let currentValue = offset;
  while (remainingCount > 0) {
    yield currentValue;
    ++currentValue;
    --remainingCount;
    if (currentValue >= endValue) {
      currentValue = offset;
    }
  }
}
