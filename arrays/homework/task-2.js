
function reverse(array) {
    if (Array.isArray(array))
    {
       if (array.length!==0){
  let a;
  for (var i = 1; i < array.length; i++) {
    a = array.splice(i, 1);
    array.unshift(a);
  }
  return array;
}
else {  
    throw RangeError ("Error: parametter cant be an empty array ")
}
}


else 
{
    throw new TypeError ("Error: parametter cant be anything other then array")
}
}

try {
    console.log(reverse ([2,3,4,5]))
}
catch(error){
    console.log(error);
}


