import { expect } from "chai";
import { convert } from "../src/ZigZagConversion/solution";

const EXAMPLE_STRING = "PAYPALISHIRING";

describe("convert", () => {
  it("should return the input string when numRows === 1", () => {
    expect(convert(EXAMPLE_STRING, 1)).to.equal(EXAMPLE_STRING);
  });
  it("should return the input string when numRows === length of input", () => {
    expect(convert(EXAMPLE_STRING, EXAMPLE_STRING.length)).to.equal(
      EXAMPLE_STRING
    );
  });
  it("should return zig zag patterns of the examples given in the assignment", () => {
    expect(convert(EXAMPLE_STRING, 3)).to.equal("PAHNAPLSIIGYIR");
    expect(convert(EXAMPLE_STRING, 4)).to.equal("PINALSIGYAHRPI");
  });
});
