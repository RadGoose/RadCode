import { expect } from "chai";
import {
  isPalindrome,
  longestPalindrome,
  expandPalindromeByIndices,
} from "../src/LengthOfLongestPalindrome/solution";

describe("longestPalindrome", () => {
  it("should return input string when it is a palindrome", () => {
    expect(longestPalindrome("ada")).to.equal("ada");
  });
  it("should return the first letter of the the input non-palindrome string when it's shorter than 3 characters", () => {
    expect(longestPalindrome("ad")).to.equal("a");
  });
  it("should return either of two possible odd length palindromes", () => {
    expect(longestPalindrome("babad")).to.equal("bab" || "aba");
  });
  it("should return either of two possible even length palindromes", () => {
    expect(longestPalindrome("cbbdaaq")).to.equal("bb" || "aa");
  });
});

describe("isPalindrome", () => {
  it("should return true if input is a palindrome", () => {
    expect(isPalindrome("ada")).to.be.true;
  });
  it("should return false if input is not a palindrome", () => {
    expect(isPalindrome("adf")).to.be.false;
  });
});

describe("expandPalindromeByIndices", () => {
  it("should find the largest possible palindrome containing given letter when input length is odd", () => {
    expect(expandPalindromeByIndices("aba", 1, 1)).to.equal("aba");
  });
  it("should find the largest possible palindrome containing given letter when input length is even", () => {
    expect(expandPalindromeByIndices("aaaa", 1, 2)).to.equal("aaaa");
  });
});
