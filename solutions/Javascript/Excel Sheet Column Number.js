/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let dict = {};
  for (let i = 65; i < 65 + 26; i++) {
    dict[String.fromCharCode(i)] = i - 65 + 1;
  }
  pow = columnTitle.length - 1;
  s = 0;
  for (let i = 0; i < columnTitle.length; i++)
    s = s + Math.pow(26, pow--) * dict[columnTitle[i]];
  return s;
};

/*

1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y Z

27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52
AA AB AC AD AE AF AG AH AI AJ AK AL AM AN AO AP AQ AR AS AT AU AV AW AX AY AZ

53 54 55 56 57 58 59 60 61 62 53 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78
BA BB BC BD BE BF BG BH BI BJ BK BL BM BN BO BP BQ BR BS BT BU BV BW BX BY BZ

*/
