export default function reduce(operator, initMemo) {
  let memo = initMemo;
  let index = 0;
  for (const item of this) {
    memo = operator(memo, item, index, this);
    ++index;
  }
  return memo;
}
