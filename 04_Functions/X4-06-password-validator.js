function validatePassword(input) {
    let isValid = false
    let errorMessages = []

    // • The length should be 6 - 10 characters (inclusive)
    if (input.length >= 6 && input.length <= 10) isValid = true;
    else errorMessages.push('Password must be between 6 and 10 characters');

    // • It should consist only of letters and digits
    if (/^[A-Za-z0-9]*$/.test(input) === false) {
        errorMessages.push('Password must consist only of letters and digits')
    }

    // • It should have at least 2 digits    
    if (/[a-zA-Z]*[0-9]+[a-zA-Z]*[0-9]+[a-zA-Z]*/.test(input) === false) {
        errorMessages.push('Password must have at least 2 digits')
    }
    if (errorMessages.length === 0) console.log(`Password is valid`);
    else console.log(errorMessages.join('\n'))
}

// validatePassword('Pa$s$s')
// validatePassword('Pa$s')
validatePassword('1aabb2')