var models = require('../models');
var express = require('express');
var router = express.Router();
var pagination = require('../utils/pagination');

router.get('/', function (req, res) {
	models.Dept
		.findAll({})
		.then(function (result) {
			res.send(result);
		});
});

router.get('/find/:from/:limit', function (req, res) {
	var options = pagination.getOption(req.params, true);
	models.Dept
		.findAll(options)
		.then(function (entityList) {
			res.send(entityList);
		});
});

router.get('/find/', function (req, res) {
	var options = pagination.getOption(req.query);
	models.Dept
		.findAndCountAll(options)
		.then(function (entityList) {
			res.send(pagination.getResult(entityList));
		});
});

router.post('/', function (req, res) {
	if (req.body.id) {
		models.Dept
			.findById(req.body.id)
			.then(function (entity) {
				entity
					.update({
						name: req.body.name
					})
					.then(function (result) {
						res.send(result);
					})
			})
	} else {
		models.Dept
			.create({
				name: req.body.name
			})
			.then(function (entity) {
				res.send(entity);
			});
	}
});

router.get('/:id/destroy', function (req, res) {
	models.Dept.destroy({
		where: {
			id: req.params.id
		}
	}).then(function () {
		res.send({});
	});
});


router.get('/:id/employees', function (req, res) {
	models.Employee.findAll({
		where: {
			deptId: req.params.id
		}
	}).then(function (entityList) {
		res.send(entityList);
	});
});

router.get('/:id/find/employees', function (req, res) {
	var options = pagination.getOption(req.query);
	options.where = {
		deptId: req.params.id
	};
	models.Employee
		.findAndCountAll(options)
		.then(function (result) {
			res.send(pagination.getResult(result));
		});
});


module.exports = router;
