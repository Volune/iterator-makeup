import expect from 'must';
import filter from '../../lib/iterator/filter';
import { consume, returnTrue } from '../helpers';

const hasNumbers = value => /\d+/.test(value);

describe('filter', () => {
  it('doesn\'t call predicate if not consumed', () => {
    const array = ['A'];
    let called = false;
    array::filter(() => {
      called = true;
    });
    expect(called).to.be.false();
  });

  it('predicate receives arguments (value, key, iterable)', () => {
    const array = ['A'];
    let called = false;
    const iterator = array::filter((value, key, iterable) => {
      called = true;
      expect(value).to.equal(array[0]);
      expect(key).to.equal(0);
      expect(iterable).to.equal(array);
    });
    consume(iterator);
    expect(called).to.be.true();
  });

  it('returns iterable', () => {
    const array = ['A', '1', 'B'];
    const result = array::filter(returnTrue);
    expect(Symbol.iterator in result).to.be.true();
  });

  it('returns expected values [1]', () => {
    const array = ['A', '1', 'B'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql(['1']);
  });

  it('returns expected values [1,2]', () => {
    const array = ['A', '1', 'B', '2', 'C'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql(['1', '2']);
  });

  it('returns no values', () => {
    const array = ['A', 'B', 'C'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql([]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql([]);
  });
});
