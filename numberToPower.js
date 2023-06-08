function numberToPower(number, power){
    //console.info(Math.log2(1024));
    let res = 1//100
    for(let i = 1; i <= power; i++) {
        res *= number
    }
    return res
}

console.log(numberToPower(10, 6))

numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000

/*function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}*/