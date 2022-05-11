function calculateTotaslPrice(people, type, day) {
    let pricePerDay
    let totalPrice

    switch (type) {
        case ("Students"):
            switch (day) {
                case ("Friday"):
                    pricePerDay = 8.45
                    break
                case ("Saturday"):
                    pricePerDay = 9.80
                    break
                case ("Sunday"):
                    pricePerDay = 10.46
                    break
            }
            // Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
            totalPrice = (people >= 30) ?
                people * pricePerDay * .85 : people * pricePerDay
                break

        case ("Business"):
            switch (day) {
                case ("Friday"):
                    pricePerDay = 10.90
                    break
                case ("Saturday"):
                    pricePerDay = 15.60
                    break
                case ("Sunday"):
                    pricePerDay = 16
                    break
            }
            // Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
            totalPrice = (people >= 100) ?
                (people - 10) * pricePerDay : people * pricePerDay
                break

        case ("Regular"):
            switch (day) {
                case ("Friday"):
                    pricePerDay = 15
                    break
                case ("Saturday"):
                    pricePerDay = 20
                    break
                case ("Sunday"):
                    pricePerDay = 22.5
                    break
            }
            // Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
            totalPrice = (people >= 10 && people <= 20) ?
                people * pricePerDay * .95 : people * pricePerDay
                break
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTotaslPrice(30, "Students", "Sunday")
calculateTotaslPrice(40, "Regular", "Saturday")
