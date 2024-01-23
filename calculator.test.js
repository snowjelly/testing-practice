import { add, subtract } from "./calculator";

test("add 1 plus 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract 4 minus 2 to equal 2", () => {
  expect(subtract(4, 2)).toBe(2);
});
