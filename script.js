document.getElementById('celebrateBtn').addEventListener('click', function() {
    alert("Let's celebrate!");
    generateConfetti();
});

// Function to generate confetti
function generateConfetti() {
    const container = document.body;
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.top = `${Math.random() * window.innerHeight}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 2000);
    }
}

// CSS for confetti
const confettiStyle = document.createElement('style');
confettiStyle.innerHTML = `
.confetti {
    position: fixed;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: fall 2s linear infinite;
}

@keyframes fall {
    0% { transform: translateY(0) rotate(0); }
    100% { transform: translateY(100vh) rotate(720deg); }
}
`;
document.head.appendChild(confettiStyle);
