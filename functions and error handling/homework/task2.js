 var testVal3 = [1, 2, 3];
    
    function f(arr){
        if(!(Array.isArray(arr))){
        throw new TypeError("Error: parameter type should be an array");
        }
        else if(arr.length === 0){
        throw new RangeError ("Error: parameter can't be an empty")
        }
        else {
        console.log(arr[0]);
        if(arr.length > 1){
            f(arr.splice(1));
        }
        }
    }

    try {
        f()
    }
    catch(error){
        console.log(error);
    }
    f(testVal3)