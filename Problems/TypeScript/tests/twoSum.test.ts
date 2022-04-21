import { expect } from "chai";
import { twoSum } from "../src/TwoSum/solution";

const NUMS = [2, 7, 11, 15];

describe("twoSum", () => {
  it("should return null if no match has been found", () => {
    expect(twoSum(NUMS, 12)).to.be.null;
  });
  it("should return the index of two terms, the sum of which equals input target", () => {
    expect(twoSum(NUMS, 9)[0]).to.equal(0);
    expect(twoSum(NUMS, 9)[1]).to.equal(1);
  });
});
