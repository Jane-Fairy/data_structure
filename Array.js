


//Creating an array using array literal
//let arrayName = [value1, value2, ...];
//Initializing while declaring
let courses = ["HTML", "CSS", "Javascript", "React"];
console.log(courses)


//Creating an array using the JavaScript new keyword
//let arrayName = new Array();
//Both the above methods do exactly the same. Use the array literal method for efficiency, readability, and speed.
let arr1 = new Array(3)// Initializing while declaring
arr1[0] = 10
arr1[1] = 20
arr1[2] = 30
console.log("Array 1: ", arr1)
 
let arr2 = new Array(10, 20, 30, 40, 50);// Creates an array having elements 10, 20, 30, 40, 50
console.log("Array 2: ", arr2)

let arr3 = new Array(5); // Creates an array of 5 undefined elements
console.log("Array 3: ", arr3)
 
let arr4 = new Array("1BHK");// Creates an array with one element
console.log("Array 4: ", arr4)


// Accessing Elements of an Array
// Any element in the array can be accessed using the index number. The index in the arrays starts with 0.
const courses = ["HTML", "CSS", "Javascript"];
console.log(courses[0])
console.log(courses[1])
console.log(courses[2])


// Change elements from a pre-defined array
// We will use index based method method to change the elements of array.
const courses = ["HTML", "CSS", "Javascript"];
console.log(courses)
courses[1]= "GeeksforGeeks"
console.log(courses)


// Convert an Array to String
// We have an in-built method toString() in Javascript that converts an array to a string.
const courses = ["HTML", "CSS", "Javascript"];
console.log(courses.toString())


// Increase and decrease the length of an array
// We can increase and decrease the length of an array using the Javascript’s length property.
const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5 // Increasing array length to 5
console.log("Array after increased length: " ,courses)
courses.length = 2 // Decreasing array length to 2
console.log("Array after decreased length: " ,courses)


//We can also update an array after initialization.
const courses = ["HTML", "CSS", "Javascript"];
courses.length = 5 // Increasing array length to 5
console.log("Array after increased length: " ,courses)
 
courses[3] = 'PhP'
courses[4] = 'React'
console.log("Array after initializing: ", courses)


//We can loop through the elements of a Javascript array using the for loop:    ->This can also be done by using the Array.forEach() function of Javascript.
const courses = ["HTML", "CSS", "Javascript"];
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i])
}


// Adding new elements to JavaScript Array
// Using the Javascript in-built push() method we can add new elements to an array.
const courses = ["HTML", "CSS", "Javascript"];
console.log("Original Array: ",courses)
courses.push("React")
console.log("Array after adding an element: ",courses)


//We can also add a new element to a Javascript array using the length property.
const courses = ["HTML", "CSS", "Javascript"];
console.log("Original Array: ",courses)
courses[courses.length] = "React"
console.log("Array after adding an element: ",courses)


// Finding the typeof JavaScript Arrays
// The Javascript typeof operator returns “object” for arrays.
const courses = ["HTML", "CSS", "Javascript"];
console.log(typeof courses)




// Difference between Javascript arrays and objects
// Javascript arrays use indexes as numbers while objects use indexes as names.

// When to use JavaScript Arrays and Objects?
// Arrays are used when we want element names to be numeric while Objects are used when we want element names to be strings.

// Recognizing a JavaScript Array
// There are two methods by which we can recognize a JavaScript array:

// ~By using Array.isArray() method
// ~By using instanceof method 
// Below is an example showing both approaches:
const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ",Array.isArray(courses))
console.log("Using instanceof method: ",courses instanceof Array)


//========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================


// It’s recommended to go through Arrays in JavaScript. JavaScript array contains some built-in properties that every JavaScript developer should know how to use and when or where to use them. We can use them to add, remove, iterate, or manipulate data as per our requirements.

// We will be discussing the following array methods:

// Javascript Array.push() Method
// Javascript Array.unshift() Method
// JavaScript Array.pop() Method
// JavaScript Array.shift() Method
// JavaScript Array.splice() Method
// JavaScript Array.slice() Method
// JavaScript Array some() Method
// JavaScript Array reduce() Method
// JavaScript Array map() Method


// Method 1: Javascript Array.push() Method
// Adding Element at the end of an Array. As arrays in JavaScript are mutable objects, we can easily add or remove elements from the Array. And it dynamically changes as we modify the elements from the array. 
// Syntax : Array.push(item1, item2 …)

// Adding elements at the end of an array
// Declaring and initializing arrays
let number_arr = [10, 20, 30, 40, 50];
let string_arr = ["piyush", "gourav", "smruti", "ritu"];
 
// push()
// number_arr contains [10, 20, 30, 40, 50, 60]
number_arr.push(60);
 
// We can pass multiple parameters to the push()
// number_arr contains
// [10, 20, 30, 40, 50, 60, 70, 80, 90]
number_arr.push(70, 80, 90);
 
// string_arr contains
// ["piyush", "gourav", "smruti", "ritu", "sumit", "amit"];
string_arr.push("sumit", "amit");
 
// Printing both the array after performing push operation
console.log("After push op ");
console.log(number_arr);
 
console.log("After push op ")
console.log(string_arr);


