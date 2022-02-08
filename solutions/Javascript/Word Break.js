/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function (s, wordDict) {
  return Break(s, 0, wordDict, {});
};

var Break = function (s, pos, words, memo) {
  if (pos === s.length) return true;
  if (memo[pos]) return memo[pos];
  for (let i = pos; i < s.length; i++) {
    if (
      words.indexOf(s.substr(pos, i - pos + 1)) > -1 &&
      Break(s, i + 1, words, memo)
    ) {
      return (memo[pos] = true);
    }
  }
  return (memo[pos] = false);
};
