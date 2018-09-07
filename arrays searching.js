

let myTodos=[{
    title: 'Buy Bread',
    isDone: false,
},{
    title:'Eat breakfast',
    isDone: true,
},{
    title: 'See JS Tutorial',
    isDone: true,

}]

console.log('----------------------------------------------');

let pos=myTodos.findIndex(function(ob,pos){

    //console.log(ob);
    return ob.title==='See JS Tutorial'
})

console.log(myTodos[pos])

console.log('----------------------------------------------');


//Another Approach-by Functions
let findTodo=function(todoOb, strparam) {
    let ind=todoOb.findIndex(function(todo,index){
        return todo.title.toLowerCase()===strparam.toLowerCase()
    })
    return todoOb[ind]
} 

let printMe=findTodo(myTodos,'SeE js Tutorial')
console.log(printMe);



console.log('----------------------------------------------');


let findTodo2=function(Ob2,strparam2){
    let ind2=Ob2.find(function(todo2){
        return todo2.title.toLowerCase()===strparam2.toLowerCase()
    })
    return Ob2[ind2]
}
let x=findTodo2(myTodos,'EaT breakfast')
console.log(x)