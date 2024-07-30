const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

const dataService = require('./data/dataService');

app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
        console.log('Posts fetched and sent successfully');
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});