function solve(input) {
    let [size, filledIndeces, ...movements] = input;
    let field = [];
    let filledIndecesArr = filledIndeces.split(' ').map(Number);

    //construct the field
    for (let i = 0; i < size; i++) {
        field[i] = (filledIndecesArr.includes(i)) ?
            '1' : '0'
    }

    //iterate over each of the movements
    for (let movement of movements) {
        let [fromPos, direction, distance] = movement.split(' ');
        fromPos = Number(fromPos);
        distance = Number(distance);

        if (field[fromPos] === '0') continue; // if not ladybird at this position, do nothing
        else if (fromPos > size - 1 || fromPos < 0) continue; // if invalid starting position, do nothing
        field[fromPos] = '0'; // otherwise vacate space

        if (direction === 'right') {
            while (field[fromPos + distance] === '1') {  // check if place is alredy occupied, if yes keep moving
                if ((fromPos + distance) > size) break; // check if it went out of bounds
                else fromPos += distance;  // increment until either finds '0' or goes out
            }
            if ((fromPos + distance) <= size - 1) field[fromPos + distance] = '1' // land in new place
        }

        else if (direction === 'left') {
            while (field[fromPos - distance] === '1') {
                if ((fromPos - distance) <= 0) break;
                else fromPos -= distance;
            }
            if ((fromPos - distance) >= 0) field[fromPos - distance] = '1' // land in new place
        }
    }
    console.log(field.join(' '))
}

solve([3, '0 1', '0 right 1', '2 right 1'])
solve([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1'])
solve([5, '3', '3 left 2', '1 left -2'])
solve([5, '3', '3 left -1', '4 right -3'])
