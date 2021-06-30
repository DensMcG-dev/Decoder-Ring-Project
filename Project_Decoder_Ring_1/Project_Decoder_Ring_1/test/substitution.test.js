const expect = require("chai").expect;
const substitution = require("../src/substitution").substitution;

describe("Input Check", () => {
  it("Should return false if given substitution alphabet is not exactly 26 characters", () => {
    const input1 = "iji";
    const input2 = "xoyqmcgrukswaflnthdjpzib"; //24 chars in lieu of 26
    const input3 = true;
    const expected = false;
    const actual = substitution(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should return false if any characters are duplicated in the substitution alphabet", () => {
    const input1 = "aAaA";
    const input2 = "xoyqmcgrukswaflnthdjpzivvv";
    const input3 = true;
    const expected = false;
    const actual = substitution(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
});

describe("Encoding/Decoding Check", () => {
  it("Should maintain spaces when encoding", () => {
    const input1 = "You are an excellent spy";
    const input2 = "xoyqmcgrukswaflnthdjpzibev";
    const input3 = true;
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters", () => {
    const input1 = "YoU aRe An ExCeLlEnT sPy";
    const input2 = "xoyqmcgrukswaflnthdjpzibev";
    const input3 = true;
    const expected = 'elp xhm xf mbymwwmfj dne';
    const actual = substitution(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
  it("Should properly translate message with given substitution alphabet", () => {
    const input1 = "jrufscpw";
    const input2 = "xoyqmcgrukswaflnthdjpzibev";
    const input3 = false;
    const expected = "thinkful";
    const actual = substitution(input1, input2, input3);
    expect(actual).to.equal(expected);
  });
});

