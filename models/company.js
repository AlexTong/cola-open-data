"use strict";

module.exports = function (sequelize, DataTypes) {
	var Company = sequelize.define("Company", {
		name: DataTypes.STRING,
		date: DataTypes.DATE,
		url: DataTypes.STRING,
		description: DataTypes.STRING(500),
		regCapital: DataTypes.STRING,
		corporation: DataTypes.STRING
	},{tableName:"company"});
	return Company
}
