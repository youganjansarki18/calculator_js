let screen=document.getElementById('screen');

let screenvalue='';
let buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>
    {
        buttonText=e.target.innerText;
        console.log("The button text is", buttonText);
        console.log("The screenvalue is ",screenvalue);
        
        if(buttonText=='X'){
            buttonText= '*';
            screenvalue = screenvalue + buttonText;
            screen.value = screenvalue;
        }
        else if(buttonText=='C'){
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if(buttonText=="="){
            screen.value = eval(screenvalue);
            screenvalue=screen.value;
        }
        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        console.log("The screen value is",screenvalue);
    })
}
