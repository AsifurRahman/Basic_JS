


let as=[{
    name:'Asif',
    id:'IT-13034',
    age:25,
    dist:'Kishtia',
    dept:'ICT'

},{

    name:'Tareq',
    id:'IT-13020',
    age:24,
    dist:'Sherpur',
    dept:'ICT'
},{

    name:'Babu',
    id:'BB-13005',
    age:26,
    dist:'Meherpur',
    dept:'BBA'
}]


let findAs=function(asob){
    let pos=asob.findIndex(function(ob){
        return ob.dept==='BBA'
    })
    return pos;
          
}
console.log(as[findAs(as)]);

// let index=as.findIndex(function(ob,index){
//     return ob.dept=='ICT'
// })

// console.log(as[index]);