export default {
	
	Tabs1onTabSelected () {
		//	write code here
		//console.log(appsmith.store.tabName)		
		AppsQuery.run()		
		//console.log(appsmith.store.tabName=='消息数'?"message_count":(appsmith.store.tabName=='消费额度'?"token_count":"terminal_count")) 
	}
}