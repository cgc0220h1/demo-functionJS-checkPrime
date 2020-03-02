function isPrime(number) {
    if (Number.isInteger(number)) {
        for (let i = 2; i <= number / Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function check() {
    let num = +document.getElementById('num-input').value;
    if (isPrime(num)) {
        alert("Số nhập vào là số nguyên tố");
    } else {
        alert("Số nhập vào không phải là số nguyên tố");
    }
}
