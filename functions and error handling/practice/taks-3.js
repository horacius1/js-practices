function days (i){
    if(i>0 && i<=7 ){

   
    switch (i)
    {
case    1:
    
    console.log('orshabati');
    break;
    case 2 :
        console.log('samsahabati');
        break;
        case 3:
            console.log('otxshabati');
        break;
        case 4 :
            console.log('xutshavati');
            break;
        case 5 :
            console.log('paraskevi') ;
            break;
        case 6: 
        console.log('shaatti') ;
        break;
        case 7:
        console.log('kvira');
        break;
       
    }
}
else{
    console.log('ylebaa')
}
}


try {
    days(6)
}
catch (e){
    console.log(e.message)
}
