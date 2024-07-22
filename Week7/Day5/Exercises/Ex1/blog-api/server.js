const express = require('express');
const app = express();
const PORT = 3000; 


let data = [
    { id: 1, title: 'Title post 1', content: 'Content post 1' },
    { id: 2, title: 'Title post 2', content: 'Content post 2' },
    { id: 3, title: 'Title post 3', content: 'Content post 3' }
];


app.use(express.json());

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(item => item.id === postId);
    if (!post) {
        return res.status(404).send('Post was not found');
    }
    res.json(post);
});


app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).send('Not enough data to create a post');
    }
    const newPost = {
        id: data.length + 1,
        title,
        content
    };
    data.push(newPost);
    res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = data.findIndex(item => item.id === postId);
    if (postIndex === -1) {
        return res.status(404).send('Post was not found');
    }
    data[postIndex] = {
        id: postId,
        title: title || data[postIndex].title,
        content: content || data[postIndex].content
    };
    res.json(data[postIndex]);
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = data.findIndex(item => item.id === postId);
    if (postIndex === -1) {
        return res.status(404).send('Post was not found');
    }
    const deletedPost = data.splice(postIndex, 1);
    res.json(deletedPost[0]);
});

app.use((req, res, next) => {
    res.status(404).send('not found');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong on server');
});


app.listen(PORT, () => {
    console.log(`Server runs at: http://localhost:${PORT}`);
});