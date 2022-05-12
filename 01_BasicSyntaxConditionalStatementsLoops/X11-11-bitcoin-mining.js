function calculateEarnings(arr) {
    let boughtBitcoins = 0;
    let moneyEarned = 0;
    let bitcoinPrice = 11949.16;
    let goldPrice = 67.51;
    let independanceDay = 0
    let isIndependant = false    

    for (let i = 0; i < arr.length; i++) {
        let boughtToday = 0
        let goldMinedPerDay = ((i + 1) % 3 === 0) ?
            arr[i] * .7 : arr[i];

        // console.log(goldMinedPerDay)
        moneyEarned += goldMinedPerDay * goldPrice
        // console.log(moneyEarned)
        if (moneyEarned >= bitcoinPrice) {
            boughtToday = Math.floor(moneyEarned / bitcoinPrice)
            boughtBitcoins += boughtToday
            moneyEarned -= boughtToday * bitcoinPrice
        }

        // check if has bought in previus step, if yes save day
        if (boughtBitcoins && !isIndependant) {
            independanceDay = i + 1
            isIndependant = true
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins) {
        console.log(`Day of the first purchased bitcoin: ${independanceDay}`)
    }
    console.log(`Left money: ${moneyEarned.toFixed(2)} lv.`)
}

calculateEarnings([100, 200, 300])
// calculateEarnings([50, 100])
// calculateEarnings([3124.15, 504.212, 2511.124])