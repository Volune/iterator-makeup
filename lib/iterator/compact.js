export default function *() {
  for (const item of this) {
    if (item) {
      yield item;
    }
  }
}
