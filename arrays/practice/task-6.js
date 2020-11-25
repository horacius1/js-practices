
function reduce (arr,sum,current){
    for(let i = arr.length-1; i>= arr[arr.length - 1 - current]; i--){
      sum+=arr[i];
    }
    return sum;
    }
  
  let arr2 = [1,2,3,4,5,6,7];
  let acc = 0;
  let sum = 0;
  reduce(arr2, sum, 3);