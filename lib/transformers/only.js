export default function * only(...expectedValues) {
  if (expectedValues.length > 0) {
    if (expectedValues.length === 1) {
      // don't use Set optimisation for one value
      let index = 0;
      const expectedValue = expectedValues[0];
      for (const item of this) {
        if (item === expectedValue) {
          yield item;
        }
        ++index;
      }
    } else {
      let index = 0;
      const expectedValuesSet = new Set(expectedValues);
      for (const item of this) {
        if (expectedValuesSet.has(item)) {
          yield item;
        }
        ++index;
      }
    }
  }
}
