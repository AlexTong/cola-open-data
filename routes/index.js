var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('index', {
		title: 'Cola 开放数据',
		filters: [require('jstransformer-marked')]
	});
});

router.get('/service/dictionary', function (req, res) {
	var keys = req.query.codes.split(",");
	var codeArray = [];
	for (var i = 0, len = keys.length; i < len; i++) {
		codeArray.push(parseInt(keys[i]));
	}
	models.Code.findAll({
		where: {code: {$in: codeArray}}
	}).then(function (codes) {
		var result = {}, dataTypes = {};
		for (var i = 0, len = codes.length; i < len; i++) {
			var code = codes[i];
			dataTypes[code.code] = code.dataType;
			result[code.code] = [];
		}
		models.CodeDetails.findAll({
			where: {code: {$in: codeArray}}
		}).then(function (details) {
			function parseKey(key, dataType) {
				if (dataType === "int") {
					return parseInt(key)
				} else if (dataType === "boolean") {
					return key === "true"
				}
				return key;
			}

			for (var i = 0, len = details.length; i < len; i++) {
				var detail = details[i];
				result[detail.code].push({
					key: parseKey(detail.key, dataTypes[detail.code]),
					value: detail.value
				})
			}
			res.send(result);
		});

	});
});


module.exports = router;
