function titleToNumber(columnTitle: string): number {
  let dict = {};
  for (let i = 65; i < 65 + 26; i++) {
    dict[String.fromCharCode(i)] = i - 65 + 1;
  }
  let pow = columnTitle.length - 1;
  let s = 0;
  for (let i = 0; i < columnTitle.length; i++)
    s = s + Math.pow(26, pow--) * dict[columnTitle[i]];
  return s;
}
