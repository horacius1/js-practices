



let rmHtmlTags = (tags) =>{
    if (typeof tags !== 'string')
    {
        throw new error('error: parameter is not a string')
    }
    else {

       return tags.replace(/(<([^>]+)>)/gi,'')
    }

}
try{
console.log(rmHtmlTags('<p><strong><em>Content</em></strong></p>'))
}
catch (e){
    console.log(e.message)
}