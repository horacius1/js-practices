

// const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

// // // var result = arr3.concat ()
// // // console.log(result)
// // let l =Boolean(40);
// // console.log(l)



// for (var i = 0, l1 = arr.length; i < l1; i++) {


//     for (var j = 0, l2 = arr[i].length; j < l2; j++) {

//         console.log( arr[i][j] ); 
//         reduce
        
//     }
// }


// console.log(result);
// console.log(result);


// function flatArray(arr) {
//     let result = [];  // In this we`ll save the output;
//     let main = arr, first;
//     while(main.length > 0) {   //1. Looping it
//        first = main[0];
//        if(Array.isArray(first)) { 
//        Array.prototype.splice.apply(main, [0, 1].concat(first));
//     } else {
//        result.push(first);
//        main.splice(0, 1);
//     }
//  }
//     return result;
//  }
//  console.log(flatArray(arr)); // Flatten array [.........] 
var arr = [1,2,3,4,5];

var removed = arr.splice(2, 2, 'x');

console.log(removed);
console.log(arr);