class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?:
        ListNode | null) {
            this.val = (val === undefined ? 0 : val)
            this.next = (next === undefined ? null : next)
        }
}

class AddTwoNumbersInstance {
    termOne: ListNode | null
    termTwo: ListNode | null
    output = new ListNode(0)
    sum = 0
    carry = 0

    step () {
        this.sum = getListNodeValue(this.termOne) + getListNodeValue(this.termTwo)
        
    }

    constructor(termOne?: ListNode | null, termTwo?: ListNode | null) {
        this.termOne = termOne
        this.termTwo = termTwo
    }
}

function addTwoNumbers(nodeOne: ListNode | null, nodeTwo: ListNode | null): ListNode | null {
    let workingInstance = new AddTwoNumbersInstance(nodeOne, nodeTwo)
    
    while (workingInstance.termOne || workingInstance.termTwo || workingInstance.sum > 0) {
        
    }

    return workingInstance.output
}


function getListNodeValue(node: ListNode | null): number {
    return node && node.val ? node.val : 0
}

function getNextListNode(node: ListNode | null): ListNode {
    return node && node.next ? node.next : null
}