export default function * unshift(...args) {
  yield* args;
  yield* this;
}
