function add(a,b){
    return a+b;
}
function mult(a,b){
    return a*b
}
let mul= mult(3,2)
let result = add(3,4)
console.log('the sum is:' +result)
console.log('the mult is:' +mul)

const person={
    name:'celine',
    address:'kanombe',
    weight:59,
    age:10
}
console.log('my name is ' + person.name + ' ' + 'i have' + ' ' +person['age'] + ' ' + 'years old')