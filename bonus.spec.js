const calculateBonus = require("./bonus");

describe("Return correct bonus when sum is less than 50", () => {
  it("Sum of two positive numbers", () => {
    expect(calculateBonus(15, 13)).toBe(28);
  });

  it("Sum of one positive number and one 0", () => {
    expect(calculateBonus(27, 0)).toBe(27);
  });

  it("Sum of one 0 and one positive number", () => {
    expect(calculateBonus(0, 49)).toBe(49);
  });
});

describe("Returns the maximum bonus of 50 when sum is greater than 50", () => {
  it("Sum of two positive numbers", () => {
    expect(calculateBonus(30, 21)).toBe(50);
  });

  it("Sum of one positive number and one 0", () => {
    expect(calculateBonus(51, 0)).toBe(50);
  });

  it("Sum of one 0 and one positive number", () => {
    expect(calculateBonus(0, 60)).toBe(50);
  });
});

describe("Returns bonus of 50 when sum is exactly 50", () => {
  it("Two positive numbers", () => {
    expect(calculateBonus(35, 15)).toBe(50);
  });

  it("One positive number and one 0", () => {
    expect(calculateBonus(35, 15)).toBe(50);
  });
});

describe("Returns undefined for negative values", () => {
  it("One negative and one positive number", () => {
    expect(calculateBonus(-10, 20)).toBeUndefined();
  });

  it("One positive and one negative number", () => {
    expect(calculateBonus(30, -15)).toBeUndefined();
  });

  it("Two negative numbers", () => {
    expect(calculateBonus(-5, -5)).toBeUndefined();
  });
});

describe("Returns undefined for non-numeric input", () => {
  it("One non-numeric input and one number", () => {
    expect(calculateBonus(undefined, 15)).toBeUndefined();
  });

  it("One number and one non-numeric input", () => {
    expect(calculateBonus(25, false)).toBeUndefined();
  });

  it("Two non-numeric inputs", () => {
    expect(calculateBonus(null, "text")).toBeUndefined();
  });
});
