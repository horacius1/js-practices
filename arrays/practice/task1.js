function forEach(arr,func){
    for(let i = 0; i< arr.length; i++){
      func(arr[i], i, arr);
    }
  }
  
  function newF(){
    console.log(arguments);
  }
  
  const arr = [1,2,3];
  forEach(arr, newF);