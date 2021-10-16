function tribonacci(n: number): number {
  if (n < 1) {
    return 0;
  }
  const fibos: number[] = [0, 1, 1];
  while (fibos.length <= n) {
    fibos.push(
      fibos[fibos.length - 1] +
        fibos[fibos.length - 2] +
        fibos[fibos.length - 3]
    );
  }
  return fibos[fibos.length - 1];
}
