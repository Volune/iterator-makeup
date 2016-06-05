import expect from 'must';
import rejectRepetitions from '../../lib/transformers/rejectRepetitions';
import {
  shouldReturnIterable,
} from '../helpers';

describe('rejectRepetitions', () => {
  rejectRepetitions::shouldReturnIterable();

  it('returns expected from [1,2,3]', () => {
    const array = [1, 2, 3];
    const result = array::rejectRepetitions();
    expect([...result]).to.eql([1, 2, 3]);
  });

  it('returns expected from [1,2,2,3,3,3]', () => {
    const array = [1, 2, 2, 3, 3, 3];
    const result = array::rejectRepetitions();
    expect([...result]).to.eql([1, 2, 3]);
  });

  it('returns expected from [undefined, undefined]', () => {
    const array = [undefined, undefined];
    const result = array::rejectRepetitions();
    expect([...result]).to.eql([undefined]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::rejectRepetitions();
    expect([...result]).to.eql([]);
  });
});
