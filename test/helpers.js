import expect from 'must';
import isIterableButNotString from '../lib/helpers/isIterableButNotString';

export const consume = iterable => [...iterable];
export const returnTrue = () => true;

export function shouldNotCall(name) {
  const func = this;
  it(`doesn\'t call ${name} if not consumed`, () => {
    const array = ['A'];
    let called = false;
    array::func(() => {
      called = true;
    });
    expect(called).to.be.false();
  });
}

export function shouldPassUsualArgumentsTo(name) {
  const func = this;
  it(`passes arguments (value, key, iterable) to ${name}`, () => {
    const array = ['A'];
    let called = false;
    const result = array::func((value, key, iterable) => {
      called = true;
      expect(value).to.equal(array[0]);
      expect(key).to.equal(0);
      expect(iterable).to.equal(array);
    });
    if (isIterableButNotString(result)) {
      consume(result);
    }
    expect(called).to.be.true();
  });
}

export function shouldReturnIterable(firstArg = returnTrue, ...args) {
  const func = this;
  it('returns iterable', () => {
    const array = ['A', '1', 'B'];
    const result = array::func(firstArg, ...args);
    expect(isIterableButNotString(result)).to.be.true();
  });
}
