export default {
	initialize: () => {
		storeValue('docIndex', 0);
		storeValue('selectedStatus', '')
		storeValue('rate',50*1000)
		appsmith.URL.queryParams.display_name = ''
	},
	getLogs: async () => {
		const allLogs = await SelectQuery.run();
		return allLogs.map(k => ({
			Id: k.id,
			username: k.username,
			created_at: k.created_at*1000,//new Date(k.created_at*1000).toDateString(),
			type: k.type===1?"充值":"消费",
			model_name: k.model_name,
			quota: k.quota/appsmith.store.rate,
			prompt_tokens: k.prompt_tokens/appsmith.store.rate,
			completion_tokens: k.completion_tokens/appsmith.store.rate,
			content:k.content
		}));		
	},	
}