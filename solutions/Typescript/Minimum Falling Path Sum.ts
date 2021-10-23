function minmum(
  a: number | undefined = undefined,
  b: number | undefined = undefined,
  c: number | undefined = undefined
): number {
  if (c === undefined) return a < b ? a : b;
  if (a < b && a < c) return a;
  else if (b < c) return b;
  else return c;
}

function minFallingPathSum(matrix: number[][]): number {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j == 0)
        matrix[i][j] =
          matrix[i][j] + minmum(matrix[i - 1][j], matrix[i - 1][j + 1]);
      else if (j < matrix.length - 1)
        matrix[i][j] =
          matrix[i][j] +
          minmum(matrix[i - 1][j], matrix[i - 1][j + 1], matrix[i - 1][j - 1]);
      else
        matrix[i][j] =
          matrix[i][j] + minmum(matrix[i - 1][j], matrix[i - 1][j - 1]);
    }
  }
  let pathSums: number[] = matrix[matrix.length - 1],
    minSum: number = pathSums[0],
    i: number = 0,
    j: number = pathSums.length - 1;
  while (i <= j) {
    if (minSum > pathSums[i]) {
      minSum = pathSums[i];
    }
    if (minSum > pathSums[j]) {
      minSum = pathSums[j];
    }
    i = i + 1;
    j = j - 1;
  }
  return minSum;
}
