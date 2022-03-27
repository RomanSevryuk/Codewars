// Given a number n, return the number of positive odd numbers below n, EASY!


/*function oddCount(n){
let j = 0;
    for (let i = 1; i < n; i++) {
        if (i % 2 !== 0) {
        
        j++;    
        }
    }
return j
}

console.log(oddCount(20))*/


function oddCount(n){
   
    return  Math.floor(n / 2);
    }    
        console.log(oddCount(15))