function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i])
    }
  }
  return result;
}

console.log(removeDuplicates([1, 5, 3, 3, 6, 3, 6]))