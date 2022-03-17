class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        stack=[]
        i=0
        res=0
        while i<len(s):
            if s[i] == '(':
                stack.append(s[i]);
            else:
                if(stack[-1]=='('):
                    stack.pop();
                    stack.append('1')
                else:
                    count=0;
                    while stack[-1]!='(':
                        count+=int(stack.pop())
                    stack.pop();
                    stack.append(str(2*count));
            print(stack)
            i=i+1;
        print(stack);
        while len(stack):
            res+=int(stack.pop())
        return res;