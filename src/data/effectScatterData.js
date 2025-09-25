// // effectScatter series data
// export const effectScatterData = [
// 	{ value: [0.128, 752.090], name: "midm-base-2.3.2" },
// 	{ value: [0.052, 674.450], name: "midm-mini-2.3.1" },
// 	{ value: [0.123, 759.800], name: "llama-3.1-74b-fp16" },
// 	{ value: [0.639, 789.580], name: "gpt-4.1-mini" },
// 	{ value: [2.470, 795.980], name: "sota-k" },
// 	{ value: [3.739, 816.590], name: "gpt-4.1" },
// 	{ value: [0.990, 816.587], name: "gpt-4.1_closest_quality" },
// 	{ value: [5.790, 830.430], name: "gpt-5-chat" },
// 	{ value: [5.498, 810.650], name: "gpt-4o" },
// 	{ value: [5.223, 837.741], name: "highest-quality" },
// ];
// // [5.223, 837.741], // highest


export const effectScatterData = [
	{ value: [0.128, 752.090], name: "midm-base-2.3.2" },
	{ value: [0.052, 674.450], name: "midm-mini-2.3.1" },
	{ value: [0.123, 759.800], name: "llama-3.1-74b-fp16" },
	{ value: [0.639, 789.580], name: "gpt-4.1-mini" },
	{ value: [2.470, 795.980], name: "sota-k" },
	{ value: [3.739, 816.590], name: "gpt-4.1" },
	{
		value: [0.990, 816.587],
		name: "gpt-4.1_closest_quality",
		itemStyle: { color: "#E74C3C" }, // 빨강
		emphasis: {
			itemStyle: {
				color: "#C0392B",
				borderColor: "#922B21",
				borderWidth: 3,
				shadowBlur: 15,
				shadowColor: "rgba(192,57,43,0.6)",
			},
			scale: 1.8,
		},
	},
	{ value: [5.790, 830.430], name: "gpt-5-chat" },
	{ value: [5.498, 810.650], name: "gpt-4o" },
	{
		value: [5.223, 837.741],
		name: "highest-quality",
		itemStyle: { color: "#8E44AD" }, // 보라
		emphasis: {
			itemStyle: {
				color: "#6C3483",
				borderColor: "#4A235A",
				borderWidth: 3,
				shadowBlur: 15,
				shadowColor: "rgba(142,68,173,0.6)",
			},
			scale: 1.8,
		},
	},
];
