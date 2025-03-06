/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let flag = 0

    let head = new ListNode();
    let projector = head;

    while(l1!=null || l2!=null){
        
        let sum = 0;

        if(l1!=null){
            sum+=l1.val
        }
        if(l2!=null){
            sum+=l2.val
        }

        sum+=flag

        projector.val = sum%10
        flag = Math.floor(sum/10)

        if(l1!=null){
            l1=l1.next
        }
        if(l2!=null){
            l2=l2.next
        }
        if(l1!=null||l2!=null){
            projector.next = new ListNode()
            projector = projector.next;
        } else {
            break;
        }
    }

    if(flag!=0){
        let temp = new ListNode()
        temp.val = flag;
        projector.next = temp
    }

    return head

};