"use strict";

module.exports = function (sequelize, DataTypes) {
	var Employee = sequelize.define("Employee", {
		email: DataTypes.STRING,
		name: DataTypes.STRING,
		age: DataTypes.INTEGER,
		birthday: DataTypes.DATE,
		gender: DataTypes.BOOLEAN,
		website: DataTypes.STRING,
		phone: DataTypes.STRING,
		degree: DataTypes.STRING,
		avatar: DataTypes.STRING,
		salary: DataTypes.INTEGER,
		married: DataTypes.BOOLEAN,
		resume: DataTypes.STRING(500),
		cartType: DataTypes.STRING,
		cardNumber: DataTypes.STRING,
		companyId: DataTypes.BIGINT,
		deptId: DataTypes.BIGINT
	}, {tableName: "employee"});
	return Employee
}
