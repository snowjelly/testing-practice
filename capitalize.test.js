import capitalize from "./capitalize";

test('takes string "test" and capitalizes the first letter', () => {
  expect(capitalize("test")).toBe("Test");
});
