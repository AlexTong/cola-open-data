"use strict";

module.exports = function (sequelize, DataTypes) {
	var CodeDetails = sequelize.define("CodeDetails", {
		code: DataTypes.INTEGER,
		key: DataTypes.STRING,
		value: DataTypes.STRING,
		parentId: DataTypes.BIGINT
	}, {tableName: "dictionary-details"});
	return CodeDetails;
}
