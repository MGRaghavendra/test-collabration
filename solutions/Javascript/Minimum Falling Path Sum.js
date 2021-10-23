var minmum = function (a = undefined, b = undefined, c = undefined) {
  if (c === undefined) return a < b ? a : b;
  if (a < b && a < c) return a;
  else if (b < c) return b;
  else return c;
};

var minFallingPathSum = function (matrix) {
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
  let pathSums = matrix[matrix.length - 1];
  let minSum = pathSums[0],
    i = 0,
    j = pathSums.length - 1;
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
};
