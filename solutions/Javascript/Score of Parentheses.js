var scoreOfParentheses = function (s) {
  let stack = [];
  let res = 0;
  let i = 0;
  while (i < s.length) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] == '(') {
        stack.pop();
        stack.push(1);
      } else {
        let inner_count = 0;
        while (stack[stack.length - 1] !== '(') {
          inner_count += stack.pop();
        }
        stack.pop();
        stack.push(2 * inner_count);
      }
    }
    i += 1;
    console.log(stack);
  }
  while (stack.length !== 0) {
    res += stack.pop();
  }
  return res;
};
