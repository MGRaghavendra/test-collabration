var backspaceCompare = function (s, t) {
    let s1 = [], s2 = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '#' && s[i].length > 0) {
            s1.pop();
        }
        else if (s[i] != '#') {
            s1.push(s[i]);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] == '#' && t[i].length > 0) {
            s2.pop();
        }
        else if (t[i] != "#") {
            s2.push(t[i]);
        }
    }
    return s1.join('') == s2.join('');
};