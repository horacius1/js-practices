var truncate = (string, maxlength) => 
{
    if (string.length > maxlength ) {
        var spliced = string.slice(-string.lenght,maxlength,) + '...'
        return spliced

    }
}
console.log ( truncate('test string 123',5))