export default {
	initialize: () => {
		storeValue('tokenChartType', "COLUMN_CHART");
		storeValue('tabName','消费额度');
	},  	
	switchChartView: (radio_group) => {
		if (radio_group.selectedOptionValue === "Y") {
			storeValue('tokenChartType', "COLUMN_CHART");
		} else {
			storeValue('tokenChartType', "PIE_CHART");
		}
	},
}