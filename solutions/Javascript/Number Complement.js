function getNumber(bin_number) {
  let [i, sum, pow] = [bin_number.length - 1, 0, 0];
  while (i >= 0) {
    sum = sum + parseInt(bin_number[i]) * Math.pow(2, pow++);
    i = i - 1;
  }
  return sum;
}
var findComplement = function (num) {
  let bin_num = '';
  while (num > 0) {
    let res = (num % 2).toString() === '1' ? '0' : '1';
    bin_num = res + bin_num;
    num = Math.floor(num / 2);
  }
  return getNumber(bin_num);
};
