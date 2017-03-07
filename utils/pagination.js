module.exports = {
	getOption: function (params, restful) {
		if (restful) {
			return {
				offset: parseInt(params.from),
				limit: parseInt(params.limit),
				where: {}
			}
		}
		var pageSize = parseInt(params.pageSize || 5),
			pageNo = parseInt(params.pageNo || 0);
		return {
			offset: pageSize * (pageNo - 1),
			limit: pageSize,
			where: {}
		}
	},
	getResult: function (collection) {
		return {
			$data: collection.rows,
			$entityCount: collection.count
		}
	}
}