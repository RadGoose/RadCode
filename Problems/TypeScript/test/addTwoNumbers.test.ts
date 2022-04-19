import { expect } from "chai";
import { ListNode } from "../src/AddTwoNumbers/listNodeClass";
import { addTwoNumbers } from "../src/AddTwoNumbers/solution"

describe("addTwoNumbers", () => {
    it("should return null when inputs are null", () => {
        expect(addTwoNumbers(null, null)).to.equal(null)
    })
    it("should return a ListNode(0, null) when arguments l1 and l2 are ListNode(0, null)", () => {
        const emptyListNode = new ListNode(0);
        expect(addTwoNumbers(emptyListNode, emptyListNode).val).to.equal(0)
        expect(addTwoNumbers(emptyListNode, emptyListNode).next).to.equal(null)
    })
})