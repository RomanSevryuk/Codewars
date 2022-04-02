/*Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples*/


function sumMul(n,m){
    let sumForOut = n;
    if (n > 0 && m > 0 && Number.isInteger(n) && Number.isInteger(m)) {
        for (let i = 0; i < m; i++ ) {
            sumForOut += n;
        }
    } else {
        return "INVALID";
    }
    return sumForOut;
}

    console.log(sumMul(4, 12))