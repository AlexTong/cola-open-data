var models = require('../models');
var express = require('express');
var router = express.Router();
var pagination = require('../utils/pagination');
router.get('/', function (req, res) {
	models.Company.findAll({}).then(function (entityList) {
		res.send(entityList);
	});
});

router.get('/find/:from/:limit', function (req, res) {
	var options = pagination.getOption(req.params, true);
	models.Company
		.findAll(options)
		.then(function (entityList) {
			res.send(entityList);
		});
});

router.get('/find/', function (req, res) {
	var options = pagination.getOption(req.query);
	models.Company
		.findAndCountAll(options)
		.then(function (entityList) {
			res.send(pagination.getResult(entityList));
		});
});
router.post('/', function (req, res) {
	if (req.body.id) {
		models.Company
			.findById(req.body.id)
			.then(function (company) {
				company.update({
					name: req.body.name
				}).then(function (result) {
					res.send(result);
				})
			})
	} else {
		models.Company
			.create({
				name: req.body.name
			})
			.then(function (company) {
				res.send(company);
			});
	}
});

router.get('/:id/destroy', function (req, res) {
	models.Company
		.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(function () {
			res.send({})
		});
});
router.get('/:id/depts', function (req, res) {
	models.Dept
		.findAll({
			where: {
				companyId: req.params.id
			}
		})
		.then(function (depts) {
			res.send(depts);
		});
});

router.get('/:id/employees', function (req, res) {
	models.Employee
		.findAll({
			where: {
				companyId: req.params.id
			}
		})
		.then(function (employees) {
			res.send(employees);
		});
});

router.get('/:id/find/depts', function (req, res) {
	var options = pagination.getOption(req.query)
	options.where = {
		companyId: req.params.id
	};
	models.Dept
		.findAndCountAll(options)
		.then(function (result) {
			res.send(pagination.getResult(result));
		});
});

router.get('/:id/find/employees', function (req, res) {
	var options = pagination.getOption(req.query)
	options.where = {
		companyId: req.params.id
	};
	models.Employee
		.findAndCountAll(options)
		.then(function (result) {
			res.send(pagination.getResult(result));
		});
});

module.exports = router;
