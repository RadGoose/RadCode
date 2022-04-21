import { expect } from "chai";
import { threeSum, sortNumArray } from "../src/ThreeSum/solution";

describe("threeSum", () => {
  it("should return an empty array if input nums.lenght < 3", () => {
    expect(threeSum([])).to.be.an("array");
  });
});

describe("sortNums", () => {
  it("should sort an array of nums from least to greatest", () => {
    for (let idx = 0; idx < 4; idx++) {
      expect(sortNumArray([10, -3, 8, 4])[0]).to.equal(-3);
      expect(sortNumArray([10, -3, 8, 4])[1]).to.equal(4);
      expect(sortNumArray([10, -3, 8, 4])[2]).to.equal(8);
      expect(sortNumArray([10, -3, 8, 4])[3]).to.equal(10);
    }
  });
});
