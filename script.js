//your JS code here. If required.
// Loop through numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
    // Check for multiples of both three and five first
    if (i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");
    }
    // Check for multiples of three
    else if (i % 3 === 0) {
        alert("Fizz");
    }
    // Check for multiples of five
    else if (i % 5 === 0) {
        alert("Buzz");
    }
    // Print the number itself for other cases
    else {
        alert(i.toString());
    }
}
