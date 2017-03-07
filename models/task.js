"use strict";

module.exports = function (sequelize, DataTypes) {
	var Task = sequelize.define("Task", {
		title: DataTypes.STRING
	}, {
		tableName: "task",
		classMethods: {
			associate: function (models) {
				Task.belongsTo(models.User, {
					onDelete: "CASCADE",
					foreignKey: {
						allowNull: false
					}
				});
			}
		}
	});

	return Task;
};
