
function reduce (arr,sum,current){
    for(let i = 0; i< arr[current]; i++){
      sum+=arr[i];
    }
    return sum;
    }
  
  let arr2 = [1,2,3,4];
  let acc = 0;
  let sum = 0;
  reduce(arr2, sum, 2);