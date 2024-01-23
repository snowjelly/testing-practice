import caesarCipher from "./caesarCipher";

test('string "sol badguy" becomes "tpm cbehvz"', () => {
  expect(caesarCipher("sol badguy")).toBe("tpm cbehvz");
});
