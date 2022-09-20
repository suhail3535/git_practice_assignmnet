// Check if a number is a prime or not !

let num = 17, factor = 0;
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        factor++;
    }
}
if (factor == 2) {
    console.log("prime")
} else {
    console.log("not prime")
}