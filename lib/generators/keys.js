/* eslint no-restricted-syntax: ["off"] */
import isIterable from '../helpers/isIterable';

function * uncheckedArrayKeys() {
  let index = 0;
  while (index < this.length) {
    yield index;
    ++index;
  }
}

function * uncheckedOwnKeys() {
  yield* this.keys();
}

function * uncheckedIterableKeys() {
  const iterator = this[Symbol.iterator]();
  let index = 0;
  let iteration = iterator.next();
  while (!iteration.done) {
    yield index;
    ++index;
    iteration = iterator.next();
  }
}

function * uncheckedObjectKeys() {
  for (const key in this) {
    if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
      yield key;
    }
  }
}

export default function keys() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayKeys.call(this);
    }
    if (typeof this.values === 'function') {
      return uncheckedOwnKeys.call(this);
    }
    if (isIterable(this)) {
      return uncheckedIterableKeys.call(this);
    }
    if (typeof this === 'object') {
      return uncheckedObjectKeys.call(this);
    }
  }
  throw new Error('Cannot iterate keys');
}
