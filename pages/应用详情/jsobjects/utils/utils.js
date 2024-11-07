export default {
	// initialize: () => {
		// storeValue('docIndex', 0);
		// storeValue('selectedStatus', '')
	// },
	getAppID: ()=> {
		return appsmith.URL.queryParams.selectedAppID;
	},
	getAppName: ()=> {
		return appsmith.URL.queryParams.selectedAppName;
	},
	formatDate: (date)=> {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份需要加1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
	},
  getLastDaysRange: (dayNum)=> {
    const today = new Date();
    // const endDate = new Date(today); // 今天是结束日期
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - dayNum); // 最近7天开始日期
		return utils.formatDate(startDate);
	},
	getLastDays: (dayNum)=> {
    const today = new Date();
    // const endDate = new Date(today); // 今天是结束日期
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - dayNum); // 最近7天开始日期
		return startDate.valueOf()/1000
	},
	getQueryData: (query_func)=> {
		var query_data = query_func.data;
		console.log(query_data);
		if (query_data.length !== 0) {
			return query_data;
		}
		query_data = [];
		const today = new Date();
		for (var i = 7; i > 0; i--) {
			const startDate = new Date(today);
			startDate.setDate(today.getDate() - i);
			query_data.push({'x': utils.formatDate(startDate), 'y': 0})
		}
		return query_data;
	},
	transferNumUnit: (num)=> {
		if (num > 1000) {
			return Math.floor(num / 1000) + 'k';
		}
		else if (num > 1000 * 1000) {
			return Math.floor(num / 1000 / 1000) + 'm';
		}
		else if (num > 1000 * 1000 * 1000) {
			return Math.floor(num / 1000 / 1000 / 1000) + 'b';
		}
		else {
			return num
		}
	},
	// test: ()=> {
		// let res = utils.str2timestamp(SelectDate.selectedOptionValue)
		// console.log(res)
		// return res
	// },	
	str2timestamp: (dateString)=> {
		// let dateString = "2023-10-04"; // 自定义格式的日期字符串
		let parts = dateString.split("-");
		let date = new Date(parts[0], parts[1] - 1, parts[2]);
		let timestamp = date.getTime();	
		return timestamp/1000;
	},	  
}