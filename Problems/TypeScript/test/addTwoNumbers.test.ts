import { expect } from "chai";
import { ListNode } from "../src/AddTwoNumbers/listNodeClass";
import { addTwoNumbers } from "../src/AddTwoNumbers/solution"
import { getNodeVal } from "../src/AddTwoNumbers/solution"
import { getNextNode } from "../src/AddTwoNumbers/solution"

const EMPTY_LIST_NODE = new ListNode(0);
const EXAMPLE_LIST_NODE_1 = new ListNode(1, EMPTY_LIST_NODE)
const EXAMPLE_LIST_NODE_2 = new ListNode(2, EXAMPLE_LIST_NODE_1)

describe("addTwoNumbers", () => {
    it("should return null when inputs are null", () => {
        expect(addTwoNumbers(null, null)).to.equal(null)
    })
    it("should return a ListNode(0, null) when arguments l1 and l2 are ListNode(0, null)", () => {
        expect(addTwoNumbers(EMPTY_LIST_NODE, EMPTY_LIST_NODE).val).to.equal(0)
        expect(addTwoNumbers(EMPTY_LIST_NODE, EMPTY_LIST_NODE).next).to.equal(null)
    })
})

describe("getNodeVal", () => {
    it("should return number if ListNode exists", () => {
        expect(getNodeVal(null)).to.equal(null)
    })
    it("should return ListNode.val if input is not null", () => {
        expect(getNodeVal(EMPTY_LIST_NODE)).to.equal(0)
    })
})

describe("getNextNode", () => {
    it("should return null if argument is null", () => {
        expect(getNextNode(null)).to.equal(null)
    })
    it("should return null if ListNode.next is null", () => {
        expect(getNextNode(EMPTY_LIST_NODE)).to.equal(null)
    })
    it("should return ListNode.next if ListNode.next is defined", () => {
        expect(getNextNode(EXAMPLE_LIST_NODE_1)).to.equal(EXAMPLE_LIST_NODE_1.next)
    })
})