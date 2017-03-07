var models = require('../models');
var express = require('express');
var router = express.Router();
router.get(["/", "/provinces"], function (req, res) {
	models.District.findAll({
		where: {level: 1}
	}).then(function (entityList) {
		res.send(entityList);
	});
});

router.get('/children', function (req, res) {
	models.District.findAll({
		where: {parentId: req.query.parentId}
	}).then(function (entityList) {
		res.send(entityList);
	});
});

router.get('/:id/children', function (req, res) {
	models.District.findAll({
		where: {parentId: req.params.id}
	}).then(function (entityList) {
		res.send(entityList);
	});
});

module.exports = router;
