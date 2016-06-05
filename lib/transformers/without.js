export default function * without(...rejectedValues) {
  if (rejectedValues.length === 0) {
    yield* this;
  } else if (rejectedValues.length === 1) {
    // don't use Set optimisation for one value
    let index = 0;
    const rejectedValue = rejectedValues[0];
    for (const item of this) {
      if (item !== rejectedValue) {
        yield item;
      }
      ++index;
    }
  } else {
    let index = 0;
    const rejectedValuesSet = new Set(rejectedValues);
    for (const item of this) {
      if (rejectedValuesSet.has(item)) {
        yield item;
      }
      ++index;
    }
  }
}
