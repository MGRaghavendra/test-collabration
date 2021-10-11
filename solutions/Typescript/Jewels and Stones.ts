function check(jewel: string, stones: string) {
  let i: number = 0,
    j: number = stones.length - 1,
    count: number = 0;
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
function numJewelsInStones(jewels: string, stones: string): number {
  let i: number = 0,
    j: number = jewels.length - 1,
    count: number = 0;
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
}
