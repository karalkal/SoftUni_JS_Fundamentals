function solve(input) {
    let inputAsAstr = input.toString();
    let arr = inputAsAstr.split('|');
    let health = 100;
    let coins = 0;
    let currentRoom = 0;
    let isAlive = true;

    for (let i = 0; i < arr.length; i++) {
        if (!isAlive) {
            break
        }

        let [action, value] = arr[i].split(' ');
        value = Number(value)
        currentRoom += 1;

        switch (action) {
            case ('potion'):
                if (value + health > 100) {
                    value = 100 - health
                }
                health += value;

                console.log(`You healed for ${value} hp.\nCurrent health: ${health} hp.`)
                break

            case ('chest'):
                coins += value

                console.log(`You found ${value} coins.`)
                break

            default:
                let monster = action
                let outcome = fight(monster, value)

                if (outcome === 'dead') {
                    console.log(`You died! Killed by ${monster}.`)
                    console.log(`Best room: ${currentRoom}`)
                    break
                } else {
                    console.log(`You slayed ${monster}.`)
                }
        }
    }
    if (isAlive) {
        console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)
    }

    function fight(monster, strength) {
        if (health <= strength) {
            isAlive = false
            return 'dead'
        }
        health -= strength
        return 'won'
    }
}


solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
// solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])