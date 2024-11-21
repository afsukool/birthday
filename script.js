const birthdayMessages = [
    "Wishing you a day filled with love, laughter, and unforgettable moments. Cheers to another amazing year!",
    "May your birthday be filled with sunshine, smiles, laughter, and love.",
    "Happy Birthday! Wishing you a wonderful year ahead full of blessings and joy.",
    "Here's to a birthday that's as special and unique as you are. Have an amazing day!",
    "On your special day, I wish you endless happiness and all the beautiful moments life can bring.",
    "May your day be filled with endless joy, laughter, and unforgettable memories!",
    "Wishing you a year of magic moments and dreams coming true. Happy Birthday!",
    "Cheers to you on your special day! May your day be as wonderful and bright as you are!",
    "Happy Birthday! May your day be as sweet as cake and filled with as much joy as you bring to everyone!",
    "Another year, another adventure! Here’s to a fabulous birthday and a fantastic year ahead!",
    "To the one who brings sunshine wherever they go—Happy Birthday! May your day shine just as brightly.",
    "It’s your special day! I hope you’re showered with love, laughter, and all your favorite things.",
    "Happy Birthday to a true gem! Here’s to more laughter, more love, and more beautiful memories this year.",
    "Time to eat cake, make wishes, and celebrate YOU! Have an amazing birthday!",
    "Wishing you a day that’s filled with love, laughter, and everything you enjoy. Happy Birthday!",
    "Today’s the day to celebrate you! Let the fun begin—happy, happy birthday!",
    "Happy Birthday! May your day be filled with the love and laughter you bring to others every day.",
    "On this day, the world was blessed with you! Have a birthday filled with love, light, and joy.",
    "Here’s to another year of being amazing! Happy Birthday!",
    "Birthdays come and go, but friends like you are one of a kind! Have an awesome day!"
];

document.getElementById('showNameBtn').addEventListener('click', function() {
    const name = "Malu"; // Hardcoded name
    document.getElementById('birthdayName').textContent = `Happy Birthday, ${name}!`;
    document.getElementById('birthdayName').style.display = 'block';
    
    // Pick a random birthday message
    const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
    document.getElementById('birthdayWish').textContent = randomMessage;
    document.getElementById('birthdayWish').style.display = 'block';

    document.getElementById('celebrateBtn').style.display = 'inline-block';
    document.getElementById('newNameBtn').style.display = 'inline-block';
});

document.getElementById('celebrateBtn').addEventListener('click', function() {
    document.getElementById('birthdayMusic').play();
    generateFireworks();
});

document.getElementById('newNameBtn').addEventListener('click', function() {
    document.getElementById('birthdayName').style.display = 'none';
    document.getElementById('birthdayWish').style.display = 'none';
    document.getElementById('celebrateBtn').style.display = 'none';
    document.getElementById('newNameBtn').style.display = 'none';
});

// Function to generate fireworks
function generateFireworks() {
    const container = document.getElementById('fireworksContainer');
    const fireworkX = Math.random() * 100;
    const fireworkY = Math.random() * 100;

    for (let i = 0; i < 5; i++) {
        const fireworkContainer = document.createElement('div');
        fireworkContainer.classList.add('firework-container');
        fireworkContainer.style.left = `${fireworkX}vw`;
        fireworkContainer.style.top = `${fireworkY}vh`;

        for (let j = 0; j < 20; j++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
            spark.style.backgroundColor = randomColor;

            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 200;
            spark.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
            spark.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

            fireworkContainer.appendChild(spark);
        }

        container.appendChild(fireworkContainer);
        setTimeout(() => fireworkContainer.remove(), 8000);
    }
}
