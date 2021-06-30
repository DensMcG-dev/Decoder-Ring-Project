const expect = require("chai").expect;
const polybius = require("../src/polybius").polybius;

describe("Encoding Check", () => {
  it("Should translate both i & j to 42 when encoding", () => {
    const input1 = "iji";
    const input2 = true;
    const expected = "424242";
    const actual = polybius(input1, input2);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters", () => {
    const input1 = "aAaA";
    const input2 = true;
    const expected = "11111111";
    const actual = polybius(input1, input2);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces when encoding", () => {
    const input1 = "aaa bbb aaa";
    const input2 = true;
    const expected = "111111 212121 111111";
    const actual = polybius(input1, input2);
    expect(actual).to.equal(expected);
  });
});

describe("Decoding Check", () => {
  it("Should maintain spaces when decoding", () => {
    const input1 = "1111 2121 3232";
    const input2 = false;
    const expected = "aa bb hh";
    const actual = polybius(input1, input2);
    expect(actual).to.equal(expected);
  });
  it("Should translate 42 to (i/j) when decoding", () => {
    const input1 = "42";
    const input2 = false;
    const expected = "(i/j)";
    const actual = polybius(input1, input2);
    expect(actual).to.equal(expected);
  });
});

