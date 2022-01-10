//Solution 1
let rotateArray = function(arr, n){
  if(arr.length <=0){
    return arr;
  }

  if(n < 0){
    let left = arr.slice(0,n);
    let right = arr.slice(n)
    return left.concat(right)
  } else if (n == 0){
    return array;
  } else if (n > 0){
    let left = arr.slice(0,-n);
    let right = arr.slice(-n);
    return right.concat(left)
  }


}

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log(rotateArray(arr, 2));
console.log(rotateArray(arr, -1));


//Solution 2
let reverseArray = function(arr, start, end){
  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start ++;
    end --;
  }

  return arr;
}

let rotateArraySoln2 = function(arr, n){
  if(arr.length <=0){
    return arr;
  }

  let len = arr.length;
  //normalize the rotations
  //if n < len or n is negative
  n = n%len;
  if(n<0){
    n = n + len;
  }

  reverseArray(arr, 0, len-1);
  reverseArray(arr, 0, n-1);
  reverseArray(arr, n, len-1);

  return arr;
}

let arr1 = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log(rotateArraySoln2(arr1, 2));
console.log(rotateArraySoln2(arr1, -1));

// Runtime complexity #
// The runtime complexity of the code is linear, O(n).
//
// Memory complexity #
// The memory complexity of the code is constant, O(1).
//
// Here is how the solution works:
//
// Normalize the rotations so they do not exceed the length of the array.
// Convert negative rotations to positive rotations.
// Reverse the elements of the original array.
// Reverse the elements from 0 -> N-10−>N−1.
// Reverse the elements from N ->N−> length-1length−1.
