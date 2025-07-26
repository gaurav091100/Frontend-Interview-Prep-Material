function maxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return { min, max }
}

console.log(maxAndMin([0,5,10,27,89,234,4,-1,-5]))