function areAnagram(str1,str2){
  if(str1.length !== str2.length) {
    return false
  }

  const freq1={};
  const freq2={};

  for(let i=0; i<str1.length; i++){
    const value1 = str1[i]
    const value2 = str2[i]
    freq1[value1] = (freq1[value1] || 0) + 1;
    freq2[value2] = (freq2[value2] || 0) + 1;
  }

  console.log({freq1,freq2})
  for(let key in freq1){
    if(freq1[key] !== freq2[key]){
      return false;
    }
  }
  return true;
}

console.log(areAnagram("gum","mug"))