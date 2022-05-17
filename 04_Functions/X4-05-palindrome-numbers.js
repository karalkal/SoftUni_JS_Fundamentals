// Receives an array of positive integers and checks if each integer is a palindrome or not.

function checkIfPalindrome(arr) {
    for (let number of arr) {
        let isPalindrome = true
        let currentStr = number.toString();

        for (let i = 0; i < currentStr.length / 2; i++) {
            let leftStr = currentStr[i];
            let rightStr = currentStr[currentStr.length - 1 - i];
            if (leftStr !== rightStr) {
                console.log('false');
                isPalindrome = false
                break
            }
        }
        if (isPalindrome) console.log('true');
    }
}


checkIfPalindrome([123, 323, 421, 121])