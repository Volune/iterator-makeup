/* eslint no-restricted-syntax: ["off"] */
import isIterable from '../helpers/isIterable';

function * uncheckedArrayEntries() {
  let index = 0;
  while (index < this.length) {
    yield [index, this[index]];
    ++index;
  }
}

function * uncheckedOwnEntries() {
  yield* this.entries();
}

function * uncheckedIterableEntries() {
  let index = 0;
  for (const item of this) {
    yield [index, item];
    ++index;
  }
}

function * uncheckedObjectEntries() {
  for (const key in this) {
    if (this.hasOwnProperty(key) && this.propertyIsEnumerable(key)) {
      yield [key, this[key]];
    }
  }
}

export default function entries() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayEntries.call(this);
    }
    if (typeof this.values === 'function') {
      return uncheckedOwnEntries.call(this);
    }
    if (isIterable(this)) {
      return uncheckedIterableEntries.call(this);
    }
    if (typeof this === 'object') {
      return uncheckedObjectEntries.call(this);
    }
  }
  throw new Error('Cannot iterate entries');
}
