const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/test', (req, res) => {
	res.status(200).json({
		message: 'test'
	})
})

module.exports = router;