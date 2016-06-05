import isIterable from '../helpers/isIterable';

export default function * values() {
  if (this) {
    if (Array.isArray(this)) {
      yield* this;
      return;
    }
    if (typeof this.values === 'function') {
      yield* this.values();
      return;
    }
    if (isIterable(this)) {
      yield* this;
      return;
    }
    if (typeof this === 'object') {
      // noinspection Eslint
      for (const key in this) {
        if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
          yield this[key];
        }
      }
      return;
    }
  }
  throw new Error('Cannot iterate values');
}
