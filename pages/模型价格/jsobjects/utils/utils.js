export default {
	FormatType () {
		var all_model_type = GetPricing.data.data;
		var format_type = [];
		var num = all_model_type.length;
		for (var i = 0; i < num; i++) {
			switch (all_model_type[i]["model_type"]) {
				case "image":
					format_type.push("文生图模型");
					break;
				case "llm":
					format_type.push("大语言模型");
					break;
				case "rerank":
					format_type.push("重排模型");
					break;
				case "tts":
					format_type.push("语音合成模型");
					break;
				case "speech2text":
					format_type.push("语音识别模型");
					break;
				case "text-embedding":
					format_type.push("文本嵌入模型");
					break;
			}
		}
		return format_type;
	},
	FormatPricing () {
		var all_model_pricing = GetPricing.data.data;
		var currency = "";
		var format_pricing = [];
		var num = all_model_pricing.length;
		for (var i = 0; i < num; i++) {
			if (all_model_pricing[i]["pricing"]["currency"] === "RMB") {
				currency = "¥";
			}
			else {
				currency = "$";
			}
			if (all_model_pricing[i]["pricing"]["type"] === "chat") {
				format_pricing.push(`输入：${currency}${all_model_pricing[i]["pricing"]["input"]/1000}/千字符 输出：${currency}${all_model_pricing[i]["pricing"]["output"]/1000}/千字符`);
			}
			else if (all_model_pricing[i]["pricing"]["type"] === "length") {
				format_pricing.push(`${currency}${all_model_pricing[i]["pricing"]["input"]}/万字符`);
			}
			else if (all_model_pricing[i]["pricing"]["type"] === "request") {
				format_pricing.push(`${currency}${all_model_pricing[i]["pricing"]["input"]}/次`);
			}
		}
		return format_pricing;
	},
}