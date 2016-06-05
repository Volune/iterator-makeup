import property from '../helpers/property';

export default function * pluck(propertyName) {
  for (const item of this) {
    yield property(item, propertyName);
  }
}
