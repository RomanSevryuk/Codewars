/*Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0*/

function sameCase(a, b){
    let aCase = 0;
    let bCase = -1;
    if (typeof (a, b) === "string") {        
    if (a.toUpperCase() === a) {
        aCase = 1;
    }
    if (b.toUpperCase() === b) {
        bCase = 1;
    }
    if (a.toLowerCase() === a) {
        aCase = 2;
    }
    if (b.toLowerCase() === b) {
        bCase = 2;
    }
    if (aCase === bCase) {
        return 1;
    } else if (/[a-zA-Z]/.test(a) === false || /[a-zA-Z]/.test(b) === false || a === "\t" || b === "\t") {
        return -1;
    }
    else {
        return 0;
    }
}
return -1;
}  



  console.log(sameCase("?", "Z"))