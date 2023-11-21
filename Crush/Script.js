function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.textContent = 'AWWW.... I LOVE YOU TOO';
}

function moveNoButton(event) {
    const noButton = document.querySelector('.no');

    // Adjust the movement of the "No" button on hover
    noButton.style.transform = `translateX(${event.clientX + 10}px) translateY(${event.clientY - 10}px)`;
}

function resetNoButton() {
    const noButton = document.querySelector('.no');

    // Reset the position when not hovering
    noButton.style.transform = 'translate(0)';
}