export default {
	initialize: () => {
		storeValue('tokenChartType', "COLUMN_CHART");
		storeValue('tabName','消费额度');
		storeValue('workspaceID', appsmith.URL.queryParams.workspaceID)
		storeValue('workspaceName', appsmith.URL.queryParams.workspaceName)
		navigateTo('应用报表', {tab: '消费额度'})
		AppsQueryByPage.run()
		TotalRecordAppQuery.run()
	},
	getWorkspaceID: () => {
		var w_id = appsmith.store.workspaceID;
		if (w_id) {
			return w_id;
		}
		else {
			return '00000000-0000-0000-0000-000000000000';
		}
	}, 
	getWorkspaceName: () => {
		var w_name = appsmith.store.workspaceName;
		if (w_name) {
			return w_name;
		}
		else {
			return '';
		}
	}, 
	isFromWorkspace: () => {
		var w_id = appsmith.store.workspaceID;
		if (w_id) {
			return 'true';
		}
		else {
			return 'false';
		}
	}, 
	switchChartView: () => {
		var radio_group = RadioGroup1;
		switch(appsmith.store.tabName) {
			case '消费额度':
				radio_group = RadioGroup1;
				break;
			case '消息数':
				radio_group = RadioGroup3;
				break;
			case '活跃用户':
				radio_group = RadioGroup2;
				break;
		}
		if (radio_group.selectedOptionValue === "Y") {
			storeValue('tokenChartType', "COLUMN_CHART");
		} else {
			storeValue('tokenChartType', "PIE_CHART");
		}
	},
}