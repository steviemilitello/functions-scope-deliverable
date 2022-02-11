// 1. VERBAL QUESTIONS 

// 1. What is the difference between a parameter and an arguement? 
// a parameter is the input the function is taken, while the argument the specific value you want the function to output

// 2. Within a function, what is the difference between return and console.log? 
// return will return what the function is doing and can be used in data, while console.log will log into the console 

// 3. What are the implications of the ability of a function to return a value? 
// the value can be anything that matches the arguement and it will output the data 

// PALINDROME 

const checkPalindrome = (word) => {
    let firstWord = word.toLowerCase().split("")
    let reverseWord = firstWord.reverse().join("")
    if (word.toLowerCase () === reverseWord) {
        console.log("palidrome")
    }
    else {
        console.log("no palindrome")
    }
}

checkPalindrome("Radar")

// DIGIT SUM 

const sumDigits = (num) => {
    return num.toString().split("")
} 

// PYTHAGORAS 

console.log(sumDigits(42))

const calculateSide = (sideA, sideB) => {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
}

console.log(calculateSide(8, 6));



