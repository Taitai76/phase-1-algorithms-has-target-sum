function hasTargetSum(array, target) {
  let isSum= false;
  let testArray = [...array];
  for (let i = 0; i<array.length; i++){
    array.shift();
    for (const num of array){
      let x = testArray[i]+ num;

      if (x === target){
        isSum = true;
        return isSum;
      }else{
        isSum = false;
      }
    }
  }
  return isSum;
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
