let moveZerosToStart = function(arr){
  let pos = arr.length-1;

  for(let i=arr.length-1; i>=0; i--){
    if(arr[i] != 0){
      arr[pos--] = arr[i];
    }
  }

  for(let i=pos; i>=0; i--){
    arr[i] = 0;
  }

  return arr;
}

let array = [0, 1, 0, 3, 12];
console.log(moveZerosToStart(array));
