let myValidation=function(){
    let myValue=document.querySelector("#myform").value
    if(isNaN(myValue) || myValue<1 || myValue>20)
        console.log("Invalid Input");
    else
        console.log("Valid Input");
}