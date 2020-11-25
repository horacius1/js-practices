function every(arr,func){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
      if(!func(arr[i], i, arr)){
        return false;
      } 
    }
    return true;
  }
  
  function newF(param) {
    return param>0;
  }
  
  
  const arr = [1,2,3];
  every(arr, newF);