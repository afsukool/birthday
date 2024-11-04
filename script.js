const birthdayMessages = [
    "Wishing you a day filled with love, laughter, and unforgettable moments. Cheers to another amazing year!",
    "May your birthday be filled with sunshine, smiles, laughter, and love.",
    "Happy Birthday! Wishing you a wonderful year ahead full of blessings and joy.",
    "Here's to a birthday that's as special and unique as you are. Have an amazing day!",
    "On your special day, I wish you endless happiness and all the beautiful moments life can bring."
];

document.getElementById('showNameBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (nameInput) {
        const birthdayName = document.getElementById('birthdayName');
        const birthdayWish = document.getElementById('birthdayWish');

        // Display the name and a random birthday message
        birthdayName.textContent = `Happy Birthday, ${nameInput}!`;
        birthdayWish.textContent = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
        
        // Show and hide relevant elements
        birthdayName.style.display = 'block';
        birthdayWish.style.display = 'block';
        document.getElementById('celebrateBtn').style.display = 'inline-block';
        document.querySelector('.input-section').style.display = 'none';
        document.getElementById('newNameBtn').style.display = 'inline-block';
    } else {
        alert('Please enter your name!');
    }
});

document.getElementById('newNameBtn').addEventListener('click', function() {
    document.getElementById('nameInput').value = '';
    document.querySelector('.input-section').style.display = 'block';
    document.getElementById('birthdayName').style.display = 'none';
    document.getElementById('birthdayWish').style.display = 'none';
    document.getElementById('celebrateBtn').style.display = 'none';
    document.getElementById('newNameBtn').style.display = 'none';
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