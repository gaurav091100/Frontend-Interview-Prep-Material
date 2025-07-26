function moveZeroToEnd(arr) {
  let result = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      result.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0)
  }
  return result;
}

console.log(moveZeroToEnd([0, 234, 0, 56, 0, 7, 8, 0, 4, 0]))