function checkPass(arr) {
    let userName = arr[0]
    let usernameReversed = userName.split('').reverse().join('')
    let foundMatch = false
    // console.log(usernameReversed);

    for (let i = 1; i <= 4; i++) {
        let currentPassword = arr[i]
        if (currentPassword === usernameReversed) {
            foundMatch = true
            console.log(`User ${userName} logged in.`)
            break
        } else {
            if (i === 4) {
                break
            }
            console.log('Incorrect password. Try again.')            
        }
    }
    if (!foundMatch) {
        console.log(`User ${userName} blocked!`)
    }
}

checkPass(['Acer', 'login', 'go', 'let me in', 'recA'])
checkPass(['sunny','rainy','cloudy','sunny','not sunny'])