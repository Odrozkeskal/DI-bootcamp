const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const usersFilePath = path.join(__dirname, 'users.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;

    if (!firstName || !lastName || !email || !username || !password) {
        return res.status(400).send('All fields are required.');
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    if (users.find(user => user.username === username)) {
        return res.status(400).send('Username already exists.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        firstName,
        lastName,
        email,
        username,
        password: hashedPassword
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.send('Hello Your account is now created!');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send('Username and password are required.');
    }

    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const user = users.find(user => user.username === username);

    if (!user) {
        return res.status(400).send('Username not registered.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return res.status(400).send('Invalid username or password.');
    }

    res.send(`Hi ${username} welcome back again!`);
});

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found.');
    res.json(user);
});

app.put('/users/:id', (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex === -1) return res.status(404).send('User not found.');

    const updatedUser = { ...users[userIndex], firstName, lastName, email, username };
    if (password) updatedUser.password = bcrypt.hashSync(password, 10);

    users[userIndex] = updatedUser;
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.send('User updated successfully.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
