function stoneGame(piles: number[]): boolean {
  piles.sort((a, b) => b - a);
  let i = 0,
    ac = 0,
    bc = 0;
  while (i < piles.length) {
    ac = ac + piles[i];
    bc = bc + piles[i + 1];
    i = i + 2;
  }
  return ac > bc;
}
