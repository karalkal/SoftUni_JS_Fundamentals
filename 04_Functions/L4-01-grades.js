function solve(grade) {
    let outcome = ""
    if (grade < 3.00) {
        outcome = "Fail"
        grade = 2
    }
    else if (grade >= 3.00 && grade < 3.50) {
        outcome = "Poor"
    }
    else if (grade >= 3.50 && grade < 4.50) {
        outcome = "Good"
    }
    else if (grade >= 4.50 && grade < 5.50) {
        outcome = "Very good"
    }
    else if (grade >= 5.50) {
        outcome = "Excellent"
    }
    if (grade === 2) console.log(`${outcome} (${grade})`);
    else console.log(`${outcome} \(${grade.toFixed(2)}\)`);
}

solve(3.33)
solve(4.50)
solve(2.99)