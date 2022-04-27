import { expect } from "chai";
import {
  findMedianSortedArrays as solution1,
  getMedianOfArray,
} from "../src/FindMedianOfSortedArrays/solution";
import { findMedianSortedArrays as solution2 } from "../src/FindMedianOfSortedArrays/solution2";

describe("findMedianSortedArrays solution1", () => {
  it("should return the median of two sorted arrays", () => {
    expect(solution1([1, 3], [2])).to.equal(2);
  });
});
describe("findMedianSortedArrays solution2", () => {
  it("should return the median of two sorted arrays", () => {
    expect(solution2([1, 3], [2])).to.equal(2);
  });
});

describe("getMedianOfArray", () => {
  it("should return the median of input number[] with odd length", () => {
    expect(getMedianOfArray([1, 2, 3])).to.equal(2);
  });
  it("should return the median of input number[] with even length", () => {
    expect(getMedianOfArray([1, 2, 3, 4])).to.equal(2.5);
  });
});
