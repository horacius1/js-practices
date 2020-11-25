var arr = [1, 2, -4, 3, -9, -1, 7];



var isPositiv = a => a>0 

var cycle  = ar =>  {
     let arr2=[];
for ( i=0 ; i<ar.length ; i++){
    if (isPositiv(ar[i])) {

        arr2.push(ar[i])
    }
}
return arr2;
}
console.log(cycle(arr))