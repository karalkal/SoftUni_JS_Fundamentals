function determine_age(age) {
    let age_group = ""

    if (age >= 0 && age <= 2) {
        age_group = "baby"
    }
    else if (age >= 3 && age <= 13) {
        age_group = "child"
    }
    else if (age >= 14 && age <= 19) {
        age_group = "teenager"
    }
    else if (age >= 20 && age <= 65) {
        age_group = "adult"
    }
    else if (age >= 66) {
        age_group = "elder"
    }
    else {
        age_group = "out of bounds"
    }

    console.log(age_group)
}

determine_age(6)
determine_age(16)
determine_age(56)
determine_age(-6)
determine_age(106)