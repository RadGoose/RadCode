import { ListNode } from "./listNodeClass"

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) {
        return null
    }

    const output = new ListNode(0)

    return output
};

export function getNodeVal(node: ListNode | null): number | null {
    return node ? node.val : null
}

export function getNextNode(node: ListNode | null): ListNode | null {
    return node && node.next ? node.next : null
}