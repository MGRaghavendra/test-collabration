var getRow = function (rowIndex) {
  triangle = [[1]];
  while (triangle.length <= rowIndex)
    triangle.push(makeRow(triangle[triangle.length - 1]));
  return triangle[rowIndex];
};

function makeRow(row) {
  let res = [],
    i = 0,
    j = row.length;
  console.log(row);
  while (i <= j) {
    if (i === 0) res.push(row[i]);
    else if (i <= j - 1) res.push(row[i - 1] + row[i]);
    else res.push(row[j - 1]);
    i = i + 1;
  }
  return res;
}
