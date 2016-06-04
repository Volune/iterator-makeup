const PRIVATE_OBJECT = {}; // this object will not match any provided item

export default function * rejectRepetitions() {
  let previousItem = PRIVATE_OBJECT;
  for (const item of this) {
    if (previousItem !== item) {
      previousItem = item;
      yield item;
    }
  }
}
