import { ListNode } from "./listNodeClass"

class AddTwoNumbersInstance {
    termOne: ListNode | null
    termTwo: ListNode | null
    output: ListNode
    sum = 0
    carry = 0

    step () {
        this.sum = getNodeValue(this.termOne) + getNodeValue(this.termTwo) + this.carry

        this.termOne = getNextNode(this.termOne)
        this.termTwo = getNextNode(this.termTwo)

        this.carry = this.sum >= 10 ? 1 : 0 

        this.output = new ListNode(this.sum % 10, this.output)
    }

    constructor(termOne?: ListNode | null, termTwo?: ListNode | null) {
        this.termOne = termOne
        this.termTwo = termTwo
    }
}

function addTwoNumbers(nodeOne: ListNode | null, nodeTwo: ListNode | null): ListNode | null {
    let workingInstance = new AddTwoNumbersInstance(nodeOne, nodeTwo)
    
    while (workingInstance.termOne || workingInstance.termTwo) {
        workingInstance.step()
    }

    return workingInstance.output
}


function getNodeValue(node: ListNode | null): number {
    return node && node.val ? node.val : 0
}

function getNextNode(node: ListNode | null): ListNode {
    return node && node.next ? node.next : null
}