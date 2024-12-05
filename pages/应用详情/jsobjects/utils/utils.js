export default {
	initialize: () => {
		SelectDate.setSelectedOption(utils.getLastDaysRange(7))
		JSObject1.SelectDateonDropdownClose()
		storeValue('workspaceID', appsmith.URL.queryParams.workspaceID)
		storeValue('workspaceName', appsmith.URL.queryParams.workspaceName)
	},
	getAppID: ()=> {
		return appsmith.URL.queryParams.selectedAppID;
	},
	getAppName: ()=> {
		return appsmith.URL.queryParams.selectedAppName;
	},
	getAppType: ()=> {
		var query_data = GetAppType.data;
		if (query_data.length === 0) {
			return ''
		}
		
		return GetAppType.data[0].mode;
	},
	isVisible: (cur_type)=> {
		const app_type = utils.getAppType();
		if ((app_type === 'workflow' && cur_type === 'workflow') || 
				(app_type !== 'workflow' && cur_type === 'chat')){
			return 'true';
		}
		else{
			return 'false';
		}
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
	getTotalMessages: ()=> {
		const app_type = utils.getAppType();
		if (app_type !== 'workflow') {
			return utils.getQueryData(TotalMessagesByAppID);
		}
		else {
			return utils.getQueryData(WorkflowTotalMessagesByAppID);
		}
	},
	getTotalMessageNum: ()=> {
		const app_type = utils.getAppType();
		if (app_type !== 'workflow') {
			return total_message_num.data[0].total_message_num;
		}
		else {
			return total_workflow_message_num.data[0].total_message_num;
		}
	},
	getActiveUsers: ()=> {
		const app_type = utils.getAppType();
		if (app_type !== 'workflow') {
			return utils.getQueryData(ActiveUsersByAppID);
		}
		else {
			return utils.getQueryData(WorkflowActiveUsersByAppID);
		}
	},
	getTotalActiveUserNum: ()=> {
		const app_type = utils.getAppType();
		if (app_type !== 'workflow') {
			return total_active_user_num.data[0].total_active_user_num;
		}
		else {
			return total_workflow_active_user_num.data[0].total_active_user_num;
		}
	},
	transferNumUnit: (num)=> {
		if (num < 1000){
			return num;
		}
		var quotient = Math.floor(num / 1000);
		var remainder = num % 1000;
		if (remainder >= 500) {
			quotient++
		}
		return quotient.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'k';
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