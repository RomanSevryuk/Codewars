/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/

function countPositivesSumNegatives(input) {
    let Positives = 0;
    let summNegatives = 0;
    if (input === null || input.length === 0) {
        return [];
    } else {
        for(let i = 0; i < input.length; i++) {
            if (input[i] < 0) {
            summNegatives += input[i];
            } else if (input[i] > 0) {
            Positives ++;
            }
        }
        return [Positives, summNegatives]
    }
        
}
let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(input))