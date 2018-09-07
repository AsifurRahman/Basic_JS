

var myGrade=function(curmark,totalmark) {
    var gradeParcentage=(curmark/totalmark)*100;
    if(gradeParcentage>=80){
        console.log(+'A+');
    }
    else if(gradeParcentage>=70){
        console.log('A');
    }
    else if(gradeParcentage>=60){
        console.log('B');
    }
    else if(gradeParcentage>=50){
        console.log('C');
    }       
    else if(gradeParcentage>=40){
        console.log('D');
    }
    else{
        console.log('F');
    } 
}


myGrade(35,80);