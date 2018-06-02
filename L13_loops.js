/*
 * Programming Quiz: JuliaJames (4-1)
 * We're going to have you program your own version of FizzBuzz called "JuliaJames" (yes, imaginative, right?) 
 * Keep in mind that in an interview, you would want to write efficient code with very little duplication. 
 * We don't want you to worry about that for this question. Just focus on practicing using loops.
		Directions:
		Write a while loop that:
		Loop through the numbers 1 to 20
		If the number is divisible by 3, print "Julia"
		If the number is divisible by 5, print "James"
		If the number is divisible by 3 and 5, print "JuliaJames"
		If the number is not divisible by 3 or 5, print the number
 */

var x = 1;

while (x <= 20) {
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
    if(x % 3 === 0 && x % 5 !== 0){
        console.log("Julia");
    }else if(x % 5 === 0 && x % 3 !== 0){
        console.log("James"); 
    }else if(x % 3 === 0 && x % 5 === 0){
        console.log("JuliaJames");         
    }else{
        console.log(x); 
    }    
    x = x + 1;
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
    if(num != 1){
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }else{
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}


/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 
		Write a while loop that counts down from 60 seconds and:

		If there's a task being completed, it prints out the task
		If there is no task being completed, it prints out the time as T-x seconds
		Use the task and time descriptions described above.

		Your Code:
		Your output should look like the following:

		T-60 seconds
		T-59 seconds
		T-58 seconds
		...
		T-51 seconds
		Orbiter transfers from ground to internal power
		T-49 seconds
		...
		T-3 seconds
		T-2 seconds
		T-1 seconds
		Solid rocket booster ignition and liftoff!
 
 */

// your code goes here

var timeToLaunch = 60;

while (timeToLaunch >= 0){
    switch(timeToLaunch){
        case 50:
            console.log("Orbiter transfers from ground to internal power");
            break;
        case 31:
             console.log("Ground launch sequencer is go for auto sequence start");
            break;           
        case 16:
            console.log("Activate launch pad sound suppression system");
            break;
        case 10:
            console.log("Activate main engine hydrogen burnoff system");
            break;    
        case 6:
            console.log("Main engine start");
            break;
        case 0:
            console.log("Solid rocket booster ignition and liftoff!");
            break;  
        default:
            console.log("T-" + timeToLaunch + " seconds");        
    }
    timeToLaunch = timeToLaunch - 1;
}


/*
 * Programming Quiz: Changing the Loop (4-4)
 * Rewrite the following while loop as a for loop:
		var x = 9;
		while (x >= 1) {
		  console.log("hello " + x);
		  x = x - 1;
		}
 */

// rewrite the while loop as a for loop
for(var x = 9; x >= 1; x--) {
    console.log("hello " + x);
}


/*
 * Programming Quiz: Fix the Error 1 (4-5)
 * Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
		for (x < 10; x++) {
		  console.log(x);
		}
 */

// fix the for loop
for (var x = 5; x < 10; x++) {
    console.log(x);
}


/*
 * Programming Quiz: Fix the Error 2 (4-6)
 * The for loop below has an error. Fix it!
		for (var k = 0 k < 200 k++) {
		  console.log(k);
		}
 */

// fix the for loop
for (var k = 0; k < 200; k++) {
    console.log(k);
}


/*
 * Programming Quiz: Factorials (4-7)
 * Write a for loop that prints out the factorial of the number 12:
		A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6
		3! = 3 * 2 * 1 = 6 (3!=3∗2∗1=6)
		4! = 4 * 3 * 2 * 1 = 24 (4!=4∗3∗2∗1=24)
		5! = 5 * 4 * 3 * 2 * 1 = 120 (5!=5∗4∗3∗2∗1=120)
		Save your final answer in a variable called solution and print it to the console.
 */

// your code goes here
var solution = 1;
for(var x = 1; x <= 12; x++){
    solution = solution * x;
}
console.log(solution);


/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for(var row = 0; row <= 25; row++){
    for(var seat = 0; seat <=99; seat++){
        console.log(row + "-" + seat);
    }
}
