const express = require('express');
const router = express.Router();
const db = require(`../db`);

// let postId = null;

// Get Posts
router.get('/', (req, res) => {
	db.find()
		.then(posts => {
			res.status(200).json(posts);
		})
		.catch(err => {
			res
				.status(500)
				.json({ error: 'The posts information could not be retrieved.' });
		});
});

// get posts by id

router.get('/:id', (req, res) => {
	const id = req.params.id;

	db.findById(id)
		.then(post => {
			if (post) {
				res.status(200).json({
					post
				});
			} else {
				res.status(404).json({
					message: 'The post with the specified ID does not exist.'
				});
			}
		})
		.catch(err => {
			res.status(500).json({
				error: 'The post information could not be retrieved.'
			});
		});
});

// get comments by post id 

// adding Posts
router.post('/', (req, res) => {
	const postData = req.body;
	// post.id = postId++  --- not need because data table will auto format an id, but if this was hard coded array we would need to increment the id some how
	if (!postData.title || !postData.contents) {
		res.status(400).json({
			errorMessage: 'Please provide title and contents for the post.'
		});
	}
	db.insert(postData)
		.then(post => {
			res.status(201).json(post);
		})
		.catch(err => {
			res.status().json({
				error: 'There was an error while saving the post to the database'
			});
		});
});

// post comments to individual posts

// delete post

// edit post

module.exports = router;
