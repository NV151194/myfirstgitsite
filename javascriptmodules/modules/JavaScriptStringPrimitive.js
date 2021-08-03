//String Access

//For accessing characters, you use 
//.chartAt().
//.charAt(index) takes an index (which starts at 0) and returns the character at that index location in the string.
'dog'.charAt(1); 
// returns "o"

//.substring(startIndex, endIndex), which will return the characters between the specified indices.
 'YouTube'.substring(1,2); 
 // returns 'o'
 'YouTube'.substring(3,7); 
 // returns 'tube'
 return 'YouTube'.substring(1); 
 // returns 'outube'


/*To find a specific string within a string, you can use
.indexOf(searchValue[, fromIndex]). This takes a parameter
that is the string to be searched as well as an optional parameter for the
starting index for the search. It returns the position of the matching
string, but if nothing is found, then -1 is returned.*/
 'Red Dragon'.indexOf('Red'); 
// returns 0
 'Red Dragon'.indexOf('RedScale'); 
// returns -1
 'Red Dragon'.indexOf('Dragon', 0); 
// returns 4
 'Red Dragon'.indexOf('Dragon', 4); 
// returns 4
 'Red Dragon'.indexOf('', 9); 
// returns 9


/*startsWith returns true (boolean) if the string starts with
the specified input, and endsWith checks whether the string ends with
the specified input.*/

 'Red Dragon'.startsWith('Red'); 
 // returns true
 'Red Dragon'.endsWith('Dragon'); 
 // returns true
 'Red Dragon'.startsWith('Dragon'); 
 // returns false
 'Red Dragon'.endsWith('Red'); 
 // returns false

/**/
/*String Decomposition
For decomposing a string into parts, you can use
.split(separator), which is a great utility function. It takes one
parameter (the separator) and creates an array of substrings.*/

var test1 = 'chicken,noodle,soup,broth';
 test1.split(","); 
// ["chicken", "noodle","soup", "broth"]

var test1 = 'chicken';
 test1.split(""); 
// ["c", "h", "i", "c", "k","e", "n"]

/*String Replace
.replace(string, replaceString) replaces a specified string
within a string variable with another string.*/

"Wizard of Oz".replace("Wizard","Witch"); 
// "Witch of Oz"


/**/
Regular Expressions
Regular expressions (regexes) are a set of characters that define a search
pattern.
JavaScript also comes with the native object RegExp, which is used
for regular expressions.
The constructor for the RegExp object takes two parameters: the
regular expression and the optional match settings, as shown here:
i Perform case-insensitive matching
g Perform a global match (find all matches
rather than stopping after first match)
m Perform multiline matching
RegExp has the following two functions:
search(): Tests for matches in a string. This returns the index of the
match.
match(): Tests for matches. This returns all the matches.
The JavaScript String object also has the following two regexrelated
functions that accept the RegExp object as an argument:
exec(): Tests for matches in a string. This returns the first match.
test(): Tests for matches in a string. This returns true or false.
Basic Regex
Here are the basic regex rules:
^: Indicates the start of a string/line
\d: Finds any digit
[abc]: Finds any character between the brackets
[^abc]: Finds any character not between the brackets
[0-9]: Finds any digit between the brackets
[^0-9]: Finds any digit not between the brackets
(x|y): Finds any of the alternatives specified
The following returns index 11, which is the index of the character D,
which is the first character of the matched regex:
 var str = "JavaScript DataStructures";
 var n = str.search(/DataStructures/);
 console.log(n); // prints '11'
Commonly Used Regexes
Regexes are immensely helpful for checking the validity of user input in
JavaScript. One common type of input check is to validate whether it has
any numeric characters.
The following are five regexes that developers often use.
Any Numeric Characters
/\d+/
 var reg = /\d+/;
 reg.test("123"); // true
 reg.test("33asd"); // true
 reg.test("5asdasd"); // true
 reg.test("asdasd"); // false
Only Numeric Characters
/^\d+$/
 var reg = /^\d+$/;
 reg.test("123"); // true
 reg.test("123a"); // false
 reg.test("a"); // false
Floating Numeric Characters
/^[0-9]*.[0-9]*[1-9]+$/
 var reg = /^[0-9]*.[0-9]*[1-9]+$/;
 reg.test("12"); // false
 reg.test("12.2"); // true
Only Alphanumeric Characters
/[a-zA-Z0-9]/
 var reg = /[a-zA-Z0-9]/;
 reg.test("somethingELSE"); // true
 reg.test("hello"); // true
 reg.test("112a"); // true
 reg.test("112"); // true
 reg.test("^"); // false
Query String
/([^?=&]+)(=([^&]*))/

/*Base64 Encoding
The btoa() function creates a Base64-encoded ASCII string from a
string. Each character in the string is treated as a byte (8 bits: eight 0 and
1s).
The .atob() function decodes a string of data that has been
encoded using Base64 encoding. For example, the string “hello I love
learning to computer program” in a Base64-encoded string looks like
this:*/




Iteration
Iteration is the process of accessing each of the items contained within a
data structure. There are multiple ways to iterate through an array in
JavaScript. They all have a time complexity of O(n) since the iteration is
visiting n number of elements.
for (Variables; Condition; Modification)
for is the most common method of iteration. It is most often used in this
form:
 for ( var i=0, len=array1.length; i<len; i++ ) {
 console.log(array1[i]);
 }
The previous code simply means initialize the variable i, check
whether the condition is false before executing the body (i<len), and
then modify (i++) until the condition is false. Similarly, you can use a
while loop. However, the counter will have to be set outside.
 var counter=0;
 while(counter<array1.length){
 // insert code here
 counter++;
 }
You can implement an infinite loop using a while loop, as shown
here:
 while(true){
 if (breakCondition) {
 break;
 }
 }
Similarly, a for loop can implement an infinite loop by not setting a
condition, as shown here:
 for ( ; ;) {
 if (breakCondition) {
 break
 }
 }
for ( in )
Another way to iterate a JavaScript array is to call the indices one by one.
The variable specified before in is the index of the array, as follows:
let array3 = ['all','cows','are','big'];

for (let index in array3) {
 console.log(index);}
//This prints the following: 0,1,2,3.
//To print the content, use this:
 for (let index in array3) {
 console.log(array3[index]);
 }
//This printsall, cows, are, and big.
/*for ( of )
The variable specified before of is the element (the value) of the array,
as follows:*/
 for (let element of array3) {
 console.log(element);
 }
//This prints out all, cows, are, and big.
/*forEach( )
The big difference between forEach and other methods of iteration is
that forEach cannot break out of the iteration or skip certain elements
in the array. forEach is more expressive and explicit by going through
each element.*/

array3.forEach( function (element, index){
 console.log(element);
 });

array3.forEach( function (element, index){
 console.log(array3[index]);
 });
//Both print all, cows, are, and big.





