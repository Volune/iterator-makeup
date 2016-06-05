export default function property(value, propertyName) {
  return value !== null && value !== undefined ? value[propertyName] : undefined;
}
