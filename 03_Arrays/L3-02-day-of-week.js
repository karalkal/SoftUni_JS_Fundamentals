function determineWeekday(number) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    if (number > 0 && number < 8) {
        console.log(days[number - 1])
    } else {
        console.log('Invalid day!')
    }
}

determineWeekday(5)
determineWeekday(-5)
determineWeekday(55)
determineWeekday(7)