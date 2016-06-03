import expect from 'must';
import forEach from '../../lib/iterator/forEach';

const noop = () => true;

describe('forEach', () => {
  it('consumer receives arguments (value, key, iterable)', () => {
    const array = ['A'];
    array::forEach((value, key, iterable) => {
      expect(value).to.equal(array[0]);
      expect(key).to.equal(0);
      expect(iterable).to.equal(array);
    });
  });

  it('returns undefined', () => {
    const array1 = ['A', '1', 'B'];
    const result1 = array1::forEach(noop);
    expect(result1).to.be.undefined();
    const array2 = [];
    const result2 = array2::forEach(noop);
    expect(result2).to.be.undefined();
  });

  it('consumer called for each value', () => {
    const array = ['A', null, 'B', undefined, 'C', false, 'D', 0, 'E', '', 'F'];
    let callsCount = 0;
    array::forEach(() => ++callsCount);
    expect(callsCount).to.equal(array.length);
  });
});
