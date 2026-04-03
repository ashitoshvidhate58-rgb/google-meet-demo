const arr = [10,5,4,3,2,4,1, 2, 2, 3, 4, 4, 5,5,5,5,5,5,5,5,5];

function removeDuplicatesViaObjV2(arr) {
  // Write logic here

  const results = []; //[5, 2, 3, 1]
  const foundKeys = {}; // {5:true, 2:true,3:true, 1:true }

  for (let i = 0; i < arr.length; i++) {
    const currElem = arr[i];
    
    if (!foundKeys.hasOwnProperty(currElem)) 
      {
      results.push(currElem);
      foundKeys[currElem] = true;
    }
  }

  return results;
}

const output = removeDuplicatesViaObjV2(arr);
console.log(output);