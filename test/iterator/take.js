import expect from 'must';
import take from '../../lib/iterator/take';
import {
  shouldReturnIterable,
} from '../helpers';

describe('take', () => {
  take::shouldReturnIterable();

  it('returns first value', () => {
    const array = ['A', 'B', 'C'];
    const result = array::take();
    expect([...result]).to.eql(array.slice(0, 1));
  });

  it('returns first two values', () => {
    const array = ['A', 'B', 'C'];
    const result = array::take(2);
    expect([...result]).to.eql(array.slice(0, 2));
  });

  it('returns no values when take nothing', () => {
    const array = ['A', 'B', 'C'];
    const result = array::take(0);
    expect([...result]).to.eql([]);
  });

  it('returns all values when take too much', () => {
    const array = ['A', 'B', 'C'];
    const result = array::take(array.length + 1);
    expect([...result]).to.eql(array);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::take();
    expect([...result]).to.eql([]);
  });
});
