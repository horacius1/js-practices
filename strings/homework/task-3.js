var searchWord = (str,word) => {
  let count=0
       
       var words=str.split(/([_\W])/)
        if (typeof str  !== 'string' && typeof word  !== 'string'){
            throw new error('error: parameter is not a string')

        }
        {
            for (i=0 ; i<words.length ;i++){
                if (words[i]=== word)
                count++
            }
        }
        return  word + ' was found '+ count +' times'
        
    }
   
try{
console.log (searchWord('The quick brown fox', 'fox'))
}
catch (e){
    console.log(e.massage)
}