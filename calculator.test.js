import { add, subtract, divide, multiply } from "./calculator";

test("add 1 plus 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 4 minus 2 to equal 2", () => {
  expect(subtract(4, 2)).toBe(2);
});

test("divide 10 by 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("multiply 2 times 2 to equal 4", () => {
  expect(multiply(2, 2)).toBe(4);
});
