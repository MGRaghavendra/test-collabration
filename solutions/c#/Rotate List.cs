public class ListNode {
    public int val;
    public ListNode next;
    public ListNode(int val=0, ListNode next=null) {
        this.val = val;
        this.next = next;
    }
}

public class Solution {
    public ListNode RotateRight(ListNode head, int k) {
        if(head==null || head.next==null || k==0){
            return head;
        }
        ListNode temp=head;
        int len=1;
        while(temp.next!=null){
            temp=temp.next;
            len++;
        }
        temp.next=head;

        k=k%len;
        k=len-k;

        ListNode curr;
        curr=head;
        while(k> 1){
            curr=curr.next;
            k=k-1;
        }

        head=curr.next;
        curr.next=null;

        return head;

    }
}