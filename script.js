
function calculateFactorial() {
    let input = document.getElementById('numberInput').value;
    let number = parseInt(input);

    document.getElementById('result').innerHTML = '';

    if (isNaN(number) || number < 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('result').innerHTML = `The factorial of ${number} is ${factorial}.`;
}
