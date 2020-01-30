const express = require('express');
const router = express.Router();
const url = require('url');
const moment = require('moment');

module.exports = (server) => {

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true);
		const query = url_parts.query;
		const from = query.start || 0;
		let	to = from + parseInt(query.count, 10);
		const sort = query.sort;
		const id = query.id;
		let	courses = server.db.getState().courses;

		if (!!query.textFragment) {
			courses = courses.filter((course) => course.description.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
		}

		if(sort) {
			courses.sort((a, b) => {
				if (sort === 'date') {
					const c = moment(b.date);
					const d = moment(a.date);
					return c.valueOf() - d.valueOf();
				} else {
					return b[sort] - a[sort];
				}
			});
		}

		if (courses.length < to || !to) {
			to = courses.length;
		}

		if(!id) {
			courses = courses.slice(from, to);
		} else {
			courses = courses.filter((item) => {
				return item.id == id;
			});
		}

		courses.map(course => course.creationDate = new Date(course.creationDate))

		res.json(courses.filter(course => course != null));
	});

	router.get('/error', function(req, res, next) {
		let url_parts = url.parse(req.originalUrl, true);
		let query = url_parts.query;
		res.status(parseInt(query.code, 10)).send({message: 'Error'});
	});

	router.post('/courses', (req, res, next) => {
		console.log(`Create course body=${req.body.toString()}`);
		server.db.getState().courses.push(req.body);

		res.json(server.db.getState().courses);
	});

	router.put('/courses', (req, res, next) => {
		console.log(`Update course by id=${req.body.id}`);
		let courses = server.db.getState().courses;

		var findElemIndex = courses.findIndex(course => course.id === req.body.id);
		courses[findElemIndex] = req.body;

		res.json(courses);
	});

	router.put('/courses/remove', (req, res, next) => {
		console.log(`Delete course body=${req.body.id}`);
		let courses = server.db.getState().courses;

		var findElemIndex = courses.findIndex(course => course.id === req.body.id);
		courses.splice(findElemIndex, 1);

		res.json(server.db.getState().courses);
	});



	return router;
};
