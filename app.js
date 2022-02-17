// 1. VERBAL QUESTIONS 

// 1. What is the difference between a parameter and an arguement? 
// a parameter is the input the function is taken, while the argument the specific value you want the function to output

// 2. Within a function, what is the difference between return and console.log? 
// return will return what the function is doing and can be used in data, while console.log will log into the console 

// 3. What are the implications of the ability of a function to return a value? 
// the value can be anything that matches the arguement and it will output the data 

// PALINDROME 

    // Write a function `checkPalindrome` that accepts a single argument, a string. 
    // See if you can do it without looking back at your previous answer. 
    // The function should return true if the string is a palindrome, false if not. 
    // Make sure your function will give the correct answer for words with **capital letters**.

const checkPalindrome = (word) => {
    let firstWord = word.toLowerCase().split("")
    let reverseWord = firstWord.reverse().join("")
    if (word.toLowerCase () === reverseWord){
        console.log("palidrome")
    }
    else {
        console.log("no palindrome")
    }
}

checkPalindrome("Radar")

// DIGIT SUM

    // Write a function `sumDigits` that accepts a number and returns the sum of its digits.

const sumDigits = (num) => {
    let numToString = num.toString()
    let array = numToString.split("")
    let sum = 0
    for (let i=0; i < array.length; i++) {
      sum += parseInt(array[i])
    }
    return sum
    }
    console.log(sumDigits(42))

// PYTHAGORAS 

    // Write a function `calculateSide` that takes two arguments: `sideA` and `sideB`, and returns the solution for sideC using the Pythagorean theorem.
    // _hint:_ discover the Pythagorean Theorem on a website called google.com
    // _hint:_ checkout the [Math methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) in javascript

const calculateSide = (sideA, sideB => {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
}

console.log(calculateSide(8, 6))

// SUM ARRAY 
    // Write a function `sumArray` that takes an **array** as an argument.
    // The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

const sumArray = (array) => {
    let sum = 0
    for (let i=0; i < array.length; i++) {
        sum += parseInt(array[i])
        }
        return sum
    }

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// PRIME NUMBERS 
    // A Prime number is a number that is not evenly divisible by another number except 1 and itself. 
    // If you want to read more deeply about it, [go here](https://en.wikipedia.org/wiki/Prime_number).
    // To test whether a number is Prime, you only need to test as far as the **square root** of that number. 
    // This is advisable for optimization and testing large numbers.
        // ### Step One
            // Write a function called `checkPrime` that will test whether a number is Prime. 
            //The function will return true (Boolean) if Prime, false if not.
            // _Hint:_ Check every number up to the square root. To do this, try a _for loop_.
        // ### Step Two
        // Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. 
        // For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
        // This function can **call on** the previous `checkPrime` function.

const checkPrime = (num) => {
    for (let = 0; i * i) = num; i++)
    if num === primeNumber {
        console.log("Prime!")
    }  
    else {
        console.log("Not Prime!")
    }
}

checkPrime("5")
