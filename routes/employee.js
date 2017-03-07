var models = require('../models');
var express = require('express');
var router = express.Router();
var pagination = require('../utils/pagination');
router.get('/', function (req, res) {
	models.Employee.findAll({}).then(function (entityList) {
		res.send(entityList);
	});
});

router.get('/find/:from/:limit', function (req, res) {
	var options = pagination.getOption(req.params, true)
	options.where = {};
	models.Employee
		.findAll(options)
		.then(function (entityList) {
			res.send(entityList);
		});
});


router.get('/find/', function (req, res) {
	models.Employee
		.findAndCountAll(pagination.getOption(req.query))
		.then(function (result) {
			res.send(pagination.getResult(result));
		});
});

router.post('/', function (req, res) {
	if (req.body.id) {
		models.Employee.findById(req.body.id).then(function (entity) {
			entity.update({
				name: req.body.name
			}).then(function (result) {
				res.send(result);
			})
		})
	} else {
		models.Employee.create({
			name: req.body.name
		}).then(function (entity) {
			res.send(entity);
		});
	}
});

router.get('/:id/destroy', function (req, res) {
	models.Employee.destroy({
		where: {
			id: req.params.id
		}
	}).then(function () {
		res.send({});
	});
});


module.exports = router;
