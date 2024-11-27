export default {
	initialize: () => {
		storeValue('tokenChartType', "COLUMN_CHART");
		storeValue('tabName','消费额度');
		navigateTo('应用报表', {tab: '消费额度'})
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