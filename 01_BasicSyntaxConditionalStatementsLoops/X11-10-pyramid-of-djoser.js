function calculateAllResources(base, coef) {
    let stones = 0
    let marble = 0
    let lapis = 0
    let gold = 0
    let floors = 0

    for (base; base > 2; base -= 2) {
        floors += 1
        stones += (base - 2) ** 2
        if (floors % 5 !== 0) {
            marble += base * 4 - 4
        } else {
            lapis += base * 4 - 4
        }
    }
    height = Math.floor((floors + 1) * coef) // + 1 for last floor
    gold = base * base  // atfer the loop ends base will be either 1 or 2

    console.log(`Stone required: ${Math.ceil(stones * coef)}`)
    console.log(`Marble required: ${Math.ceil(marble * coef)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * coef)}`)
    console.log(`Gold required: ${Math.ceil(gold * coef)}`)
    console.log(`Final pyramid height: ${height}`)
}

// calculateAllResources(11, 1)
// calculateAllResources(11, 0.75)
// calculateAllResources(12, 1)
// calculateAllResources(23, 0.5)
// calculateAllResources(3, 1)
calculateAllResources(2, 1)
calculateAllResources(1, 1)
