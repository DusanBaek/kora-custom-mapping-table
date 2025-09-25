/**
 * effectScatter 전용 툴팁 HTML 생성기
 * @param {object} params - ECharts formatter로부터 전달되는 params
 * @returns {string} HTML 문자열
 */
export default function effectScatterTooltip(params) {
	if (!params || !params.data) return '';

	// 모델 이름 그대로 파일명으로 사용
	const modelName = params.data.name;
	const imageUrl = `public/${modelName}.png`;

	return `
	<div style="padding: 12px; max-width: 1300px;">
		<div style="font-weight: bold; margin-bottom: 12px; color: #ff6b6b; font-size: 14px;">Custom Mapping Table</div>

		<div style="margin-bottom: 12px; text-align: center;">
			<img src="${imageUrl}" alt="${modelName}" 
				style="max-width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);" />
		</div>

		<div style="margin-bottom: 12px;">
			<div style="font-weight: bold; margin-bottom: 8px; color: #495057;">Quality & Cost</div>
			<p>Cost: ${params.data.value[0]}</p>
			<p>Quailty: ${params.data.value[1]}</p>
		</div>
	</div>
	`;
}
