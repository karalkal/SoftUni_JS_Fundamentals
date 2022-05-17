function calculateBill(item, quantity) {
    let coffee = 1.50
    let water = 1.00
    let coke = 1.40
    let snacks = 2.00
    let bill = 0

    switch (item) {
        case ('coffee'):
            bill = coffee * quantity
            break
        case ('water'):
            bill = water * quantity
            break
        case ('coke'):
            bill = coke * quantity
            break
        case ('snacks'):
            bill = snacks * quantity
    }
    console.log(bill.toFixed(2));
}

calculateBill("water", 5)
calculateBill("coffee", 2)