function isEven(num){
  return num%2 === 0;
}

const mixedArray = [3,13,74,14,66,15,22,4];

console.log( mixedArray.filter(num=>isEven(num)) );