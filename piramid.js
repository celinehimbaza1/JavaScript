function pyramid(n){

    for (let i=0;i<n;i++){
let spaces= " ".repeat(n -i -1);
let star= "*".repeat(2 * i + 1);
console.log(spaces+star+spaces)
      
    }
}

pyramid(10);

// Fibonaci

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// The number comes next in the sequence is 233

// The sequence is that each number is the sum of the two previous numbers
// F(0) = 0
// F(1) = 1
// For n ≥ 2, the nth Fibonacci number is:
// F(n) = F(n-1) + F(n-2)