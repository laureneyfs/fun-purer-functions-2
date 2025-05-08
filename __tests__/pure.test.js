const {
  removeLastNumber,
  raiseSalaries,
  updateTasks,
  cloneObject,
} = require("../pure");

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

//Takes a person object and one or more new tasks, and returns a new person object with the tasks array updated to include the new tasks. The original tasks array is not mutated.
//example: updateTasks(person, "read books", "tidy room");

//1. returns an empty object if given an empty object and no tasks
//2. returns an unchanged object with values when given no tasks
//2. returns an object with one task changed when given one task
//3. returns an object with multiple tasks changed
//4. returns a new object
//5. doesn't mutate input

describe("updateTasks", () => {
  test("returns an empty object when given an empty object and no tasks", () => {
    const person = {};
    const result = updateTasks(person);
    const expected = {};
    expect(result).toEqual(expected);
  });
  test("returns an unchanged object with values when given no tasks", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    const result = updateTasks(person);
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery"],
    };
    expect(result).toEqual(expected);
  });
  test("returns an object with one task changed when given one task", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    const tasks = "read books";
    const result = updateTasks(person, tasks);
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books"],
    };
    expect(result).toEqual(expected);
  });
  test("returns an object with multiple tasks changed", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    const result = updateTasks(person, "read books", "tidy room");
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"],
    };
    expect(result).toEqual(expected);
  });
  test("returns a new object", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    const result = updateTasks(person, "read books", "tidy room");
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"],
    };
    expect(result).not.toBe(person);
  });
  test("does not mutate inputs", () => {
    const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
    const copyPerson = { ...person };
    updateTasks(person, "read books", "tidy room");
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"],
    };
    expect(copyPerson).toEqual(person);
  });
});

describe("cloneObject", () => {
  test("returns target object", () => {
    const target = { a: 1, b: 2 };
    const source = {};
    const result = cloneObject(target);
    const expected = { a: 1, b: 2 };
    expect(result).toBe(target);
  });
  test("if source object is empty, output has same key-value pairs as target object", () => {
    const target = { a: 1, b: 2 };
    const source = {};
    const result = cloneObject(target);
    const expected = { a: 1, b: 2 };
    expect(result).toEqual(target);
  });
  test("returns all key value pairs from target+source when they do not share keys", () => {
    const target = { a: 1, b: 2 };
    const source = { c: 3, d: 4 };
    const result = cloneObject(target);
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(result).toEqual(target);
  });
  //0. returns target object - doing this first because in this test it WANTS us to mutate, when it doesn't want us to mutate doing it last makes more sense
  //1. if source object is empty, output has same key-value pairs as target object
  //2. returns all key value pairs from target+source when they do not share keys
  //3. returns all key value pairs from target+source when they do share keys
  //4. target object HAS been mutated
  //5. source object has NOT been mutated
});
