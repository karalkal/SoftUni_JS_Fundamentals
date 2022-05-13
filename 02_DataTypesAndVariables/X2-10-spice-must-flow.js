function calculateHarvest(quantity) {
    let totalHarvest = 0
    let daysMined = 0

    while (quantity >= 100) {
        totalHarvest += quantity
        daysMined += 1

        totalHarvest -= 26
        quantity -= 10
    }
    if (totalHarvest >= 26) {
        totalHarvest -= 26
    } else {
        totalHarvest = 0
    }
    console.log(daysMined + '\n' + totalHarvest);
}

calculateHarvest(111)
calculateHarvest(450)
calculateHarvest(0)