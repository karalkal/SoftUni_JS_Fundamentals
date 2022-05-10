function solve(country) {
    if (country == 'England' || country == 'USA') {
        console.log('English')
    }
    else if (['Spain', 'Argentina', 'Mexico'].includes(country)) {
        console.log('Spanish')
    }
    else {
        console.log('unknown')
    }
}

solve('USa')
solve('USA')
solve('Mexico')
