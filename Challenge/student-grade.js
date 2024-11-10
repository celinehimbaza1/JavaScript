// a program that display student grade based on marks
// prompt help us to enter input from the keyboard/(from the user choice)

let prompt =  require('prompt-sync')();
let marks = prompt('Enter student mark :')
let grade

console.log(marks)
if (marks >= 80 && marks <=100){
grade = 'A'
} else if (marks >= 70 && marks < 80){
    grade = 'B'
} else if (marks >= 60 && marks < 70){
    grade = 'C'
} else if (marks >= 50 && marks < 60){
    grade ='D'
} else if (marks >=0 && marks < 50){
    grade ='Fail'
}else{
    grade= 'Unclassified'
}

console.log('Student grade is:' +grade)