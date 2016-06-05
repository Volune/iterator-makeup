import isIterableButNotString from '../helpers/isIterableButNotString';

export default function * flattenDeep() {
  for (const item of this) {
    if (isIterableButNotString(item)) {
      yield* flattenDeep.call(item);
    } else {
      yield item;
    }
  }
}
