document.addEventListener('DOMContentLoaded', function () {
    const magicButton = document.getElementById('magic-button');

    magicButton.addEventListener('click', function () {
        const randomOutcome = Math.floor(Math.random() * 4); // Generates a number between 0 and 3

        switch (randomOutcome) {
            case 0:
                kickOff();
                break;
            case 1:
                createConfetti();
                break;
            case 2:
                createPoop();
                break;
            case 3:
                showJackpot();
                break;
        }
    });

    function kickOff() {
        alert("You've been kicked off the website!");
        window.location.href = "about:blank"; // Redirects to a blank page
    }

    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti');
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');

            // Randomize position and animation duration
            confettiPiece.style.left = Math.random() * 100 + 'vw';
            confettiPiece.style.backgroundColor = getRandomColor();
            confettiPiece.style.animationDuration = Math.random() * 1 + 1 + 's';

            confettiContainer.appendChild(confettiPiece);

            // Remove confetti piece after animation
            setTimeout(() => {
                confettiPiece.remove();
            }, 3000);
        }

        // Remove confetti container after all pieces are removed
        setTimeout(() => {
            confettiContainer.remove();
        }, 3000);
    }

    function createPoop() {
        const poop = document.createElement('div');
        poop.innerHTML = "💩"; // Poop emoji
        poop.style.position = 'fixed';
        poop.style.left = Math.random() * 100 + 'vw';
        poop.style.top = '0';
        poop.style.fontSize = '50px';
        poop.style.transition = 'top 2s';
        document.body.appendChild(poop);

        // Animate poop falling down
        setTimeout(() => {
            poop.style.top = '100vh';
        }, 10);

        // Remove poop after it falls
        setTimeout(() => {
            poop.remove();
        }, 2000);
    }

    function showJackpot() {
        alert("Congratulations! You've won the jackpot!");
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});