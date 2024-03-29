/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

/*Основная идея состоит в том, чтобы подсчитать все встречающиеся символы в строке. Если у вас есть строка типа aba,
    результат должен быть {'a': 2, 'b': 1}.
Что делать, если строка пуста? Тогда результатом должен быть пустой объектный литерал {}.*/


function count(string) {
    const resObj = {}
    const strAsArr = string.split('')
    strAsArr.forEach((el) => {
        resObj[el] ? resObj[el]++ : resObj[el] = 1
    })
    return resObj;
}

console.log(count('abab'))