document.getElementById('showNameBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        const birthdayName = document.getElementById('birthdayName');
        birthdayName.textContent = `Happy Birthday, ${nameInput}!`;
        birthdayName.style.display = 'block';
        
        const birthdayWish = document.getElementById('birthdayWish');
        birthdayWish.style.display = 'block';
        
        const celebrateBtn = document.getElementById('celebrateBtn');
        celebrateBtn.style.display = 'inline-block';
    } else {
        alert('Please enter your name!');
    }
});

document.getElementById('celebrateBtn').addEventListener('click', function() {
    const music = document.getElementById('birthdayMusic');
    music.play();
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