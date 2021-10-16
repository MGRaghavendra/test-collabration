function makeRow(row): number[] {
  let res: number[] = [],
    i: number = 0,
    j: number = row.length;
  while (i <= j) {
    if (i === 0) res.push(row[i]);
    else if (i <= j - 1) res.push(row[i - 1] + row[i]);
    else res.push(row[j - 1]);
    i = i + 1;
  }
  return res;
}
function generate(numRows: number): number[][] {
  let triangle: number[][] = [[1]];
  while (triangle.length < numRows)
    triangle.push(makeRow(triangle[triangle.length - 1]));
  return triangle;
}
