const expect = require("chai").expect;
const caesar = require("../src/caesar").caesar;

describe("Shift Value Check", () => {
  it("Should evaluate whether shift value is equal to 0, returning false if so", () => {
    const input1 = "thinkful";
    const input2 = 0;
    const input3 = true;
    const expected = false;
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should evaluate whether shift value is less than -25, returning false if so", () => {
    const input1 = "thinkful";
    const input2 = -26;
    const input3 = true;
    const expected = false;
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should evaluate whether shift value is greater than 25, returning false if so", () => {
    const input1 = "thinkful";
    const input2 = 26;
    const input3 = true;
    const expected = false;
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
});

describe("Encoding/Decoding Check", () => {
  it("Should ignore capital letters", () => {
    const input1 = "ThInKfUl";
    const input2 = 1;
    const input3 = true;
    const expected = "uijolgvm";
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should wrap around to other end of alphabet when a shift goes beyond", () => {
    const input1 = "zebra";
    const input2 = 2;
    const input3 = true;
    const expected = "bgdtc";
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces, numbers & special characters when encoding", () => {
    const input1 = "u ^3";
    const input2 = 3;
    const input3 = true;
    const expected = "x ^3";
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces, numbers & special characters when decoding", () => {
    const input1 = "x ^3";
    const input2 = 3;
    const input3 = false;
    const expected = "u ^3";
    const actual = caesar(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
});

