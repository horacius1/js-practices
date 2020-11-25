 // 120


var extractCurrencyValue = str =>{
    if (typeof str !== 'string')
    {
        throw new Error("error: parameter is not a string");
    }
 else {
    var currency = str.replace(/\D/g,'');
    return currency;
}
}
try {
console.log(extractCurrencyValue(12))
}
catch (error)
{
    console.log(error.message)
}