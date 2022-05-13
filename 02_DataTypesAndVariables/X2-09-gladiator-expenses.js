function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0
    for (let f = 1; f <= lostFights; f++) {
        // • Every second lost game, his helmet is broken.
        // • Every third lost game, his sword is broken.
        // • When both his sword and helmet are broken in the same lost fight, his shield also breaks.
        if (f % 2 === 0) {
            expenses += helmetPrice
        }
        if (f % 3 === 0) {
            expenses += swordPrice
        }
        if (f % 6 === 0) {
            expenses += shieldPrice
        }
        if (f % 12 === 0) {
            expenses += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

calculateExpenses(7, 2, 3, 4, 5)