# Student grade challenge

Hello, this is a Javascript program that displays a range of 3 student marks based on a student’s grade.
Use if conditions to check for each grade and output the corresponding mark range.

# What you will need to run the program:intallation

- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)
  

# code I have used:

// a program that display student grade based on marks
// prompt help us to enter input from the keyboard/(from the user choice)

    let prompt = require("prompt-sync")();

    function getGrade(marks) {
    if (marks >= 80 && marks <= 100) {
    return "A";
    } else if (marks >= 70 && marks < 80) {
    return "B";
    } else if (marks >= 60 && marks < 70) {
    return "C";
    } else if (marks >= 50 && marks < 60) {
    return "D";
    } else if (marks >= 0 && marks < 50) {
    return "E";
    } else {
    return "Unclassified";
    }
    }

    function calculateGrade() {
     for (let i = 0; i <= 5; i++) {
    let marks = prompt("enter student mark:");
    let grade = getGrade(marks);
    console.log(`Marks: ${marks}, Grade: ${grade}`);
    }
    }

    calculateGrade();
