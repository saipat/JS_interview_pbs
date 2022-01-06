
let reverseSLL = function(head){
  if(!head || !head.next){
    return head;
  }

  let current = head.next;
  let reversedList = head;
  reversedList.next = null;

  while(current){
    let temp = current;
    current = current.next;

    temp.next = reversedList;
    reversedList = temp;
  }
}

// Runtime complexity#
// The runtime complexity of this solution is linear, O(n)O(n), as we can reverse the linked list in a single pass.
//
// Memory complexity#
// The memory complexity of this solution is constant, O(1)O(1), as no extra memory is required for the iterative solution.
