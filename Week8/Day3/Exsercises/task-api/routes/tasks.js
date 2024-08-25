const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const tasksFilePath = path.join(__dirname, '../data/tasks.json');

const readTasks = () => {
    try {
        const data = fs.readFileSync(tasksFilePath);
        return JSON.parse(data);
    } catch (err) {
        throw new Error('Error reading tasks file');
    }
};

const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (err) {
        throw new Error('Error writing tasks file');
    }
};

router.get('/', (req, res) => {
    try {
        const tasks = readTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    try {
        const tasks = readTasks();
        const task = tasks.find(t => t.id === parseInt(id));
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    try {
        const tasks = readTasks();
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title,
            description
        };
        tasks.push(newTask);
        writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    try {
        let tasks = readTasks();
        const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
        if (taskIndex > -1) {
            tasks[taskIndex] = { id: parseInt(id), title, description };
            writeTasks(tasks);
            res.json(tasks[taskIndex]);
        } else {
            res.status(404).json({ error: 'Task not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    try {
        let tasks = readTasks();
        tasks = tasks.filter(t => t.id !== parseInt(id));
        writeTasks(tasks);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
