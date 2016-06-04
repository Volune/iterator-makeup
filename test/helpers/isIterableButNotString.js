import expect from 'must';
import isIterableButNotString from '../../lib/helpers/isIterableButNotString';

function * generator() {
  // do nothing
}

function noop() {
  // do nothing
}

describe('isIterableButNotString', () => {
  it('returns false for undefined', () => {
    expect(isIterableButNotString(undefined)).to.be.false();
  });
  it('returns false for null', () => {
    expect(isIterableButNotString(null)).to.be.false();
  });
  it('returns false for 0', () => {
    expect(isIterableButNotString(0)).to.be.false();
  });
  it('returns false for 1', () => {
    expect(isIterableButNotString(1)).to.be.false();
  });
  it('returns false for +Infinity', () => {
    expect(isIterableButNotString(+Infinity)).to.be.false();
  });
  it('returns false for NaN', () => {
    expect(isIterableButNotString(NaN)).to.be.false();
  });
  it('returns false for false', () => {
    expect(isIterableButNotString(false)).to.be.false();
  });
  it('returns false for true', () => {
    expect(isIterableButNotString(true)).to.be.false();
  });
  it('returns false for ""', () => {
    expect(isIterableButNotString('')).to.be.false();
  });
  it('returns false for "A"', () => {
    expect(isIterableButNotString('A')).to.be.false();
  });
  it('returns false for "AB"', () => {
    expect(isIterableButNotString('AB')).to.be.false();
  });
  it('returns false for {}', () => {
    expect(isIterableButNotString({})).to.be.false();
  });
  it('returns false for {[@@iterator]:{}}', () => {
    expect(isIterableButNotString({ [Symbol.iterator]: {} })).to.be.false();
  });
  it('returns true for []', () => {
    expect(isIterableButNotString([])).to.be.true();
  });
  it('returns true for [1,2]', () => {
    expect(isIterableButNotString([1, 2])).to.be.true();
  });
  it('returns true for generator()', () => {
    expect(isIterableButNotString(generator())).to.be.true();
  });
  it('returns true for {[@@iterator]:noop}', () => {
    expect(isIterableButNotString({ [Symbol.iterator]: noop })).to.be.true();
  });
});
