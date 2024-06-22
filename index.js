let computerNumber;
let userNumbers = [];
let attempts = 0;
const maxAttempts = 10;
let victories = 0;
const maxVictories = 20;

function newGame() {
    window.location.reload();
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    console.log(computerNumber);
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value);
    userNumbers.push(userNumber);
    document.getElementById('guesses').innerHTML = userNumbers.join(" - ");

    if (attempts < maxAttempts) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é muito alto';
        } else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu número é muito baixo';
        } else {
            victories++;
            document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou o número!';
            document.getElementById('inputBox').setAttribute('readonly', 'readonly');
        }
        attempts++;
        document.getElementById('attempts').innerHTML = attempts;
    } else {
        document.getElementById('textOutput').innerHTML = 'Desculpe, você atingiu o máximo de tentativas. O número era ' + computerNumber;
        document.getElementById('inputBox').setAttribute('readonly', 'readonly');
    }

    if (victories >= maxVictories) {
        document.getElementById('textOutput').innerHTML = 'Desculpe, você atingiu o máximo de 20 vitórias.';
        document.getElementById('inputBox').setAttribute('readonly', 'readonly');
    }
}
