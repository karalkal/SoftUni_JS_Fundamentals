function printFirstNTriplets(end) {
    for (let num = 0; num < end; num++) {
        let letter1 = String.fromCharCode(97 + num)

        for (let num = 0; num < end; num++) {
            let letter2 = String.fromCharCode(97 + num)

            for (let num = 0; num < end; num++) {
                let letter3 = String.fromCharCode(97 + num)
                console.log(letter1 + letter2 + letter3);
            }
        }
    }
}

printFirstNTriplets(3)

