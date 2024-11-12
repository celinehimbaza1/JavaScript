// logical And operator (&&) execute only it 2 conditions are true.otherwise false
// logical Or operator (||) execute if atleast one condition is true. otherwise false

let temp =9

if (temp >= 50 && temp <= 80){
    console.log('pretty nice!')
}
if (temp <= 10 || temp >= 110){
    console.log('Dont go outside')
}

let isguestoneVigan= true
let isguesttwovigan=false

if (isguestoneVigan && isguesttwovigan ){
    console.log('please offer v food')
}
else if (isguestoneVigan || isguesttwovigan){
    console.log('one of food be v')
}
else{
    console.log('offer any of the menu')
}