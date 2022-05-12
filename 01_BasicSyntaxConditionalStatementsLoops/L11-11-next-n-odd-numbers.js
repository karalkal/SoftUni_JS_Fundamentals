function print_odd_numbers_and_sum(n) {
    total = 0;
    for (let i = 1; i <= n * 2; i++) {
        if (i % 2 == 1) {
            console.log(i)
            total += i
        }
    }
    console.log(`Sum: ${total}`);
}

print_odd_numbers_and_sum(8)
print_odd_numbers_and_sum(5)