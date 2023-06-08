/*You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Вам дан массив. Завершите функцию, которая возвращает количество ВСЕХ элементов в массиве, включая любые вложенные массивы.

    Examples
    []                   -->  0
    [1, 2, 3]            -->  3
    ["x", "y", ["z"]]    -->  4
    [1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.*/

function deepCount(arr1) {
    let result = 0

    function helper(arr2) {
        for (let i = 0; i < arr2.length; i++) {
            if (Array.isArray(arr2[i])) {
                result++
                helper(arr2[i])
            } else result++
        }
        return result
    }

    return helper(arr1)
}

console.log(deepCount([1, 2, [3, 4, [5]]]))


function deepCount1(arr) {
    let count = arr.length;
    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i]))
            count += deepCount1(arr[i]);
    return count;
}

console.log(deepCount1([1, 2, [3, 4, [5]]]))