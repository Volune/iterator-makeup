import expect from 'must';
import compact from '../../lib/transformers/compact';
import {
  shouldReturnIterable,
} from '../helpers';

describe('compact', () => {
  compact::shouldReturnIterable();

  it('returns expected values [A,B]', () => {
    const array = ['A', null, 'B'];
    const result = array::compact();
    expect([...result]).to.eql(['A', 'B']);
  });

  it('returns expected no values from undefined, null, 0, "", NaN, false', () => {
    const array = [undefined, null, 0, '', NaN, false, 1];
    const result = array::compact();
    expect([...result]).to.eql([1]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::compact();
    expect([...result]).to.eql([]);
  });
});
