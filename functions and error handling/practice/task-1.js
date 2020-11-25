function f(x){
    if (Number.isInteger(x))
    {
    var i=x**3
    return i;
    }
    else{
        throw new Error('Error: parameter type is not a Number')
    }
}
try{
console.log(f('aas'));
}
catch (e)
{
    console.log(e.message);
}

