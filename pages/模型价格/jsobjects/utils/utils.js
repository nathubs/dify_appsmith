export default {
	FormatPricingType () {
		var all_model_type = GetPricing.data.data;
		var format_type = [];
		var num = all_model_type.length;
		for (var i = 0; i < num; i++) {
			switch (all_model_type[i]["model_type"]) {
				case "image":
					format_type.push("按次计费");
					break;
				default:
					format_type.push("按Token计费");
			}
		}
		return format_type;
	},
	FormatModelType () {
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
			var return_pair = [];
			if (all_model_pricing[i]["pricing"]["type"] === "chat") {
				var input = all_model_pricing[i]["pricing"]["input"] / 1000;
				input = Math.round(input * 10000000) / 10000000;
				return_pair.push(`${currency}${input} / 1k tokens`);
				var output = all_model_pricing[i]["pricing"]["output"] / 1000;
				if (Math.abs(output - 0) > Number.EPSILON) {
					output = Math.round(output * 10000000) / 10000000;
					return_pair.push(`${currency}${output} / 1k tokens`);
				}
				else {
					return_pair.push("");
				}
				
				format_pricing.push(return_pair);
			}
			else if (all_model_pricing[i]["pricing"]["type"] === "length") {
				return_pair.push(`${currency}${all_model_pricing[i]["pricing"]["input"] / 10} / 1k tokens`);
				return_pair.push("");
				format_pricing.push(return_pair);
			}
			else if (all_model_pricing[i]["pricing"]["type"] === "request") {
				return_pair.push(`${currency}${all_model_pricing[i]["pricing"]["input"]} / 次`);
				return_pair.push("");
				format_pricing.push(return_pair);
			}
		}
		return format_pricing;
	},
}