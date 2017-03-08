"use strict";

(function () {
	NProgress.done();
	cola(function (model) {
		model.set("apiList", [
			{path: "/service/company"},
			{path: "/service/company/find/:from/:limit"},
			{path: "/service/company/find?pageSize=5&pageNo=1"},
			{path: "/service/company/:id/depts"},
			{path: "/service/company/:id/employees"},
			{path: "/service/company/:id/find/depts?pageSize=5&pageNo=1"},
			{path: "/service/company/:id/find/employees?pageSize=5&pageNo=1"},
			{path: "/service/dept"},
			{path: "/service/dept/find/:from/:limit"},
			{path: "/service/dept/find?pageSize=5&pageNo=1"},
			{path: "/service/dept/:id/employees"},
			{path: "/service/dept/:id/find/employees?pageSize=5&pageNo=1"},
			{path: "/service/employee"},
			{path: "/service/employee/find/:from/:limit"},
			{path: "/service/employee/find?pageSize=5&pageNo=1"},
			{path: "/service/district/"},
			{path: "/service/district/provinces"},
			{path: "/service/district/children?parentId=2"},
			{path: "/service/district/:id/children"},
			{path: "/service/employee/exists?email=alex.tong007@gmail.com"},
			{path: "/service/dictionary?codes=1001,1002,1003,1004"},
			{path: "/service/employee/find?pageSize=5&pageNo=1"}

		])
	});

})();