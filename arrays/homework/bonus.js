Array.prototype.swipe = function(index1, index2){
    var temp = this[index1];
    this[index1] = this[index2];
    this[index2] = temp;
}

// a = 1
//b = 2
// a = 2 b = 1
//  temporary = a = 1, 
//  a = b = 2, 
//  b = temporary = 1

function rotate(arr, count, direction){
    //if(!Array.isArray(arr) || arr == null) throw new Error('first parameter required and has to be only array');
    // if(typeof count !== 'number' || count == null) throw new Error('second parameter required and has to be number');
    // if(direction !=null && typeof direction !=='string') throw new Error('parameter type should be a string');
    // if(direction !=null && direction !=='left' && direction !=='right') throw new Error('parameter is optional and should be "left" or "right"');
    if(direction === 'right' || direction == null){
        while(count>0){
            for(let i = arr.length-1; i > 0; i--){
                arr.swipe(i,i-1);
            }
            count--;
        }
    }else if(direction === 'left'){
        while(count>0){
            for(let i = 0; i < arr.length - 1; i++){
                arr.swipe(i,i+1);
            }
            count--;
        }
    }
    return arr;
}

let arr = [1,2,3];
try{
    console.log(rotate(arr,1,'right'));
}catch(e){
    console.log(e.message);
}

//123
//231 left1
//312 right1
//rotate(arr, 1, 'left');  // result: [2,3,1]