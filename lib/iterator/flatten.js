import isIterableButNotString from '../helpers/isIterableButNotString';

export default function * flatten() {
  for (const item of this) {
    if (isIterableButNotString(item)) {
      yield* item;
    } else {
      yield item;
    }
  }
}
