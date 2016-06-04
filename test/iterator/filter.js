import expect from 'must';
import filter from '../../lib/iterator/filter';
import {
  shouldNotCall,
  shouldPassUsualArgumentsTo,
  shouldReturnIterable,
} from '../helpers';

const hasNumbers = value => /\d+/.test(value);

describe('filter', () => {
  filter::shouldNotCall('predicate');
  filter::shouldPassUsualArgumentsTo('predicate');
  filter::shouldReturnIterable();

  it('returns expected values [1]', () => {
    const array = ['A', '1', 'B'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql(['1']);
  });

  it('returns expected values [1,2]', () => {
    const array = ['A', '1', 'B', '2', 'C'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql(['1', '2']);
  });

  it('returns no values', () => {
    const array = ['A', 'B', 'C'];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql([]);
  });

  it('returns no values from empty source', () => {
    const array = [];
    const result = array::filter(hasNumbers);
    expect([...result]).to.eql([]);
  });
});
