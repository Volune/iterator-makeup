import expect from 'must';
import tap from '../../lib/transformers/tap';
import {
  consume,
  shouldNotCall,
  shouldPassUsualArgumentsTo,
  shouldReturnIterable,
} from '../helpers';

describe('tap', () => {
  tap::shouldNotCall('consumer');
  tap::shouldPassUsualArgumentsTo('consumer');
  tap::shouldReturnIterable();

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
