var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('index', {
		title: 'Cola 开放数据',
		filters: [require('jstransformer-marked')]
	});

});

module.exports = router;
