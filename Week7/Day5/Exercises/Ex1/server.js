const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let data = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
];

app.get('/posts', (req, res) => {
    res.json(data);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(post => post.id === postId);

    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
});

app.post('/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = { id: data.length + 1, title, content };
    data.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    let updated = false;

    data = data.map(post => {
        if (post.id === postId) {
            post.title = title;
            post.content = content;
            updated = true;
        }
        return post;
    });

    if (updated) {
        res.json({ message: 'Post updated successfully' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const initialLength = data.length;

    data = data.filter(post => post.id !== postId);

    if (data.length < initialLength) {
        res.json({ message: 'Post deleted successfully' });
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
