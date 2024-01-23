import caesarCipher from "./caesarCipher";

test('string "sol badguy" becomes "tpm cbehvz"', () => {
  expect(caesarCipher("sol badguy", 1)).toBe("tpm cbehvz");
});
