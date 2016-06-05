import expect from 'must';
import drop from '../../lib/transformers/drop';
import {
  shouldReturnIterable,
} from '../helpers';

describe('drop', () => {
  drop::shouldReturnIterable();

  it('returns all values except first', () => {
    const array = ['A', 'B', 'C'];
    const result = array::drop();
    expect([...result]).to.eql(array.slice(1));
  });

  it('returns all values when drop nothing', () => {
    const array = ['A', 'B', 'C'];
    const result = array::drop(0);
    expect([...result]).to.eql(array);
  });

  it('returns no values when drop too much', () => {
    const array = ['A', 'B', 'C'];
    const result = array::drop(array.length + 1);
    expect([...result]).to.eql([]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::drop();
    expect([...result]).to.eql([]);
  });
});
