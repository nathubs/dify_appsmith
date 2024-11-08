export default {
	SelectDateonDropdownClose () {
		//	write code here
		TotalConversationsByAppID.run()
		total_conversation_num.run()
		ActiveUsersByAppID.run()
		total_active_user_num.run()
		AvgSessionInteractionsByAppID.run()
		total_avg_ssn_interaction_num.run()
		TokenOutputSpeedByAppID.run()
		total_avg_token_output_speed.run()
		UserSatisfactionRateByAppID.run()
		total_avg_user_stf_rate.run()
		TokenUsageByAppID.run()
		total_token_usage.run()
		TotalMessagesByAppID.run()
		total_message_num.run()
	},
	GetSeletData() {
		return [
  {
    "name": "过去一周",
    "code": "{{utils.getLastDaysRange(7)}}"
  },
  {
    "name": "过去一个月",
    "code": "{{utils.getLastDaysRange(30)}}"
  },
	{
    "name": "过去一季度",
    "code": "{{utils.getLastDaysRange(90)}}"
  },
	{
    "name": "过去一年",
    "code": "{{utils.getLastDaysRange(365)}}"
  }
	]
	}
}