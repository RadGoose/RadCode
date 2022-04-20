import { expect } from "chai";
import { ListNode } from "../src/AddTwoNumbers/listNodeClass";
import { addTwoNumbers } from "../src/AddTwoNumbers/solution";
import { getNodeVal } from "../src/AddTwoNumbers/solution";
import { getNextNode } from "../src/AddTwoNumbers/solution";

const EMPTY_NODE = new ListNode(0);
const VAL_1 = new ListNode(1, EMPTY_NODE);
const VAL_6 = new ListNode(6);
const NEXT_DEFINED = new ListNode(0, VAL_6);

describe("addTwoNumbers", () => {
  it("should return null when inputs are null", () => {
    expect(addTwoNumbers(null, null)).to.equal(null);
  });
  it("should return a ListNode(0, null) when arguments l1 and l2 are ListNode(0, null)", () => {
    expect(addTwoNumbers(EMPTY_NODE, EMPTY_NODE).val).to.equal(0);
    expect(addTwoNumbers(EMPTY_NODE, EMPTY_NODE).next).to.equal(null);
  });
  it("should return ListNode(l1.val + l2.val) when 0 <= arguments values <= 9", () => {
    expect(addTwoNumbers(VAL_1, VAL_1).val).to.equal(2 * VAL_1.val);
  });
  it("should not return null when l1.val + l2.val >= 10", () => {
    expect(addTwoNumbers(VAL_6, VAL_6).next.val).to.not.be.null;
  });
  it("should not return null when l1.next + l2.next /= null", () => {
    expect(addTwoNumbers(NEXT_DEFINED, VAL_6).next.val).to.not.be.null;
  });
  it("should add carry from previous sum", () => {
    expect(addTwoNumbers(VAL_6, VAL_6).next.val).to.equal(1);
  });
});

describe("getNodeVal", () => {
  it("should return number if ListNode exists", () => {
    expect(getNodeVal(null)).to.equal(null);
  });
  it("should return ListNode.val if input is not null", () => {
    expect(getNodeVal(EMPTY_NODE)).to.equal(0);
  });
});

describe("getNextNode", () => {
  it("should return null if argument is null", () => {
    expect(getNextNode(null)).to.equal(null);
  });
  it("should return null if ListNode.next is null", () => {
    expect(getNextNode(EMPTY_NODE)).to.equal(null);
  });
  it("should return ListNode.next if ListNode.next is defined", () => {
    expect(getNextNode(VAL_1)).to.equal(VAL_1.next);
  });
});
