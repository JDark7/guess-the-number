let computerNumber;
let userNumbers = [];
let attempts = 0;
let maxAttempts = 10;
let victories = 0;
const maxVictories = 20;
let minRange = 1;
let maxRange = 100;

function newGame() {
    window.location.reload();
}

function init() {
    computerNumber = generateRandomNumber(minRange, maxRange);
    console.log(computerNumber);
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

            // Ajusta o intervalo para o próximo jogo
            minRange = computerNumber - 20;
            maxRange = computerNumber + 20;

            // Atualiza o máximo de tentativas baseado na vitória
            maxAttempts = 10 - victories;

            // Atualiza o máximo de tentativas exibido
            document.getElementById('maxAttempts').innerHTML = maxAttempts;

            // Reinicia as tentativas para o próximo jogo
            attempts = 0;
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
