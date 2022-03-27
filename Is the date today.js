//Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

//Make sure that your function does not return a false positive by just checking just the day.
    
    /*function isToday(date) {
        if (date.day === 27 && date.month === "march" && date.year === 2022) {
            return true;                
        } else {            
            return false;            
        }
    }

    let dateNow = {
        day: 27,
        month: "march",
        year: 2022
    }

    console.log(isToday(dateNow))*/

    function isToday(date) {
        return new Date().toDateString() === date.toDateString();
      }