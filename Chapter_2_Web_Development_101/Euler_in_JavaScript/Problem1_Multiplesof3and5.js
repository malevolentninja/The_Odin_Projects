/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
Firstly need to look at every numvber up to and including 1000. 
variable i = 1 means an increment of 1 will happen everytime until 1000

Secondly find out if i was divisible by 3 or 5. 
modulo (%) operator was used
If 0 is returned then is must be a mutiple of 3 or 5. 
Finally create a variable to hold the total of all the numbers
multiples of either 3 or 5 and add them together. */

var total = 0;
for (var i = 1; i < 1000; i++){
	if ((i % 3 == 0) || (i % 5 == 0)) {
		total += i;
	}	
}
console.log(total);
