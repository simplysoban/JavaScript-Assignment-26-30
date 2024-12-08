console.log("------------------------------------")
console.log("Question 1")
console.log("------------------------------------")


var one = prompt("Enter a positive floating number: ");

console.log("POSITIVE:")

if(one>0){
    console.log("Your number: ", one);
    console.log("Round off value: ", Math.round(one));
    console.log("Floor value: ", Math.floor(one));
    console.log("Ceil value: ", Math.ceil(one));
}
else{
    console.log("Please enter a positive number.");
}


console.log("------------------------------------")
console.log("Question 2")
console.log("------------------------------------")


console.log("NEGATIVE:")

var two = prompt("Enter a negative floating number: ");

if(two<0){
    console.log("Your number: ", two);
    console.log("Round off value: ", Math.round(two));
    console.log("Floor value: ", Math.floor(two));
    console.log("Ceil value: ", Math.ceil(two));
}
else{
    console.log("Please enter a negative number.");
}


console.log("------------------------------------")
console.log("Question 3")
console.log("------------------------------------")


var absNum = Number(prompt("Enter a negetave number to get its absolute value: "));
console.log("Absolute value of the number: ", Math.abs(absNum));


console.log("------------------------------------")
console.log("Question 4")
console.log("------------------------------------")


var dice = Math.ceil(Math.random()*6);
console.log("Random dice value: " + dice)


console.log("------------------------------------")
console.log("Question 5")
console.log("------------------------------------")


var coin = Math.ceil(Math.random()*2);

console.log("Heads & Tails: ");
if(coin === 1){
    console.log("Tails");
}
else if(coin === 2){
    console.log("Heads");
}


console.log("------------------------------------")
console.log("Question 6")
console.log("------------------------------------")


var randomNum = Math.round(Math.random()*99)+1;
console.log("Random number between 1 - 100: ", randomNum);


console.log("------------------------------------")
console.log("Question 7")
console.log("------------------------------------")


var userWeight = prompt("Enter your weight in kg: ");

var weight = parseFloat(userWeight);

if(weight != isNaN){
    console.log("User weight is: " + weight + "kg");
}else{
    console.log("Invalid weight");
    
    
}


console.log("------------------------------------")
console.log("Question 8")
console.log("------------------------------------")


var secretNum = 6;
var userGuess = Number(prompt("Guess a number between 1 - 10: "))

if (userGuess === secretNum){
    console.log("Congratulation! You guessed it.");
}else{
    console.log("Try Again!")
}