function subtractProductAndSum(n: number): number {
  let pnum: number = n,
    snum: number = n,
    p: number = 1,
    s: number = 0;
  while (pnum > 0) {
    p = p * (pnum % 10);
    pnum = Math.floor(pnum / 10);
  }
  while (snum > 0) {
    s = s + (snum % 10);
    snum = Math.floor(snum / 10);
  }
  return p - s;
}
