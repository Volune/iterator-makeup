import expect from 'must';
import chunkToArrays from '../../lib/iterator/chunkToArrays';
import {
  shouldReturnIterable,
} from '../helpers';

describe('chunkToArrays', () => {
  chunkToArrays::shouldReturnIterable(1);

  it('returns expected values for [1], size = 1', () => {
    const array = [1];
    const result = array::chunkToArrays(1);
    expect([...result]).to.eql([[1]]);
  });

  it('returns expected values for [1], size = 2', () => {
    const array = [1];
    const result = array::chunkToArrays(2);
    expect([...result]).to.eql([[1]]);
  });

  it('returns expected values for [1,2], size = default (expected 1)', () => {
    const array = [1, 2];
    const result = array::chunkToArrays();
    expect([...result]).to.eql([[1], [2]]);
  });

  it('returns expected values for [1,2], size = 2', () => {
    const array = [1, 2];
    const result = array::chunkToArrays(2);
    expect([...result]).to.eql([[1, 2]]);
  });

  it('returns expected values for [1,2,3,4,5], size = 1', () => {
    const array = [1, 2, 3, 4, 5];
    const result = array::chunkToArrays(1);
    expect([...result]).to.eql([[1], [2], [3], [4], [5]]);
  });

  it('returns expected values for [1,2,3,4,5], size = 2', () => {
    const array = [1, 2, 3, 4, 5];
    const result = array::chunkToArrays(2);
    expect([...result]).to.eql([[1, 2], [3, 4], [5]]);
  });

  it('returns expected values for [1,2,3,4,5,6], size = 2', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = array::chunkToArrays(2);
    expect([...result]).to.eql([[1, 2], [3, 4], [5, 6]]);
  });

  it('returns no values from empty source, size = 1', () => {
    const array = [];
    const result = array::chunkToArrays(1);
    expect([...result]).to.eql([]);
  });

  it('returns no values from empty source, size = 2', () => {
    const array = [];
    const result = array::chunkToArrays(2);
    expect([...result]).to.eql([]);
  });

  it('throws Error for size = 0', () => {
    const array = [];
    expect(chunkToArrays.bind(array, 0)).to.throw(Error);
  });

  it('throws Error for size = "1"', () => {
    const array = [];
    expect(chunkToArrays.bind(array, 'test')).to.throw(Error);
  });
});
