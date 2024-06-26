// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('guessForm');
    const input = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const result = document.getElementById('result');
    let randomNumber = Math.floor((Math.random()*10)+1);
    console.log(randomNumber);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userGuess = parseInt(input.value, 10);
        result.textContent = '';
        if (userGuess === randomNumber) {
            result.textContent = `වැඩ්ඩෙක් තමා ඉතින්.`;
            result.style.color = 'green';
            resetGame();

        } else if (userGuess > randomNumber) {
            message.textContent = 'වැඩී යකෝ.';
        } else {
            message.textContent = 'තව මදී යකෝ.';
        }

        input.value = '';
    });

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        message.textContent = '1 ඉදන් 10 ට නොම්බරයක් දාපන්';
       
        input.value = '';
    }
});
