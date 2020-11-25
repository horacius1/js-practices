
function reverse(array) {
    if (Array.isArray(array))
    {
       if (array.length!==0){
        
            let a;
            for (var i = 0; i < array.length; i++) {
              a = array.splice(array.length-1-i, 1);
              array.push(a[0]);
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
    console.log([1,3,4])
}
catch(error){
    console.log(error);
}


