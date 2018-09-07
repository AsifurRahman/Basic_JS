


var days=['Sat','Sun','Mon','Tue','Wed','Thi','Fri'];


days.forEach(function(day,pos){
    console.log('Day No:'+(pos+1)+' and Day Name:'+day)
});


for (index = 0; index < days.length; index++) {
     element = days[index];
    console.log(element);

}



// How can i pass a function into for each loop?
var myind=[1,6,2,6]

var sayHello=function(){
    console.log('Hello Coder!');
    
}

myind.forEach(sayHello);
