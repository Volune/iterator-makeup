import expect from 'must';
import find from '../../lib/iterator/find';

const hasNumbers = value => /\d+/.test(value);

describe('find', () => {
  it('predicate receives arguments (value, key, iterable)', () => {
    const array = ['A'];
    array::find((value, key, iterable) => {
      expect(value).to.equal(array[0]);
      expect(key).to.equal(0);
      expect(iterable).to.equal(array);
    });
  });

  it('returns expected value', () => {
    const array = ['A', '1', 'B'];
    const result = array::find(hasNumbers);
    expect(result).to.equal('1');
  });

  it('returns expected value', () => {
    const array = ['A', '1', 'B', '2', 'C'];
    const result = array::find(hasNumbers);
    expect(result).to.equal('1');
  });

  it('returns no results', () => {
    const array = ['A', 'B', 'C'];
    const result = array::find(hasNumbers);
    expect(result).to.be.undefined();
  });

  it('returns no results from empty source', () => {
    const array = [];
    const result = array::find(hasNumbers);
    expect(result).to.be.undefined();
  });
});
