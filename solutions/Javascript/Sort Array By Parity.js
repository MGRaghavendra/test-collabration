var sortArrayByParity = function (nums) {
    let res = []
    nums.map((num) => {
        if (num % 2 == 1) res.push(num)
        else res.unshift(num);
    })
    return res;
};