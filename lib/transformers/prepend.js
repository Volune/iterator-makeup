export default function * prepend(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
  yield* this;
}
