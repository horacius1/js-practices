var searchWord = (str,word) => {
  let count=0
       
       var words=str.split(/([_\W])/)
        
        {
            for (i=0 ; i<words.length ;i++){
                if (words[i]=== word)
                count++
            }
        }
        return  word + ' was found '+ count +' times'
        
    }
   

console.log (searchWord('The quick brown fox', 'fox'))
