const express = require('express');
const server = express();
const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('*', (req, res) => {
    res.status(200).send('<h1>Hooray! You found us!!!</h1>')
})


module.exports = server;
