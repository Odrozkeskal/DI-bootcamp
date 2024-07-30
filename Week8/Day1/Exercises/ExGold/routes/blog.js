const express = require('express');
const router = express.Router();
const {BlogPost, blogPosts} = require("..models/blog");

router.get('/posts', (req, res) => {
    res.json(blogPosts);
  });

  router.get('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 0 || id >= blogPosts.length) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(blogPosts[id]);
  });

  router.post('/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const timestamp = new Date().toISOString();
    const newPost = new BlogPost(title, content, timestamp);
    blogPosts.push(newPost);
    res.status(201).json(newPost);
  });
  
  // Обновить запись по идентификатору
  router.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { title, content } = req.body;
    if (isNaN(id) || id < 0 || id >= blogPosts.length) {
      return res.status(404).json({ error: 'Post not found' });
    }
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    const updatedPost = { ...blogPosts[id], title, content };
    blogPosts[id] = updatedPost;
    res.json(updatedPost);
  });
  
  // Удалить запись по идентификатору
  router.delete('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id) || id < 0 || id >= blogPosts.length) {
      return res.status(404).json({ error: 'Post not found' });
    }
    blogPosts.splice(id, 1);
    res.status(204).send(); // No content
  });
  
  module.exports = router;