export default {
	initialize: () => {
		storeValue('tokenChartType', "COLUMN_CHART");
		storeValue('tabName','消费额度');
	},  	
	switchChartView: () => {
		if (RadioGroup1.selectedOptionValue === "Y") {
			storeValue('tokenChartType', "COLUMN_CHART");
		} else {
			storeValue('tokenChartType', "PIE_CHART");
		}
	},
}