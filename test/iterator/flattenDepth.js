import expect from 'must';
import flattenDepth from '../../lib/iterator/flattenDepth';
import {
  shouldReturnIterable,
} from '../helpers';

describe('flattenDepth', () => {
  flattenDepth::shouldReturnIterable();

  it('returns expected from [1, [2, [3, [4, 5]]], depth = -1', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(-1);
    expect([...result]).to.eql([]);
  });

  it('returns expected from [1, [2, [3, [4, 5]]], depth = 0', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(0);
    expect([...result]).to.eql([1, [2, [3, [4, 5]]]]);
  });

  it('returns expected from [1, [2, [3, [4, 5]]], depth = 1', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(1);
    expect([...result]).to.eql([1, 2, [3, [4, 5]]]);
  });

  it('returns expected from [1, [2, [3, [4, 5]]], depth = 2', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql([1, 2, 3, [4, 5]]);
  });

  it('returns expected from [1, [2, [3, [4, 5]]], depth = 3', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(3);
    expect([...result]).to.eql([1, 2, 3, 4, 5]);
  });

  it('returns expected from [1, [2, [3, [4, 5]]], depth = +Infinity', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = array::flattenDepth(+Infinity);
    expect([...result]).to.eql([1, 2, 3, 4, 5]);
  });

  it('returns expected from [1, 2, 3], depth = 2', () => {
    const array = [1, 2, 3];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql([1, 2, 3]);
  });

  it('doesn\'t flatten string in ["abc"], depth = 2', () => {
    const array = ['abc'];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql(array);
  });

  it('doesn\'t flatten string in [[["abc"]]], depth = 2', () => {
    const array = [[['abc']]];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql(['abc']);
  });

  it('returns expected from [undef, [undef, [undef, [undef, undef]]]], depth = 2', () => {
    const array = [undefined, [undefined, [undefined, [undefined, undefined]]]];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql([undefined, undefined, undefined, [undefined, undefined]]);
  });

  it('returns no values from empty source, depth = 2', () => {
    const array = [];
    const result = array::flattenDepth(2);
    expect([...result]).to.eql([]);
  });
});
