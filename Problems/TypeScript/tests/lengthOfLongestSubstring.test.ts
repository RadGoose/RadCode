import { expect } from "chai";
import { lengthOfLongestSubstring } from "../src/LengthOfLongestSubstring/solution";

describe("lengthOfLongestSubstring", () => {
  it("should return 0 when input string is empty", () => {
    expect(lengthOfLongestSubstring("")).to.equal(0);
  });
  it("should return length of string when input string is contains no repetition", () => {
    expect(lengthOfLongestSubstring("abcd")).to.equal(4);
  });
  it("it should return the length of the first substring if it's the longest", () => {
    expect(lengthOfLongestSubstring("abaa")).to.equal(2);
  });
  it("it should return the length of the second substring if it's the longest", () => {
    expect(lengthOfLongestSubstring("abadta")).to.equal(4);
  });
});
