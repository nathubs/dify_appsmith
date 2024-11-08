export default {
	SelectDateonDropdownClose () {
		//	write code here
		messages_num.run()
		quotalogs.run()
		endusernum.run()
		UserQuotaRank.run()
		MessagesRank.run()
		UserTotalUseRank.run()
		ActivateUserRank.run()
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