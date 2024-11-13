let prompt = require("prompt-sync")();
function getGrade(marks) {
    if (marks >= 85 && marks <= 100) {
      return "A";
    } else if (marks >= 70 && marks < 85) {
      return "B";
    } else if (marks >= 55 && marks < 70) {
      return "C";
    } else if (marks >= 40 && marks < 55) {
      return "D";
    } else if (marks >= 0 && marks < 40) {
      return "F";
    } else {
      return "Invalid marks";
    }
  }
  
  function calculateGrades() {
    let continueEntering = true;
  
    while (continueEntering) {
      // Prompt user to enter marks
      const marks = parseInt(prompt("Enter student marks (0-100):"), 10);
      
      // Calculate and display the grade based on marks entered
      const grade = getGrade(marks);
      console.log(`Marks: ${marks}, Grade: ${grade}`);
  
      // Ask if the user wants to enter another student's marks
      const userResponse = prompt("Do you want to enter another student's marks? (yes/no)").toLowerCase();
  
      // Check if the user wants to continue or stop
      if (userResponse !== "yes") {
        continueEntering = false;
      }
    }
  }
  
  // Run the program
  calculateGrades();
  