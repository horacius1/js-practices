function getDivisors(number)
{
  if
  (typeof number=='string') {
    throw new TypeError (" parameter type is not a Number")
} 

else if (number<=0) {
    throw new  RangeError (" parameter can't be less then 1")
}
else
{
    {
        divs = [];
        if(number > 1){
          for(i=0;i<=number/2;i++){
            if(number % i === 0){
              console.log(number/i);
            }
          }
        }
      }
}



}

try {
    
    getDivisors();
  } catch(err) {
      console.log(err);
  }

  getDivisors(-13)