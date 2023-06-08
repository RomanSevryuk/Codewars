/*Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
Создайте функцию, которая принимает целое положительное число и возвращает следующее большее число,
которое можно составить, переставляя его цифры. Например:

12 ==> 21
513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
9 ==> -1
111 ==> -1
531 ==> -1*/


/*function nextBigger(n){
    let nArr = String(n).split('')
    let resultArr = []
    for (let i = 0; i < nArr.length; i++) {
        if (nArr[i] > nArr[i+1]) {
            resultArr = [nArr[i]]
        } else if (nArr[i] < nArr[i+1]) {
            resultArr = [ ...resultArr, nArr[i+1], nArr[i]]
        }

    }
    return resultArr
}*/

/*
function nextBigger(n) {
    const sortedDigits = (n) => {
        ('' + n).split('').sort((a, b) => b - a)
    const max = +sortedDigits(n).join('')
    for (let i = n + 1; i <= max; i++) {
        if (max === +sortedDigits(i).join('')) return i
    }
    return -1
    }
}

console.log(nextBigger(2017))*/