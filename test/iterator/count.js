import expect from 'must';
import count from '../../lib/iterator/count';

describe('count', () => {
  it('returns expected value from [1,2,3]', () => {
    const array = [1, 2, 3];
    const result = array::count();
    expect(result).to.equal(array.length);
  });

  it('returns expected value from [undefined]', () => {
    const array = [undefined];
    const result = array::count();
    expect(result).to.equal(array.length);
  });

  it('returns expected value from []', () => {
    const array = [];
    const result = array::count();
    expect(result).to.equal(array.length);
  });
});
