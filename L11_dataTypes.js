/*
 * Programming Quiz: First Expression (2-1)
 *
 * Write an expression that uses at least three, different, arithmetic operators
 * to log the number 42 to the console.
 */

// this expression equals 4, change it to equal 42
console.log(4 + 5 * 8 - 2);


/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the forumla above
 * 2. Log the fahrenheit variable to the console
 *
 */

var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;/* convert celsius to fahrenheit here */

console.log(fahrenheit);


/*
 * Programming Quiz: Favorite Food (2-3)
 * Create a string with the name of your favorite food. The first letter of the string should be capitalized.
 */
var favoriteFood = "Maize";

console.log(favoriteFood);


/*
 * Programming Quiz: String Equality for All (2-4)
 * Fix the right side expression so it evaluates to true.
		"ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);


/*
 * Programming Quiz: All Tied Up (2-5)
 * Build a single string that resembles the following joke.
		Why couldn't the shoes go out and play?
		They were all "tied" up!
 * Your joke should take the format of a question and answer. The first line should be a question and the second line should be an answer.
 */

var joke = "Why couldn\'t the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);


/*
 * Programming Quiz: Yosa Buson (2-6)
 * Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
		Blowing from the west
		Fallen leaves gather
		In the east.
 * Each string should be printed on its own line.
 */

var haiku = "Blowing from the west"+"\n"+"Fallen leaves gather"+"\n"+"In the east.";
console.log(haiku);


/*
 * Programming Quiz: Semicolons! (2-8)
 * Define two variables called thingOne and thingTwo and assign them values. 
 * Print the values of both variables in one console.log statement using concatenation. For example,
		red blue
		where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolons!
 */

// your code goes here
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + " " + thingTwo);


/*
 * Programming Quiz: What's my Name? (2-9)
 * Create a variable called fullName and assign it your full name as a string.
 */

// your code goes here
var fullName = "Barack Wanjawa";


/*
 * Programming Quiz: Out to Dinner (2-10)
 *
 * Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). 
 * Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. #
 * Finally, add the bill and tip together and store it into a variable called total.
 * Print the total to the JavaScript console.
 * Hint: 15% in decimal form is written as 0.15.
 * TIP: To print out the total with a dollar sign ( $ ) use string concatenation. 
 * To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. 
 * For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
 */

// your code goes here
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15;
var total = bill + tip;

console.log(total);


/*
 * Programming Quiz: MadLibs (2-11)
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

// your code goes here
var madLib = 'The Intro to JavaScript course is '+ adjective1 +'. James and Julia are so '+ adjective2 +'. I cannot wait to work through the rest of this '+ adjective3 +' content!';


/*
 * Programming Quiz: One Awesome Message (2-12)
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

// Add your code here
var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is "+ firstName +". I love "+ interest +". In my spare time, I like to "+ hobby +".";

console.log(awesomeMessage);
