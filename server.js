const express = require('express');
const server = express();
server.use(express.json());

// sanity Check
server.get('/', (req, res) => {
	res.status(200).json({ api: 'up and running....' });
});

module.exports = server;
