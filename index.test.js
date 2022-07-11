const { push, pop, unshift, shift, hasDuplicates } = require("./index.js");

describe("push", () => {
  it("should add an element to an array", () => {
    const arr = ["a", "b", "c"];
    expect(push(arr, "d")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[3]).toBe("d");
  });
});

describe("pop", () => {
  it("should remove an element from an array", () => {
    const arr = ["a", "b", "c"];
    expect(pop(arr)).toBe("c");
    expect(arr.length).toBe(2);
    expect(arr[1]).toBe("b");
  });
});

describe("unshift", () => {
  it("should add an element to the beginning of an array", () => {
    const arr = ["a", "b", "c"];
    expect(unshift(arr, "test")).toBe(4);
    expect(arr.length).toBe(4);
    expect(arr[0]).toBe("test");
  });
});

describe("shift", () => {
  it("should remove an element from the beginning of an array", () => {
    const arr = ["a", "b", "c"];
    expect(shift(arr)).toBe("a");
    expect(arr.length).toBe(2);
    expect(arr[0]).toBe("b");
  });
});

describe("duplicates", () => {
  it("should check for duplicates in an array", () => {
    const arrOne = ["j", "o", "w", "w"];
    const arrTwo = ["m", "b", "p", "x"];
    expect(hasDuplicates(arrOne)).toBe(true);
    expect(hasDuplicates(arrTwo)).toBe(false);
  });
});
