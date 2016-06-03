import expect from 'must';
import map from '../../lib/iterator/map';

const consume = iterator => [...iterator];
const returnTrue = () => true;
const toLowerCase = value => value.toLowerCase();

describe('map', () => {
  it('doesn\'t call operator if not consumed', () => {
    const array = ['A'];
    let called = false;
    array::map(() => {
      called = true;
    });
    expect(called).to.be.false();
  });

  it('operator receives arguments (value, key, iterable)', () => {
    const array = ['A'];
    let called = false;
    const iterator = array::map((value, key, iterable) => {
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
    const result = array::map(returnTrue);
    expect(Symbol.iterator in result).to.be.true();
  });

  it('returns expected number of values', () => {
    const array1 = ['A', 'B', 'C'];
    const result1 = array1::map(returnTrue);
    expect([...result1]).to.have.length(array1.length);
    const array2 = [];
    const result2 = array2::map(returnTrue);
    expect([...result2]).to.have.length(array2.length);
  });

  it('returns expected values', () => {
    const array = ['A', 'B', 'C'];
    const result = array::map(toLowerCase);
    expect([...result]).to.eql(array.map(toLowerCase));
  });
});
