export default function isIterable(value) {
  return Boolean(value)
    && typeof value[Symbol.iterator] === 'function';
}
