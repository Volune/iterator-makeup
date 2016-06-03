import expect from 'must';
import reduce from '../../lib/iterator/reduce';

const INIT_VALUE = 'INIT_VALUE';
const RETURNED_VALUE = 'RETURNED_VALUE';
const returnValue = () => RETURNED_VALUE;

describe('reduce', () => {
  it('operator receives arguments (memo, value, key, iterable)', () => {
    const array = ['A'];
    let called = false;
    array::reduce((memo, value, key, iterable) => {
      called = true;
      expect(memo).to.equal(INIT_VALUE);
      expect(value).to.equal(array[0]);
      expect(key).to.equal(0);
      expect(iterable).to.equal(array);
      return undefined;
    }, INIT_VALUE);
    expect(called).to.be.true();
  });

  it('returns expected value', () => {
    const array = ['A'];
    const result = array::reduce(returnValue, INIT_VALUE);
    expect(result).to.equal(RETURNED_VALUE);
  });

  it('returns init value for empty iterable', () => {
    const array = [];
    const result = array::reduce(returnValue, INIT_VALUE);
    expect(result).to.equal(INIT_VALUE);
  });
});
