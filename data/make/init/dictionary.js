var faker = require('faker/locale/zh_CN');
var base = require("../data/base");

var dictionarys = [
	{name: "settleModes", label: "支付方式", code: 10010, dataType: "int"},
	{name: "degree", label: "学历", code: 10011, dataType: "int"},
	{name: "gender", label: "性别", code: 10012, dataType: "boolean"},
	{name: "workStates", label: "工作状态", code: 10013, dataType: "int"},
	{name: "cardTypes", label: "证件类型", code: 10014, dataType: "int"}
];
var codes = [];
var details = [];
var id = 1;
for (var i = 0, len = dictionarys.length; i < len; i++) {
	var dictionary = dictionarys[i];
	dictionary.level = 0;
	var values = base[dictionary.name];
	dictionary.id = i + 1;
	codes.push(dictionary)


	for (var j = 0, vlen = values.length; j < vlen; j++) {
		var item = {
			id: id++,
			code: dictionary.code,
			key: (dictionary.dataType == "boolean" ? !!j : j) + "",
			value: values[j]
		}
		details.push(item);
	}
}

module.exports = {
	codes: codes,
	details: details
}