var models = require('../models');
var companyList = require("./company");
for (var i = 0, len = companyList.length; i < len; i++) {
	models.Company.create(companyList[i]).bind(models).then(function (item) {

	})
}
var deptList = require("./dept");
for (var i = 0, len = deptList.length; i < len; i++) {
	models.Dept.create(deptList[i]).bind(models).then(function (item) {

	});
}
var employeeList = require("./employee");
for (var i = 0, len = employeeList.length; i < len; i++) {
	models.Employee.create(employeeList[i]).bind(models).then(function (item) {
	});
}
var districtList = require("./district");
for (var i = 0, len = districtList.length; i < len; i++) {
	models.District.create(districtList[i]).bind(models).then(function (item) {
	});
}
