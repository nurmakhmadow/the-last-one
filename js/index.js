let string = 0
let number = 0
let boolean = 0
let object = 0
let others = 0

let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]

let first = arr.filter(stroka => {
    if (stroka = typeof(stroka) === 'string')
    return string+=stroka 
})

console.log(first);

let second = arr.filter(nomer=> {
    if (nomer = typeof(nomer) === 'number')
    return number+= nomer
})
console.log(second);

let third = arr.filter(bool=> {
    if (bool = typeof(bool) === 'boolean')
    return boolean+= bool
})
console.log(third);


let fourth = arr.filter(chor=> {
    if (chor = typeof(chor) === 'object')
    return object+= chor
})
console.log(fourth);

let fifth = arr.filter(last=> {
    if (last = typeof(last) === 'undefined')
    return others+= last
})
console.log(fifth);


console.log( 
    Math.max.length(first, second, third, fourth, fifth)
);

