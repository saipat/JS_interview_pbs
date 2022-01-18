let balancedParanthesis = function (str){
  let stack = [];

  let map = {
       '(': ')',
       '[': ']',
       '{': '}'
   }

  for(let i=0; i<str.length; i++){
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      stack.push(str[i]);

    }else{
      let lastElement = stack.pop();
      console.log(lastElement)
      if(str[i] !== map[lastElement]) {
        return false;
      }
    }
  }

  if(stack.length !==
     0) {return false;}
  return true;
}

console.log(balancedParanthesis("{[]()}"))
