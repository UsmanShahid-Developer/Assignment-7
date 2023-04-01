


// ============Program # 1==============
// Write a js program to find maximum between two numbers.



var num1 = prompt("Enter a Number 1")
var num2 = prompt("Enter a Number 2")
if (num1>num2){
    console.log("Num1 bara hai Num2 sy");
} 
else if (num1<num2){
    console.log("Num2 bara hai Num1 sy");
}
if (num1==num2){
    console.log("Both Numbers are equals");
}
// _________________________________________________________________________
// _________________________________________________________________________


// ============Program # 2==============
// Write a js program to find maximum between three numbers.



var num1 = prompt("Enter a number 1")
var num2 = prompt("Enter a number 2")
var num3 = prompt("Enter a number 3")
if(num1>num2 &&num1>num3){
    console.log("Number1 bara hy number2 aur number3 sy");
}
else if(num2>num1 &&num2>num3){
    console.log("Number2 bara hy number1 aur number3 sy");
}
else if(num3>num1 &&num3>num2){
    console.log("Number3 bara ha number 1 aur number2 sy");
}
else{
    console.log("All Numbers Are Equals.");
}
// _________________________________________________________________________
// _________________________________________________________________________




// ============Program # 3==============
// Write a js program to check whether a number is negative,positive or zero.


var number1 = prompt("enter a number 1")
if (number1>0) {
    console.log("Number is Positive")
}
else if(number1<0){
    console.log("Number is Negative")
}
else{
    console.log("Equal to zero");
}


// _________________________________________________________________________
// _________________________________________________________________________


// ============Program # 4==============
// Write a js program to check whether a number is divisible by 5 or 11 or not.

var number1 = prompt("Enter a Number.")
if (number1%5==0) {
    console.log("Your Number is Divisible of 5.")
}
else if (number1%11==0){
console.log("Your Number is Divisible of 11.");
}
else {
    console.log("Not a Divisible of 5 or 11.");
}


// _________________________________________________________________________
// _________________________________________________________________________



// ============Program # 5==============
// Write a js program to check wheather number is even or odd.

var number = prompt("Enter a Number")
if (number%2==0){
console.log("Number is Even.");
}
else {
    console.log("Number is odd.");
}


// _________________________________________________________________________
// _________________________________________________________________________
