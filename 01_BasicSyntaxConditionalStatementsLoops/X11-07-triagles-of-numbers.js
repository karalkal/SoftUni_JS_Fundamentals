function drawTriangle(number) {
    for (let i = 1; i <= number; i++) {
        let currentRaw = "";
        for (j = 1; j <= i; j++) {
            currentRaw += i + " "
        }
        console.log(currentRaw);
    }
}

// drawTriangle(3)
drawTriangle(6)