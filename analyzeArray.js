function analyzeArray([...numbers]) {
  const total = numbers.reduce((prev, cur) => prev + cur);
  let maxNum = null;
  let minNum = null;
  const max = numbers.reduce((prev, cur) => {
    if (cur > prev) {
      maxNum = cur;
    } else {
      maxNum = prev;
    }
    return maxNum;
  });
  const min = numbers.reduce((prev, cur) => {
    if (prev < cur) {
      minNum = prev;
    } else {
      minNum = cur;
    }
    return minNum;
  });
  return { average: total / numbers.length, min, max, length: numbers.length };
}

export default analyzeArray;
