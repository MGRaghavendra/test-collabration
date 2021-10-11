function check(jewel, stones) {
  let i = 0,
    j = stones.length - 1,
    count = 0;
  while (i <= j) {
    if (i === j) {
      if (stones[i] === jewel) count = count + 1;
    } else {
      if (stones[i] === jewel) count = count + 1;
      if (stones[j] === jewel) count = count + 1;
    }
    i = i + 1;
    j = j - 1;
  }
  return count;
}
var numJewelsInStones = function (jewels, stones) {
  let i = 0,
    j = jewels.length - 1,
    count = 0;
  while (i <= j) {
    if (i === j) count = count + check(jewels[i], stones);
    else {
      count = count + check(jewels[i], stones);
      count = count + check(jewels[j], stones);
    }
    i = i + 1;
    j = j - 1;
  }
  return count;
};
