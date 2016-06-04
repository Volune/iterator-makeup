export default function isIterableNotString(value) {
  return Boolean(value)
    && typeof value !== 'string'
    && typeof value[Symbol.iterator] === 'function';
}
