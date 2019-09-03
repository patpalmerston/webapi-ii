const express = require('express');
const server = express();

const postsRouter = require(`./data/routes/postRoutes`)
const commentsRouter = require(`./data/routes/commentRoutes`)

server.use(express.json());
server.use('/api/posts', postsRouter)
server.use('/api/posts', commentsRouter)

// sanity Check
server.get('/', (req, res) => {
	res.status(200).json({ api: 'up and running....' });
});

module.exports = server;
