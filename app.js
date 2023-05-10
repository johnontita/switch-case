const day = 'Thursday';
switch(day){
    case 'Monday'://switch case behaves like strict equality operator(day==='Monday')
        console.log('plan course structure')
        console.log('go to coding meetup')
        break;
    case 'Tuesday'://day===Tuesday
        console.log('prepare theory')
        break;
    case 'Wednesday':
    case 'Thursday':    
        console.log('write code examples')
        break;
    case 'Friday':
        console.log('record vedios')
    case 'Saturday':
    case 'Sunday' :   
        console.log('enjoy the weekend') 
        break;
    default:
        console('this is invalid')  
                
}


//implementing the same in if else statements
// const dayIsMonday = false;
// const dayIsTuesday=false;
// const dayIsWednesday=true;
// const dayIsThursday= true
// const dayIsFriday= true;
// const dayIsSaturday= true;
// const dayIsSunday = true;
// if(dayIsMonday){
//     console.log('plan course structure');
//     console.log('go to coding meetup')
// }
// else if(dayIsTuesday){
//     console.log('prepare theory')

// }else if(dayIsWednesday&&dayIsThursday){
//     console.log('write code examples')

// }else if(dayIsFriday){
//     console.log('record vedios')
    
// }else if(dayIsSaturday&&dayIsSunday){
//     console.log('enjoy the weekend')
// }else{
//     console.log('this is invalid')
// }


//appropriate way

if(day==='Monday'){
    console.log('plan course structure');
    console.log('go to coding meetup')

}else if(day==='Tuesday'){
    console.log('prepare theory')

}else if(day==='Wednesday' ||day==='Thursday'){
    console.log('write code examples')


}else if(day==='Friday'){
    console.log('record vedios')

}else if(day==='Saturday'||day==='Sunday'){
    console.log('enjoy the weekend')

}else{
    console.log('this is invalid')
}
