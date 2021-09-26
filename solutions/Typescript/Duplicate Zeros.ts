function duplicateZeros(arr: number[]): void {
  let temp1: number = 0,
    temp2: number = 0,
    i: number = 0;
  while (i < arr.length - 1) {
    if (arr[i] === 0) {
      temp1 = arr[i + 1];
      arr[i + 1] = 0;
      for (let j: number = i + 2; j < arr.length; j++) {
        temp2 = arr[j];
        arr[j] = temp1;
        temp1 = temp2;
      }
      i = i + 2;
    } else {
      i = i + 1;
    }
  }
}
