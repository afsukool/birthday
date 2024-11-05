const birthdayMessages = [
    "Wishing you a day filled with love, laughter, and unforgettable moments. Cheers to another amazing year!",
    "May your birthday be filled with sunshine, smiles, laughter, and love.",
    "Happy Birthday! Wishing you a wonderful year ahead full of blessings and joy.",
    "Here's to a birthday that's as special and unique as you are. Have an amazing day!",
    "On your special day, I wish you endless happiness and all the beautiful moments life can bring."
    "May your day be filled with endless joy, laughter, and unforgettable memories!"
    "Wishing you a year of magic moments and dreams coming true. Happy Birthday!"
    "Cheers to you on your special day! May your day be as wonderful and bright as you are!"
    "Happy Birthday! May your day be as sweet as cake and filled with as much joy as you bring to everyone!"
    "Another year, another adventure! Here’s to a fabulous birthday and a fantastic year ahead!"
    "To the one who brings sunshine wherever they go—Happy Birthday! May your day shine just as brightly."
    "It’s your special day! I hope you’re showered with love, laughter, and all your favorite things."
    "Happy Birthday to a true gem! Here’s to more laughter, more love, and more beautiful memories this year."
    "Time to eat cake, make wishes, and celebrate YOU! Have an amazing birthday!"
    "Wishing you a day that’s filled with love, laughter, and everything you enjoy. Happy Birthday!"
    "Today’s the day to celebrate you! Let the fun begin—happy, happy birthday!"
    "Happy Birthday! May your day be filled with the love and laughter you bring to others every day."
    "On this day, the world was blessed with you! Have a birthday filled with love, light, and joy."
    "Here’s to another year of being amazing! Happy Birthday!"
    "Birthdays come and go, but friends like you are one of a kind! Have an awesome day!"
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
document.getElementById('celebrateBtn').addEventListener('click', function() {
    document.getElementById('celebrateMessage').style.display = 'block';
    document.getElementById('birthdayMusic').play();
    generateConfetti();

    // Trigger multiple fireworks with delay
    for (let i = 0; i < 5; i++) {
        setTimeout(generateFirework, i * 500);  // Fireworks every 0.5 seconds
    }
});
