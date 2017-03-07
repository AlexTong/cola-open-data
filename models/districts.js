"use strict";

module.exports = function (sequelize, DataTypes) {
	var district = sequelize.define("District", {
		level: DataTypes.INTEGER,
		name: DataTypes.STRING,
		shortName: DataTypes.STRING,
		enName: DataTypes.STRING,
		cityCode: DataTypes.STRING,
		postCode: DataTypes.STRING,
		lng: DataTypes.DOUBLE,
		lat: DataTypes.DOUBLE,
		dcm: DataTypes.BOOLEAN,
		sortFactor: DataTypes.INTEGER,
		parentId: DataTypes.BIGINT
	}, {tableName: "districts"});
	return district
}
