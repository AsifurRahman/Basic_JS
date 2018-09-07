//creating Function
var myFun=function(firstName, secondName){
    console.log('This is a function');
    return firstName+" "+secondName    
}
console.log(myFun("Asifur","Rahman"));



//Default Parameter
var guestUser=function(name,value){
    console.log('the name:'+name+
    ' and value is:'+value);
 
 }
 guestUser();//will get null values

//checking parameter
  var myAdder=function(num1,num2){
       return num1+num2;
  }

  var myMultiply=function(num1,num2) {
      return num1*num2;
  }

  console.log(myAdder('10','2'));
  console.log(myMultiply('10','3'));


