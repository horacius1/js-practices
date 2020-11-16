var arr = [1, -3, -2, 4];
var i;
var b=0;
for (i of arr)
{
    if (i>0)
    {
        b=b+i
    }
}
console.log(b)