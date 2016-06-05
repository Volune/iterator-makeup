const cloneRegExp = regExp => {
  const RegExpClass = (regExp[Symbol.species] || RegExp);
  return new RegExpClass(regExp.source, regExp.flags);
};

function * uncheckedSplitEveryChar() {
  yield* this;
}

function * uncheckedYieldEmptyString() {
  yield '';
}

function * uncheckedSplitByString(separator) {
  const separatorLength = separator.length;
  let start = 0;
  let index = this.indexOf(separator, start);
  while (index >= 0) {
    yield this.substring(start, index);
    start = index + separatorLength;
    index = this.indexOf(separator, start);
  }
  yield this.substring(start);
}

function * uncheckedSplitByRegExp(regExp) {
  let start = 0;
  let match = regExp.exec(this);
  while (match) {
    yield this.substring(start, match.index);
    start = regExp.lastIndex;
    match = regExp.exec(this);
  }
  yield this.substring(start);
}

export default function split(separator) {
  if (this === '') {
    return uncheckedYieldEmptyString();
  }
  if (typeof separator === 'string') {
    if (separator === '') {
      return uncheckedSplitEveryChar.call(this);
    }
    return uncheckedSplitByString.call(this, separator);
  }
  if (separator instanceof RegExp) {
    if (separator.source === '') {
      return uncheckedSplitEveryChar.call(this);
    }
    return uncheckedSplitByRegExp.call(this, cloneRegExp(separator));
  }
  throw new Error('Invalid argument separator');
}
