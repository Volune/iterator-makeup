import expect from 'must';
import flatten from '../../lib/iterator/flatten';
import {
  shouldReturnIterable,
} from '../helpers';

describe('filter', () => {
  flatten::shouldReturnIterable();

  it('returns expected from [1, [2, [3, 4]]]', () => {
    const array = [1, [2, [3, 4]]];
    const result = array::flatten();
    expect([...result]).to.eql([1, 2, [3, 4]]);
  });

  it('returns expected from [1, 2, 3]', () => {
    const array = [1, 2, 3];
    const result = array::flatten();
    expect([...result]).to.eql([1, 2, 3]);
  });

  it('doesn\'t flatten string in ["abc"]', () => {
    const array = ['abc'];
    const result = array::flatten();
    expect([...result]).to.eql(array);
  });

  it('returns expected from [undefined, [undefined, [undefined, undefined]]]', () => {
    const array = [undefined, [undefined, [undefined, undefined]]];
    const result = array::flatten();
    expect([...result]).to.eql([undefined, undefined, [undefined, undefined]]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::flatten();
    expect([...result]).to.eql([]);
  });
});
