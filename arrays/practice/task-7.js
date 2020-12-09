var arr = ['abcd', 'abcde', 'ab', 'abc'];

// // START
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//   arrLength[i] = arr[i].length;
// }
// // FINISH

//console.log( arrLength ); // 4,5,2,3
var callback = a =>  a.length

arr.map(callback);