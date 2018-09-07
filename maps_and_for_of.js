
var asif={
    name:' I am Asif',
    age:26,
    isMarry:false
}


var arif={
    name:' I am Arif',
    age:27,
    isMarry:true
}


var mahin={
    name:' I am mahin',
    age:25,
    isMarry:false
}

let mp=new Map()

mp.set('mahin',mahin)
mp.set('asif',asif)
mp.set('arif',arif)
console.log('--------------Map Printing-------------')
console.log(mp);
console.log('---------Map Size---------')
console.log(mp.size);

console.log('--------Any specific element of map-------')

console.log(mp.get('asif'));


console.log('-----------Map keys annd Values------------')

console.log(mp.keys())
console.log(mp.values())

console.log('-------For of loop Iteration--------')

for (const iterator of mp) {
    console.log(iterator)
}


for (const value of mp.values()) {
    console.log(value.name)
}