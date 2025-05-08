const { removeLastNumber, raiseSalaries } = require("../pure");

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

describe("raiseSalaries", () => {
  // 1. returns an empty when given an empty array
  // 2. returns an array with salary increase for one employee and a round number
  // 3. returns an array with salary increase that rounds to the nearest integer
  // 4. returns an array and adds salary increase for multiple employees and rounds
  // 5. returns a new array
  // 6. doesn't original array
  test("returns an empty array when given a empty array", () => {
    // Arrange
    const input = [];
    const expected = [];
    // Act
    const result = raiseSalaries(input);
    // Assert
    expect(result).toEqual(expected);
  });

  test("returns an array with one employee with added salary increase whole integer output", () => {
    // Arrange
    const input = [{ name: "Alice", salary: 3000 }];
    const percentage = 10;
    const expected = [{ name: "Alice", salary: 3300 }];
    // Act
    const result = raiseSalaries(input, percentage);
    // Assert
    expect(result).toEqual(expected);
  });

  test("returns an array with salary increase that rounds to the nearest integer", () => {
    // Arrange
    const input = [{ name: "Alice", salary: 3001 }];
    const percentage = 10;
    const expected = [{ name: "Alice", salary: 3301 }];
    // Act
    const result = raiseSalaries(input, percentage);
    // Assert
    expect(result).toEqual(expected);
  });

  test("returns an array with salary increase that returns an array and adds salary increase for multiple employees and rounds to the nearest integer", () => {
    // Arrange
    const input = [
      { name: "Alice", salary: 3001 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ];
    const percentage = 10;
    const expected = [
      { name: "Alice", salary: 3301 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];
    // Act
    const result = raiseSalaries(input, percentage);
    // Assert
    expect(result).toEqual(expected);
  });

  test("returns a new array", () => {
    // Arrange
    const input = [
      { name: "Alice", salary: 3001 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ];
    const percentage = 10;
    const expected = [
      { name: "Alice", salary: 3301 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];
    // Act
    const result = raiseSalaries(input, percentage);
    // Assert
    expect(result).not.toBe(input);
  });

    test("returns a new Does not mutate original array", () => {
    // Arrange
    const input = [
      { name: "Alice", salary: 3001 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ];
    const copyInput = [...input];
    const percentage = 10;
    raiseSalaries(input, percentage);
    const expected = [
      { name: "Alice", salary: 3301 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];
    
    // Act
    const result = raiseSalaries(input, percentage);
    // Assert
    expect(input).toEqual(copyInput);
  });
});
