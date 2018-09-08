
var numArray=['one','two','three','four','five','six']

console.log(numArray);
//Start

console.log(numArray.shift());// (Pop)Deleting the 1st element

console.log(numArray);


numArray.unshift('New-One');//(Push)Inserting value into the 1st index

console.log(numArray);

//middle

numArray.splice(2,2,'Added-Three', 'Added-Four');
console.log(numArray);


//end

numArray.pop();//deleting the last element

console.log(numArray);

numArray.push('new-Six');

console.log(numArray);
