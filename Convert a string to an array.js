/*Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]*/

function stringToArray(string){

	let arr = string.split(" ");
return arr
}

console.log(stringToArray("Robin Singh"))