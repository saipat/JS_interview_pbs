let binarySearchRotated = function(array, key){
  return binarySearch(array, 0, array.length-1, key);
}

let binarySearch = function(arr, start, end, key){
  if(start > end){
    return -1;
  }

  let mid = start + Math.floor((end-start)/2);

  if(arr[mid] === key){
    return mid;
  }

  if(arr[start] <= arr[mid] && key >= arr[start] && key <= arr[mid]){
    return binarySearch(arr, start, mid-1, key);
  }
  else if(arr[mid] <= arr[end] && key >= arr[mid] && key <= arr[end]){
    return binarySearch(arr, mid+1, end, key);
  }
  else if (arr[mid] <= arr[start]) {
    return binarySearch(arr, start, mid-1, key);
  }
  else if (arr[mid] >= arr[end]){
    return binarySearch(arr, mid+1, end, key)
  }

  return -1;
}

let v1 = [6, 7, 1, 2, 3, 4, 5];
console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));

let v2 = [4, 5, 6, 1, 2, 3];
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));


// Runtime complexity #
// The runtime complexity of this solution is logarithmic, O(log \space n)O(log n).
//
// Memory complexity #
// The memory complexity of this solution is logarithmic, O(log \space n)O(log n).
//
// The solution is essentially a binary search but with some modifications. If we look at the array in the example closely, we notice that at least one half of the array is always sorted. We can use this property to our advantage. If the number nn lies within the sorted half of the array, then our problem is a basic binary search. Otherwise, discard the sorted half and keep examining the unsorted half. Since we are partitioning the array in half at each step, this gives us O(log \space n)O(log n) runtime complexity.
