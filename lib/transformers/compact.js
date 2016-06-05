export default function * compact() {
  for (const item of this) {
    if (item) {
      yield item;
    }
  }
}
