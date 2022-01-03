let findMaxSlidingWindow = function(arr, windowSize) {
  let result = [];

  if(arr.length === 0) {
    return result;
  }

  if(windowSize > arr.length){
    return result;
  }

  let window_ = [];

  //Find the maximum in first window
  for(let i=0; i<windowSize; i++){
    while(window_.length >0 && arr[i] >= arr[window_[window_.length-1]]){
      window_.pop();
    }

    window_.push(i);
  }

  result.push(arr[window_[0]]);

  //remove all the numbers smaller than the current number from the tail
  //remove the first number if it does not fall in the window anymore
  for(let i=windowSize; i<arr.length ;i++){
    while(window_.length > 0 && arr[i] >= arr[window_[window_.length-1]]){
      window_.pop();
    }

    if(window_.length > 0 && window_[0] <= i - windowSize){
      window_.shift();
    }

    window_.push(i);
    result.push(arr[window_[0]])
  }

  return result;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array = " + array);
console.log("Max = " + findMaxSlidingWindow(array, 3));

array = [-4,2,-5,1,-1,6];
console.log("Array = " + array);
console.log("Max = " + findMaxSlidingWindow(array, 3));


// Memory Complexity #
// The memory complexity of this solution is linear, O(w)O(w), where ww is the window size in this case.
//
// The algorithm uses the deque data structure to find the maximum in a window. A deque is a double-ended queue in which push and pop operations work in O(1)O(1) at both ends. It will act as our window.
//
// At the start of the algorithm, we search for the maximum value in the first window. The first element’s index is pushed to the front of the deque.
//
// If an element is smaller than the one at the back of the queue, then the index of this element is pushed in and becomes the new back. If the current element is larger, the back of the queue is popped repeatedly until we can find a higher value, and then we’ll push the index of the current element in as the new back.
//
// As we can see, the deque stores elements in decreasing order. The front of the deque contains the index for the maximum value in that particular window.
//
// We will repeat the following steps each time our window moves to the right:
//
// Remove the indices of all elements from the back of the deque, which are smaller than or equal to the current element.
//
// If the element no longer falls in the current window, remove the index of the element from the front.
//
// Push the current element index at the back of the window.
//
// The index of the current maximum element is at the front.
