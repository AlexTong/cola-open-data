"use strict";

module.exports = function (sequelize, DataTypes) {
	var Code = sequelize.define("Code", {
		name: DataTypes.STRING,
		label: DataTypes.STRING,
		code: DataTypes.INTEGER,
		dataType: DataTypes.STRING
	}, {tableName: "dictionary-code"});
	return Code;
}
