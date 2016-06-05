export default function * push(...args) {
  yield* this;
  yield* args;
}
