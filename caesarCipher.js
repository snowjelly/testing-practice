function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let strCrypt = "";
  let cryptLetter = "";

  function getCryptLetter(decryptLetter) {
    if (decryptLetter === decryptLetter.toUpperCase()) {
      cryptLetter = alphabet.indexOf(decryptLetter.toLowerCase()) + shift;
      if (cryptLetter > 25) {
        cryptLetter -= 26;
      }
      strCrypt += alphabet
        .substring(cryptLetter, cryptLetter + 1)
        .toUpperCase();
    } else {
      cryptLetter = alphabet.indexOf(decryptLetter) + shift;

      if (cryptLetter > 25) {
        cryptLetter -= 26;
      }
      strCrypt += alphabet.substring(cryptLetter, cryptLetter + 1);
    }
  }

  const punctuationAndSpacesRegex = /[^\w]/g;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i).match(punctuationAndSpacesRegex)) {
      strCrypt += str.charAt(i);
      continue;
    }

    getCryptLetter(str.charAt(i));
  }

  return strCrypt;
}

export default caesarCipher;
