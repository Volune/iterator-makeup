import identity from '../helpers/identity';
import property from '../helpers/property';

export default function countBy(keyGetterArg = identity, resultArg = {}) {
  let keyGetter = keyGetterArg;
  const result = resultArg;
  if (typeof keyGetterArg === 'string') {
    keyGetter = value => property(value, keyGetterArg);
  }

  let get;
  let set;
  if (result instanceof Map) {
    get = key => result.get(key);
    set = (key, value) => result.set(key, value);
  } else {
    get = key => result[key];
    set = (key, value) => {
      result[key] = value;
    };
  }

  let index = 0;
  for (const item of this) {
    const key = keyGetter(item, index, this);
    const count = get(key) || 0;
    set(key, count + 1);
    ++index;
  }
}
