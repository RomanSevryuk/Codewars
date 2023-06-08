function findAverage(array) {
    let acc = null
    for (let i = 0; i < array.length; i++) {
        acc += array[i]
    }
    if (array.length > 0) {
        return acc / array.length
    } else {
        return 0
    }
}

console.log(findAverage([1,2,3,4,5,6]))