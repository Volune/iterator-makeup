/* eslint no-restricted-syntax: ["off"] */
import isIterable from '../helpers/isIterable';

function * uncheckedArrayValues() {
  yield* this;
}

function * uncheckedOwnValues() {
  yield* this.values();
}

function * uncheckedIterableValues() {
  yield* this;
}

function * uncheckedObjectValues() {
  for (const key in this) {
    if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
      yield this[key];
    }
  }
}

export default function values() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayValues.call(this);
    }
    if (typeof this.values === 'function') {
      return uncheckedOwnValues.call(this);
    }
    if (isIterable(this)) {
      return uncheckedIterableValues.call(this);
    }
    if (typeof this === 'object') {
      return uncheckedObjectValues.call(this);
    }
  }
  throw new Error('Cannot iterate values');
}
