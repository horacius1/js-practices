var checkSpam = (s, example) => 
{
    if (s.includes(example))
    {
        return true
    }
    return false
}

console.log(checkSpam('source','o'))