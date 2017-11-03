const express = require('express');
const axios = require('axios')

const router = new express.Router();


router.get('/test', (req, res) => {
	console.log('test')
	res.status(200).json({
		message: 'test'
	})
})

router.get('/uwCoursesByCategory', (req, res) => {
	const UW_COURSES_URL = 'https://api.uwaterloo.ca/v2/courses/'
	const subject = req.query.subject
	console.log(subject)
	axios.get(UW_COURSES_URL + subject + '.json?key=c780e807546941db9f3628694b9b72f1').then(response => {
		console.log('here')
		res.status(200).json({
			data: response.data
		})
	}).catch(err => {
		res.status(400).json({
			message: err
		})
	})
	
})

module.exports = router;