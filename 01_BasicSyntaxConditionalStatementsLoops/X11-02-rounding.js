function roundNumber(number, precision) {
    number = Number(number);
    precision = Number(precision);
    if (precision > 15){
        precision = 15;
    }

    let result = number.toFixed(precision)
    // console.log(result * 1);
    console.log(parseFloat(result));
}

roundNumber(3.1415926535897932384626433832795, 2)
roundNumber(10.5, 3)