/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 * Declare a function called laugh() that returns "hahahahahahahahahaha!". 
 * Print the value returned from the laugh() function to the console.
 */

// your code goes here
function laugh(){
    var sound = "hahahahahahahahahaha!";
    return sound;
}
console.log(laugh());


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num){
    var sound = "";
    for (var i=1; i<=num; i++){
        sound += "ha";
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(3));


/*
 * Programming Quiz: Build A Triangle (5-3)
 * For this quiz, you're going to create a function called buildTriangle() that will accept an input 
 (the triangle at its widest width) and will return the string representation of a triangle. See the example output below.

		buildTriangle(10);
		Returns:

		* 
		* * 
		* * * 
		* * * * 
		* * * * * 
		* * * * * * 
		* * * * * * * 
		* * * * * * * * 
		* * * * * * * * * 
		* * * * * * * * * *
		We've given you one function makeLine() to start with. 
		The function takes in a line length, and builds a line of asterisks and returns the line with a newline character.

		function makeLine(length) {
		  var line = "";
		  for (var j = 1; j <= length; j++) {
			line += "* "
		  }
		  return line + "\n";
		}
		You will need to call this makeLine() function in buildTriangle().

		This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. 
		What tools will you need from your JavaScript tool belt? 
		Professionals plan out their code before writing anything. 
		Think through the steps your code will need to take and write them down in order. 
		Then go through your list and convert each step into actual code. Good luck!
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(height) {
    var model = "";
    for (var i = 1; i <= height; i++){
        model = model + makeLine(i);
    }
    return model;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));


/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" 
 and outputs the number of "ha"s that you pass in as an argument.
		laugh(3);
		Returns: hahaha!
 */

//var laugh = /* finish the function expression */

var laugh = function(num){
    var sound = "";
    for(var i=1; i<=num; i++){
        sound = sound + "ha";    
    }
    sound = sound + "!";
    return sound;
}

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 * Write a named function expression that stores the function in a variable called cry and returns "boohoo!". 
 Don't forget to call the function using the variable name, not the function name:
		cry();
		Returns: boohoo!
 */

// your code goes here
var cry = function shout(){
    var sound = "boohoo!";
    return sound;
}

console.log(cry());


/*
 * Programming Quiz: Inline Functions (5-6)
 * Call the emotions() function so that it prints the output you see below, 
 but instead of passing the laugh() function as an argument, pass an inline function expression instead.
		emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
		Prints: "I am happy, haha!"
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function(num){
    var sound = "";
    for(var i=1; i<=num; i++){
        sound = sound + "ha";    
    }
    sound = sound + "!";
    return sound;
});
