/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.
Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив,
содержащий те же строки, упорядоченные от самой короткой до самой длинной.
*/

function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length)
}


console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))