
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    
];

let score = 0;
app.get('/game', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    const options = generateOptions(emoji.name);

    res.json({ emoji: emoji.emoji, options });
});

app.post('/guess', (req, res) => {
    const { guessedName, correctName } = req.body;

    if (guessedName === correctName) {
        score++;
        res.json({ correct: true, score });
    } else {
        res.json({ correct: false, correctName, score });
    }
});

app.get('/score', (req, res) => {
    res.json({ score });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function generateOptions(correctName) {
    const options = [correctName];
    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        const randomName = emojis[randomIndex].name;
        if (!options.includes(randomName)) {
            options.push(randomName);
        }
    }
    shuffleArray(options);
    return options;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}