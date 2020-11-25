const reducer = (sum, element) => {
    if(!Array.isArray(element) && typeof element !== 'number') throw new Error('Element type should be a number or an array!');
    if(Array.isArray(element)){
        sum += sumUp(element);
      } else {
        sum += element;
      }
      return sum;
};
    
function sumUp(arr){
    if(!Array.isArray(arr)) throw new Error('parameter type should be an array');
    return arr.reduce(reducer,0);
}



try{
    console.log(sumUp(arr));
}catch(e){
    console.log(e.message);
}