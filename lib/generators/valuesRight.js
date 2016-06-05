import isIterable from '../helpers/isIterable';
import {
  uncheckedIterableValues,
  uncheckedObjectValues,
} from './values';

function * uncheckedArrayValuesRight() {
  let index = this.length;
  while (index > 0) {
    index -= 1;
    yield this[index];
  }
}

function * uncheckedOwnValuesRight() {
  yield* this.valuesRight();
}

function ownValuesToArray() {
  const result = this.values();
  if (Array.isArray(result)) {
    return result;
  }
  return [...result];
}

export default function valuesRight() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayValuesRight.call(this);
    }
    if (typeof this.uncheckedOwnValuesRight === 'function') {
      return uncheckedOwnValuesRight.call(this);
    }
    if (typeof this.uncheckedOwnValues === 'function') {
      return uncheckedArrayValuesRight.call(ownValuesToArray.call(this));
    }
    if (isIterable(this)) {
      return uncheckedArrayValuesRight.call([...uncheckedIterableValues.call(this)]);
    }
    if (typeof this === 'object') {
      return uncheckedArrayValuesRight.call([...uncheckedObjectValues.call(this)]);
    }
  }
  throw new Error('Cannot iterate values');
}
