function remainder(a,b){
    let rem;
if (a>b){
   rem= a % b;
   console.log(rem)
    
}
else if (b>a){
    rem= b % a;
    console.log(rem)
}
else{
    console.log('try again!')
}
}

remainder(2,3)