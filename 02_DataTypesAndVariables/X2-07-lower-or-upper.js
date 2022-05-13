function lowerOrUpper(strToCheck) {
    let upperCase = strToCheck.toUpperCase()
    let result = (upperCase === strToCheck) ?
        "upper-case" : "lower-case"
    console.log(result)
}
 lowerOrUpper("l")
 lowerOrUpper("L")
