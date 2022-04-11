class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?:
        ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
}

function addTwoNumbers(nodeOne: ListNode | null, nodeTwo: ListNode | null): ListNode | null {
    let termOne = nodeOne, termTwo = nodeTwo;
    let sum = new ListNode();
    
    
    while (termOne || termTwo) {
        
    }
    return 
};