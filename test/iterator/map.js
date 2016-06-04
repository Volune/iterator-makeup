import expect from 'must';
import map from '../../lib/iterator/map';
import {
  returnTrue,
  shouldNotCall,
  shouldPassUsualArgumentsTo,
  shouldReturnIterable,
} from '../helpers';

const toLowerCase = value => value.toLowerCase();

describe('map', () => {
  map::shouldNotCall('operator');
  map::shouldPassUsualArgumentsTo('operator');
  map::shouldReturnIterable();

  it('returns expected number of values', () => {
    const array1 = ['A', 'B', 'C'];
    const result1 = array1::map(returnTrue);
    expect([...result1]).to.have.length(array1.length);
    const array2 = [];
    const result2 = array2::map(returnTrue);
    expect([...result2]).to.have.length(array2.length);
  });

  it('returns expected values', () => {
    const array = ['A', 'B', 'C'];
    const result = array::map(toLowerCase);
    expect([...result]).to.eql(array.map(toLowerCase));
  });
});
