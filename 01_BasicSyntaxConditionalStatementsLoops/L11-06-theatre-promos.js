function calculate_price(day, age) {
    if (day == "Weekday") {
        if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
            console.log('12$')
        }
        else if (18 < age && age <= 64) {
            console.log('18$')
        }
        else {
            console.log('Error!')
        }
    }

    else if (day == "Weekend") {
        if ((0 <= age && age <= 18) || (64 < age && age <= 122)) {
            console.log('15$')
        }
        else if (18 < age && age <= 64) {
            console.log('20$')
        }
        else {
            console.log('Error!')
        }
    }

    else if (day == "Holiday") {
        if (0 <= age && age <= 18) {
            console.log('5$')
        }
        else if (18 < age && age <= 64) {
            console.log('12$')
        }
        else if ((64 < age && age <= 122)) {
            console.log('10$')
        }
        else {
            console.log('Error!')
        }
    }

    else {
        console.log('Error!')
    }
}


calculate_price('Weekend', 2)
calculate_price('Nothing', 2)
calculate_price('Weekday', 22)
calculate_price('Weekday', 222)
calculate_price('Holiday', 15)


