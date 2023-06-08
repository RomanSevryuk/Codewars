function customMap (arr) {
    return function (inc) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += inc
        }
        return arr
    }
}

console.log(customMap([1,2,3])(1))


const customMap1 = {
    mapping (arr, inc) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += inc
        }
        console.log(arr)
    }
}

customMap1.mapping([1,2,3,4,5], 2)