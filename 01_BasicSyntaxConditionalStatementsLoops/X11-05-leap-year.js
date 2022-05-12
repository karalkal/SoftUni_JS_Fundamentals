// Leap years are either divisible by 4 but not by 100 or are divisible by 400.

function checkIfLeapYear(year) {
    let isLeapYear = "no"
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0) {
        isLeapYear = "yes"
    }
    console.log(isLeapYear);
}

checkIfLeapYear(1984)
checkIfLeapYear(2003)
checkIfLeapYear(4)