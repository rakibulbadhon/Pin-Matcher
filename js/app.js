function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        document.getElementById('input-generate').value = pin;
    }
    else {
        return generatePin();
    }
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('input-key');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = "";
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verfyPin() {
    const generatePin = document.getElementById('input-generate').value;
    const keyNumbers = document.getElementById('input-key').value;
    if (generatePin == keyNumbers) {
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-error').style.display = 'none';
    }
    else {
        document.getElementById('notify-error').style.display = 'block'
        document.getElementById('notify-success').style.display = 'none';
    }
}