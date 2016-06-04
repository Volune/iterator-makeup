import expect from 'must';
import flattenDeep from '../../lib/iterator/flattenDeep';
import {
  shouldReturnIterable,
} from '../helpers';

describe('filter', () => {
  flattenDeep::shouldReturnIterable();

  it('returns expected from [1, [2, [3, [4, 5]]]', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDeep();
    expect([...result]).to.eql([1, 2, 3, 4, 5]);
  });

  it('returns expected from [1, 2, 3]', () => {
    const array = [1, 2, 3];
    const result = array::flattenDeep();
    expect([...result]).to.eql([1, 2, 3]);
  });

  it('doesn\'t flatten string in ["abc"]', () => {
    const array = ['abc'];
    const result = array::flattenDeep();
    expect([...result]).to.eql(array);
  });

  it('doesn\'t flatten string in [["abc"]]', () => {
    const array = [['abc']];
    const result = array::flattenDeep();
    expect([...result]).to.eql(['abc']);
  });

  it('returns expected from [undefined, [undefined, [undefined, [undefined, undefined]]]]', () => {
    const array = [undefined, [undefined, [undefined, [undefined, undefined]]]];
    const result = array::flattenDeep();
    expect([...result]).to.eql([undefined, undefined, undefined, undefined, undefined]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::flattenDeep();
    expect([...result]).to.eql([]);
  });
});
