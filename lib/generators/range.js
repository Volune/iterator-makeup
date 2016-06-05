export default function * range(start = 0, end, step = 1) {
  for (let item = start; item < end; item += step) {
    yield item;
  }
}
