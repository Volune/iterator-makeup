import isIterable from '../helpers/isIterable';

export default function * values() {
  if (this) {
    if (Array.isArray(this)) {
      let index = 0;
      while (index < this.length) {
        yield index;
        ++index;
      }
      return;
    }
    if (typeof this.keys === 'function') {
      yield* this.keys();
      return;
    }
    if (isIterable(this)) {
      const iterator = this[Symbol.iterator]();
      let index = 0;
      let iteration = iterator.next();
      while (!iteration.done) {
        yield index;
        ++index;
        iteration = iterator.next();
      }
      return;
    }
    if (typeof this === 'object') {
      // noinspection Eslint
      for (const key in this) {
        if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
          yield key;
        }
      }
      return;
    }
  }
  throw new Error('Cannot iterate keys');
}
