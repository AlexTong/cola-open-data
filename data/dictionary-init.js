var models = require('../models');
var dictionary = require("./make/init/dictionary");
var codes = dictionary.codes;
for (var i = 0, len = codes.length; i < len; i++) {
	models.Code.create(codes[i]).bind(models).then(function (item) {
	})
}
var details = dictionary.details;
for (var i = 0, len = details.length; i < len; i++) {
	models.CodeDetails.create(details[i]).bind(models).then(function (item) {
	})
}
