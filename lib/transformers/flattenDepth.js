import flatten from './flatten';
import flattenDeep from './flattenDeep';
import isIterableButNotString from '../helpers/isIterableButNotString';

export default function * flattenDepth(n = 1) {
  if (n === 1) {
    yield* flatten.call(this);
  } else if (n >= +Infinity) {
    yield* flattenDeep.call(this);
  } else if (n === 0) {
    yield* this;
  } else if (n > 0) {
    for (const item of this) {
      if (isIterableButNotString(item)) {
        yield* flattenDepth.call(item, n - 1);
      } else {
        yield item;
      }
    }
  }
}
