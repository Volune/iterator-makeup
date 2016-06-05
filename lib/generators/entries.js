import isIterable from '../helpers/isIterable';

export default function * values() {
  if (this) {
    if (Array.isArray(this)) {
      let index = 0;
      while (index < this.length) {
        yield [index, this[index]];
        ++index;
      }
      return;
    }
    if (typeof this.entries === 'function') {
      yield* this.entries();
      return;
    }
    if (isIterable(this)) {
      let index = 0;
      for (const item of this) {
        yield [index, item];
        ++index;
      }
      return;
    }
    if (typeof this === 'object') {
      // noinspection Eslint
      for (const key in this) {
        if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
          yield [key, this[key]];
        }
      }
      return;
    }
  }
  throw new Error('Cannot iterate entries');
}
