// a program that display student grade based on marks
// prompt help us to enter input from the keyboard/(from the user choice)

let prompt = require("prompt-sync")();
let studentName = prompt("Enter the first student name :");
let marks = prompt("Enter student mark :");
let grade;

// console.log(marks)

if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 70 && marks < 80) {
  grade = "B";
} else if (marks >= 60 && marks < 70) {
  grade = "C";
} else if (marks >= 50 && marks < 60) {
  grade = "D";
} else if (marks >= 0 && marks < 50) {
  grade = "Fail";
} else {
  grade = "Unclassified";
}

console.log("Student grade is:" + grade);

//Grade of the second student

let studentName2 = prompt("Enter second student name :");
let mark2 = prompt("Enter student mark :");
let grade2;
if (mark2 >= 80 && marks <= 100) {
  grade2 = "A";
} else if (mark2 >= 70 && marks < 80) {
  grade2 = "B";
} else if (mark2 >= 60 && marks < 70) {
  grade2 = "C";
} else if (mark2 >= 50 && marks < 60) {
  grade2 = "D";
} else if (mark2 >= 0 && marks < 50) {
  grade2 = "Fail";
} else {
  grade2 = "Unclassified";
}

console.log("Student grade is:" + grade2);

//Grade of the third student

let studentName3 = prompt("Enter third student name :");
let mark3 = prompt("Enter student mark :");
let grade3;
if (mark3 >= 80 && marks <= 100) {
  grade3 = "A";
} else if (mark3 >= 70 && marks < 80) {
  grade3 = "B";
} else if (mark3 >= 60 && marks < 70) {
  grade3 = "C";
} else if (mark3 >= 50 && marks < 60) {
  grade3 = "D";
} else if (mark3 >= 0 && marks < 50) {
  grade3 = "Fail";
} else {
  grade3 = "Unclassified";
}

console.log("Student grade is:" + grade3);
