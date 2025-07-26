function missingNumber(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  let expectedSum = 0;
  for (let i = 1; i <= n; i++) {
    expectedSum += i
  }
  return expectedSum - sum
}

console.log(missingNumber([1, 2, 4, 5, 6], 6)); // Expected: 3
console.log(missingNumber([2, 3, 1, 5], 5));     // Expected: 4