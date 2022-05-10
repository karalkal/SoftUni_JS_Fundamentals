function solve(name, age, grade) {
    // console.log('Name: ' + name + ', Age: ' + age + ', Grade: ' + Math.round(grade * 100) / 100)
    console.log('Name: ' + name + ', Age: ' + age + ', Grade: ' + grade.toFixed(2))
}

solve('Ivan', 77, 8.888888888)