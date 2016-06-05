import isIterable from '../helpers/isIterable';
import {
  uncheckedIterableEntries,
  uncheckedObjectEntries,
} from './entries';

function * uncheckedArrayEntriesRight() {
  let index = this.length;
  while (index > 0) {
    index -= 1;
    yield [index, this[index]];
  }
}

function * uncheckedOwnEntriesRight() {
  yield* this.entriesRight();
}

function ownEntriesToArray() {
  const result = this.entries();
  if (Array.isArray(result)) {
    return result;
  }
  return [...result];
}

export default function EntriesRight() {
  if (this) {
    if (Array.isArray(this)) {
      return uncheckedArrayEntriesRight.call(this);
    }
    if (typeof this.uncheckedOwnEntriesRight === 'function') {
      return uncheckedOwnEntriesRight.call(this);
    }
    if (typeof this.uncheckedOwnEntries === 'function') {
      return uncheckedArrayEntriesRight.call(ownEntriesToArray.call(this));
    }
    if (isIterable(this)) {
      return uncheckedArrayEntriesRight.call([...uncheckedIterableEntries.call(this)]);
    }
    if (typeof this === 'object') {
      return uncheckedArrayEntriesRight.call([...uncheckedObjectEntries.call(this)]);
    }
  }
  throw new Error('Cannot iterate entriesRight');
}
