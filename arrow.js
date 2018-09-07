

let myPegion=[{
    title:'Shiraji',
    col:'Black',
    isDone:true
},{
    title:'Kormona',
    col:'Red',
    isDone:false
},{
    title:'Shiraji',
    col:'Silver',
    isDone:true
},{
    title:'Gorra + Kagchi',
    col:'Black + White',
    isDone:false
}
]


let list=myPegion.filter((pg)=>{// function(pg){
    return pg.isDone===false
})


console.log(list);

let arrowList=myPegion.filter((pg)=> pg.isDone===true)

console.log(arrowList);