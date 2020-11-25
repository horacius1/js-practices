function some(arr,func){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
      if(func(arr[i], i, arr)){
        return true;
      } 
    }
    return false;
  }
  
  function newF(param) {
    return param>3;
  }
  
  
  const arr = [1,2,3];
  every(arr, newF);