const removeLastNumber = require("../pure");

describe("removeLastNumber", () => {
  test("returns empty array when given one item", () => {
    const input = [1];
    const actual = removeLastNumber(input);
    const expected = [];
    expect(actual).toEqual(expected);
  });
  test("returns array -1 item when given array with multiple items", () => {
    const input = [1, 2, 3];
    const actual = removeLastNumber(input);
    const expected = [1, 2];
    expect(actual).toEqual(expected);
  });
  test("returns new array", () => {
    const input = [1, 2, 3];
    const expected = [1, 2];
    expect(input).not.toBe(expected);
  });
  test("doesn't mutate input array", () => {
    const input = [1, 2, 3];
    const copyInput = [...input];
    removeLastNumber(input);
    expect(input).toEqual(copyInput);
  });
});

//1. returns empty array when given one item
//2. returns array -1 item when given array with multiple items
//3. returns new array
//4. doesn't mutate input
