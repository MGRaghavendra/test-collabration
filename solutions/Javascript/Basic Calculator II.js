function cal(num1, num2, operator) {
  if (operator === '*') return num1 * num2;
  if (operator === '/') return Math.floor(num1 / num2);
  if (operator === '+') return num1 + num2;
  if (operator === '-') return num1 - num2;
}

function getNumber(start_index, str) {
  let num = '';
  while (parseInt(str[start_index]) >= 0) {
    num = num + str[start_index];
    start_index += 1;
  }
  return num;
}

var calculate = function (s) {
  if (s.length == 0) {
    return 0;
  }
  let stack = [];
  let operator = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (s[i] === '*' || s[i] === '/') {
        operator = s[i];
      } else {
        if (operator) {
          let num = getNumber(i, s);
          stack.push(cal(stack.pop(), parseInt(num), operator));
          operator = '';
          i = i + num.length - 1;
        } else {
          if (parseInt(s[i]) >= 0) {
            let num = getNumber(i, s);
            stack.push(parseInt(num));
            i = i + num.length - 1;
          } else {
            stack.push(s[i]);
          }
        }
      }
    }
  }
  let a = stack[0];
  console.log(stack);
  let i = 1;
  while (i < stack.length - 1) {
    a = cal(a, stack[i + 1], stack[i]);
    i = i + 2;
  }
  return a;
};
