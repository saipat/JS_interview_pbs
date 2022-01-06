class LinkedLists {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let removeDuplicates = function(head){
  if(!head){
    return head;
  }

  let hashSet = new Set();
  hashSet.add(head.value);
  let current = head;

  while(current.next){
    if(hashSet.has(current.next.value)){
      current.next = current.next.next;
    }else{
      hashSet.add(current.next.value);
      current = current.next;
    }
  }

  return head;
}

// tests
const a = new LinkedLists('A');
const b = new LinkedLists('B');
const c = new LinkedLists('A');
const d = new LinkedLists('B');
const e = new LinkedLists('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log("RemoveDuplicates => ", removeDuplicates(a));
