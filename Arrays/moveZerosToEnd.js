let moveZerosToEnd = function(arr){
  let pos = 0;

  for(let i=0; i<arr.length; i++){
    if(arr[i] != 0){
      arr[pos++] =arr[i];
    }
  }

  for(let i=pos; i<arr.length; i++){
    arr[i] = 0;
  }

  return arr;
}

let array = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(array));
