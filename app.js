for (let num = 1; num <= 100; num++) {

    if (num % 3 == 0 && num % 5 == 0)
        console.log("FIZZbUZZ")
    else if (num % 3 == 0) {
        console.log("FIZZ")
    }
    else if (num % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(num)
    }

}


