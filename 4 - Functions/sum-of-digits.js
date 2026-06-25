function sumDigits(num) {
    let sum = 0;

    while (num > 0) {
        let digit = num % 10; // Last digit
        sum = sum + digit;
        num = Math.floor(num / 10); // Remove last digit
    }

    return sum;
}

console.log(sumDigits(12345));