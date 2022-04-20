import { expect } from "chai";
import { twoSum } from "../src/TwoSum/solution";

const NUMS = [2, 7, 11, 15];

describe("twoSum", () => {
  it("should return an array", () => {
    expect(twoSum(NUMS, 9)).to.be.an("array");
  });
});
