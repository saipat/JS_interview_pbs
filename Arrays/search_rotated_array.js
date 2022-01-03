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
