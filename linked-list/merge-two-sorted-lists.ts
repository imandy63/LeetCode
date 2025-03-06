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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(!list1){
        return list2?list2:null
    } else {
        if(!list2){
            return list1
        }
    }
    let head
    if(list1.val<=list2.val){
        head = list1
        list1=list1.next
    } else {
        head = list2
        list2=list2.next
    }
    let nlst = head
    console.log(head)
    while(list1 && list2){
        console.log({a:list1.val,b:list2.val})
        if(list1.val<=list2.val){
            nlst.next=list1
            nlst=list1
            list1=list1.next
        } else {
            nlst.next=list2
            nlst=list2
            list2=list2.next
        }
    }

    if(list2){
        nlst.next=list2
    } else if(list1){
        nlst.next=list1
    }

    return head

};