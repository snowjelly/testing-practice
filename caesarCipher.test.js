import caesarCipher from "./caesarCipher";

test('string "sol badguy" becomes "tpm cbehvz"', () => {
  expect(caesarCipher("sol badguy", 1)).toBe("tpm cbehvz");
});

test('string "zzz" becomes "bbb"', () => {
  expect(caesarCipher("zzz", 2)).toBe("bbb");
});

test('string "Water Bottle" becomes "Aexiv Fsxxpi"', () => {
  expect(caesarCipher("Water Bottle", 4)).toBe("Aexiv Fsxxpi");
});
