const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
const equals = document.getElementById('equals')
const valcal = document.getElementById('inputval')
let inputValue;

buttons.forEach((item)=>{
    item.onclick = ()=>{
    if(item.id == 'clear'){
        display.value = ''
    } 

    else if(item.id=='backspace'){
        let string = display.value.toString()
        display.value = string.substr(0 , string.length-1)
    }
    // else if(display.value == '='){
    //     display.value = eval(display.value)
    //     alert("jkjjjjjj")
    // }

    // else if(display.value='' && item.id =='equals'){
    //     console.log('inconsole')
    // }

    else{
        valcal.value += item.id
    }
}
})
equals.addEventListener('click',()=>{
    inputValue = valcal.value;
//    / if(inputValue.length == )
try{
    valcal.value = eval(inputValue)
    if(inputValue.length == 0  ){
        alert('please provide the input')
    }else{

    
    console.log("in try")
}
}
catch(error){
    console.log(error.message)
    console.log('haall')

}
 
   
//    alert(inputValue)
})