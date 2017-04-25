
function isNumber(check) {
    'use strict';

    var del = check % 1;

    if ((typeof check === 'number') && (del === 0)) {
        return true;
    }
    return false;
}

function isNegative(check) {
    'use strict';

    if (check < 0)
        return true;
    return false;
}
function isPositive(check) {
    'use strict';

    if (check > 0)
        return true;
    return false;
}

function checkResult(val) {
    'use strict';

    if (isNumber(val))
        console.log("The value of " + val + " is a number");
    else
        console.log("The value of " + val + " isn't a number");
}

function first_Task() {
    'use strict';

    var str = "String";
    var number = 2;

    console.log("-------first-task------");
    checkResult(str);
    checkResult(number);
}

function printResult(val, negFlag, numberFlag, posFlag) {
    'use strict';

    if (numberFlag) {
        console.log("The value of " + val + " is a number");
        if (negFlag)
            console.log("The value of " + val + " is negative")
        else
            console.log("The value of " + val + " isn't negative")
        if (posFlag)
            console.log("The value of " + val + " is positive");
        else
            console.log("The value of " + val + " isn't positive");
    }
    else
        console.log("The value of " + val + " isn't a number");
}

function checkResultWithSign(val) {
    'use strict';

    if (isNumber(val)) {
        if (isNegative(val)) {
            printResult(val, true, true, false);
        }
        else {
            if (isPositive(val)) {
                printResult(val, false, true, true);
            }
            else
                printResult(val, false, true, false);
        }
    }
    else
        printResult(val, false, false, false);
}

function secondAndThirdTask() {
    'use strict';

    var number = 2;
    var string = "str";

    console.log("-second-and-third-task-");
    checkResultWithSign(number);
    number = -2;
    checkResultWithSign(number);
    checkResultWithSign(string);
}

function fourthFindFactorial() {
    'use strict';

    var number = 17;

    console.log("------fourth-task------");
    if (isNumber(number)) {
        var result = factorial(number);
        console.log(number + "! = " + result);
    }
    else
        console.log("The value is not a number");
}


function factorial(n) {
    'use strict';
    return n !== 1 ? n * factorial(n - 1) : 1;
}

function isPrime(n) {
    'use strict';

    if (n % 2 === 0) {
        if (n === 2) {
            return true;
        }
        return false;
    }
    var d = 3;
    while ((d * d <= n) && (n % d !== 0)) {
        d += 2;
    }
    return d * d > n;
}

function checkIfIsPrime(number) {
    'use strict';

    if (isNumber(number)) {
        if (isPrime(number))
            console.log("The value of " + number + " is a prime number");
        else
            console.log("The value of " + number + " isn't a prime number");
    }
    else {
        console.log("The value of " + number + " isn't a prime number");
    }
}

function fifthTask() {
    'use strict';

    console.log("-------fifth-task------");
    for (var number = 2; number < 20; number++) {
        checkIfIsPrime(number);
    }
}

function main() {
    'use strict';

    console.log("--------numbers--------");
    first_Task();
    secondAndThirdTask();
    fourthFindFactorial();
    fifthTask();
}

main();