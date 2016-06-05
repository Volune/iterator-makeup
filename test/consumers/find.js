import expect from 'must';
import find from '../../lib/consumers/find';
import {
  shouldPassUsualArgumentsTo,
} from '../helpers';

const hasNumbers = value => /\d+/.test(value);

describe('find', () => {
  find::shouldPassUsualArgumentsTo('predicate');

  it('returns expected value', () => {
    const array = ['A', '1', 'B'];
    const result = array::find(hasNumbers);
    expect(result).to.equal('1');
  });

  it('returns expected value', () => {
    const array = ['A', '1', 'B', '2', 'C'];
    const result = array::find(hasNumbers);
    expect(result).to.equal('1');
  });

  it('returns no results', () => {
    const array = ['A', 'B', 'C'];
    const result = array::find(hasNumbers);
    expect(result).to.be.undefined();
  });

  it('returns no results from empty source', () => {
    const array = [];
    const result = array::find(hasNumbers);
    expect(result).to.be.undefined();
  });
});
