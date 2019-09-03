const express = require('express');
const router = express.Router();

const db = require(`../db`);





// get all comments by post id
router.get('/:id/comments', (req, res) => {
	const id = req.params.id;
	console.log('comments id', id);

	db.findPostComments(id)
		.then(comment => {
			if (comment) {
				res.status(200).json({ comment });
			} else {
				res
					.status(404)
					.json({ message: 'The post with the specified ID does not exist.' });
			}
		})
		.catch(err => {
			res
				.status(500)
				.json({ error: 'The comments information could not be retrieved.' });
		});
});

// get comment by id

module.exports = router;
