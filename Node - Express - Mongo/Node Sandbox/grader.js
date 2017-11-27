function average(numbers) {
    return Math.round(numbers.reduce((a, b) => a + b) / numbers.length);
}

console.log(average([90, 20, 70, 20, -10]))
