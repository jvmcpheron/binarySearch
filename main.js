// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function binarySearch(arr, target) {
    //defining left and right side of array
      let left = 0;
      let right = arr.length - 1;
    
    //looping through array
      while (left <= right) {
        //defining middle of array
        const mid = Math.floor((left + right) / 2);
        
        //conditionals
        if (arr[mid] === target) {
            //found!
          return mid; 
        } else if (arr[mid] < target) {
            //if midpoint is less than target, move left end of array to one above midpoint
          left = mid + 1; 
        } else {
            //if not, move right point of array to one below midpoint
          right = mid - 1; 
        }
      }
    //target not found
      return -1; 
    }
    
    function mergeSort(arr) {
        //no point in sorting empty or one element arrays
      if (arr.length <= 1) {
        return arr; 
      }
        //separating arrays into parts
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
    
        //merging sorted parts
      return merge(mergeSort(left), mergeSort(right));
    }
    
    function merge(left, right) {
        //variales
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;
    
    //looping through arrays
      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }
    
      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    
    //test
    let sortedArr = mergeSort([1,5,3,6,10,11,7,2]);
    console.log(sortedArr);
    console.log(binarySearch(sortedArr, 3))
