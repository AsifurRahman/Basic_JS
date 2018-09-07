

//let myElement=document.querySelectorAll('p')
//console.log(myElement[2]);


//let myElement=document.querySelector('#pid')
//let myElement=document.querySelector('.pclass')
//console.log(myElement);



//changin the para value through JS
//let myElement=document.querySelector('p')
//myElement.textContent='I am  now Changed  in 1st elemnt'

//Using Loop
// let myElement=document.querySelectorAll('p')
// myElement.forEach(function(p){
//     p.textContent='I am changed using loop in JS'
// })




//Adding new elemnt through JS
// const myNewPara=document.createElement('p')
// myNewPara.textContent='This para is added via JS'
// document.querySelector('body').appendChild(myNewPara)

// document.querySelector('button').addEventListener('click',function(event){
//     event.target.textContent='I was Clicked';
// })



// document.querySelector('#myform').addEventListener('change',(event) => {
//     console.log(event.target.value);
    
// })



document.querySelector('#myform').addEventListener('input',(event) => {
    console.log(event.target.value);
    
})

