export default {
	initialize: () => {
		storeValue('chartIndex', 0);
		// storeValue('username', '', true);
		// storeValue('selectedStatus', '')
	},	
	// populate_store (display_name) {
         // storeValue('username', display_name, true);
         // return appsmith.store.username;
  // },
	getChartData: () => {
		if (appsmith.store.chartIndex === 0 ) {
			return used_quota.data;
		}else if (appsmith.store.chartIndex === 1 ) {
			return quota.data;
		} else if (appsmith.store.chartIndex === 2){
			return request_count.data;
		}
		return used_quota.data;		
	},
	switchSelectIndex: (index) => {
		Table1.setSelectedRowIndex(index)
	},

	returnChartType: (chartIndex) => {
		if (chartIndex === 1) {
			return 'PIE_CHART';
		} else if (chartIndex === 2){
			return 'LINE_CHART';
		}
	},	
}