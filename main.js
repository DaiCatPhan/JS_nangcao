const teacher = {
    firstName: 'Minh',
    lastName : 'Thu',

}

function greet(greeting , message){
    return `${greeting} ${this.firstName} ${this.lastName}.${message}`

}

let result = greet.apply(teacher,['Em chao co' , 'Co day mon j the a'])

console.log(result);

// So sanh vs call() method

let result_call = greet.call(teacher,'Em chao co' , 'Co day mon j the a')
console.log(result_call);
