let ans=0;
let screen_output=document.querySelector("#screen-ans");


let input_parent=document.querySelector("#button-panel");

function main(){

input_parent.addEventListener("click",function(event){
    // console.log("button was clicked")
let button_clicked=event.target;
    let button_value=button_clicked.innerText;

    if(button_value=="C"){
        screen_output.innerText=screen_output.innerText.slice(0,-1);
    }
    else if(button_value==="+/-"){
        if(ans==0){
            screen_output.innerText=ans;
    }else{
        ans=eval(screen_output.innerText);
        screen_output.innerText=-ans;
    }
}
    else if(button_value==="%"){
        ans=ans/100;
        screen_output.innerText=ans;
    }
    else if(button_value==="="){
        ans=eval(screen_output.innerText);
        screen_output.innerText=ans;  
    }else{
        if(screen_output.innerText=="0"){
            screen_output.innerText=button_value;
        }else{
            screen_output.innerText+=button_value;
        }
    }
});
}
main();