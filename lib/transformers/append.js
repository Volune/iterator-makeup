export default function * append(...iterables) {
  yield* this;
  for (const iterable of iterables) {
    yield* iterable;
  }
}
