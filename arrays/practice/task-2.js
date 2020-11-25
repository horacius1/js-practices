function filter(arr,func){
    let newArr = [];
    for(let i = 0; i< arr.length; i++){
      if(func(arr[i], i, arr)){
        newArr.push(arr[i]);
      } 
    }
    return newArr;
  }
  
  function newF(param) {
    return param>2;
  }
  
  
  const arr = [1,2,3];
  filter(arr, newF);