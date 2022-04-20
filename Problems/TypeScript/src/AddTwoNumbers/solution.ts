import { ListNode } from "./listNodeClass";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carryOver = 0
): ListNode | null {
  if (l1 === null && l2 === null) {
    return carryOver === 0 ? null : new ListNode(carryOver);
  }

  const currentSum = getNodeVal(l1) + getNodeVal(l2) + carryOver;

  const nextNode = addTwoNumbers(
    getNextNode(l1),
    getNextNode(l2),
    currentSum >= 10 ? 1 : 0
  );

  return new ListNode(currentSum % 10, nextNode);
}

export function getNodeVal(node: ListNode | null): number | null {
  return node ? node.val : null;
}

export function getNextNode(node: ListNode | null): ListNode | null {
  return node && node.next ? node.next : null;
}
