import isIterable from '../helpers/isIterable';
import {
  uncheckedIterableKeys,
  uncheckedObjectKeys,
} from './keys';

function * uncheckedArrayKeysRight() {
  let index = this.length;
  while (index > 0) {
    index -= 1;
    yield index;
  }
}

function * uncheckedOwnKeysRight() {
  yield* this.keysRight();
}

function ownKeysToArray() {
  const result = this.keys();
  if (Array.isArray(result)) {
    return result;
  }
  return [...result];
}

export default function KeysRight() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayKeysRight.call(this);
    }
    if (typeof this.uncheckedOwnKeysRight === 'function') {
      return uncheckedOwnKeysRight.call(this);
    }
    if (typeof this.uncheckedOwnKeys === 'function') {
      return uncheckedArrayKeysRight.call(ownKeysToArray.call(this));
    }
    if (isIterable(this)) {
      return uncheckedArrayKeysRight.call([...uncheckedIterableKeys.call(this)]);
    }
    if (typeof this === 'object') {
      return uncheckedArrayKeysRight.call([...uncheckedObjectKeys.call(this)]);
    }
  }
  throw new Error('Cannot iterate keysRight');
}
