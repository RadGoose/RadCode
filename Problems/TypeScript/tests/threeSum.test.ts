import { expect } from "chai";
import { hasDuplicates } from "./testTools";
import { threeSum, twoSumForTriplets } from "../src/ThreeSum/solution";

const NUMS = [-1, 0, 1].sort((a, b) => a - b);

describe("threeSum", () => {
  const results = threeSum(NUMS);

  it("should return an empty array if input nums.lenght < 3", () => {
    expect(threeSum([])).to.be.an("array");
    expect(threeSum([])).to.be.empty;
  });

  it("should return an empty array if all nums are positive", () => {
    expect(threeSum([1, 3, 5])).to.be.an("array");
    expect(threeSum([])).to.be.empty;
  });

  it("should return an empty array if all nums are negative", () => {
    expect(threeSum([-1, -3, -5])).to.be.an("array");
    expect(threeSum([])).to.be.empty;
  });
});

describe("twoSumForTriplets", () => {
  let results = [];
  twoSumForTriplets(NUMS, results);

  it("should only push arrays with a length of 3", () => {
    for (let triplet = 0; triplet < results.length; triplet++) {
      expect(results[triplet].length).to.equal(3);
    }
  });

  it("should not push any duplicates", () => {
    expect(!hasDuplicates(results));
  });

  it("should only push valid triplets", () => {
    for (let triplet = 0; triplet < results.length; triplet++) {
      expect(
        results[triplet].reduce(function (a, b) {
          return a + b;
        }, 0)
      ).to.equal(0);
    }
  });
});
