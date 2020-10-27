const { expect } = require("@jest/globals");
const nextVersion = require("./NextVersion");

it("single digit version test", () => {
  expect(nextVersion("1")).toBe("2");
});

it("three digit version test", () => {
  expect(nextVersion("0.9.9")).toBe("1.0.0");
});

it("eight digit version test", () => {
  expect(nextVersion("1.2.3.4.5.6.7.8")).toBe("1.2.3.4.5.6.7.9");
});

it("version all nines", () => {
  expect(nextVersion("9.9.9.9.9.9")).toBe("10.0.0.0.0.0");
});
