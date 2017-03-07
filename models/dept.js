"use strict";

module.exports = function (sequelize, DataTypes) {
	var Dept = sequelize.define("Dept", {
		name: DataTypes.STRING,
		date: DataTypes.DATE,
		description: DataTypes.STRING(1024),
		companyId:DataTypes.BIGINT,
	}, {tableName:"dept"});
	return Dept;
}
