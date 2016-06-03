import expect from 'must';
import tap from '../../lib/iterator/tap';
import { consume, returnTrue } from '../helpers';

describe('tap', () => {
  it('doesn\'t call consumer if not consumed', () => {
    const array = ['A'];
    let called = false;
    array::tap(() => {
      called = true;
    });
    expect(called).to.be.false();
  });

  it('consumer receives arguments (value, key, iterable)', () => {
    const array = ['A'];
    let called = false;
    const iterator = array::tap((value, key, iterable) => {
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
    const result = array::tap(returnTrue);
    expect(Symbol.iterator in result).to.be.true();
  });

  it('calls consumer expected number of times', () => {
    const array1 = ['A', 'B', 'C'];
    let count1 = 0;
    const iterator1 = array1::tap(() => ++count1);
    consume(iterator1);
    expect(count1).to.equal(array1.length);

    const array2 = [];
    let count2 = 0;
    const iterator2 = array2::tap(() => ++count2);
    consume(iterator2);
    expect(count2).to.equal(array2.length);
  });

  it('ignores return value of consumer', () => {
    const array = ['A', 'B'];
    // returns true the first call, false the second call
    const result = array::tap(value => value === array[0]);
    expect([...result]).to.eql(array);
  });
});
