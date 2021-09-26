var duplicateZeros = function (arr) {
  let temp1 = 0,
    temp2 = 0,
    i = 0;
  while (i < arr.length - 1) {
    if (arr[i] === 0) {
      temp1 = arr[i + 1];
      arr[i + 1] = 0;
      for (let j = i + 2; j < arr.length; j++) {
        temp2 = arr[j];
        arr[j] = temp1;
        temp1 = temp2;
      }
      i = i + 2;
    } else {
      i = i + 1;
    }
  }
};
