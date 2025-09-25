/**
 * effectScatter 전용 툴팁 HTML 생성기
 * @param {object} params - ECharts formatter로부터 전달되는 params
 * @returns {string} HTML 문자열
 */
export default function effectScatterTooltip(params) {
	if (!params || !params.data || !Array.isArray(params.data)) return '';

	const x = params.data[0];
	const y = params.data[1];
	const category = x > 160 ? '고성능' : '저성능';
	const performance = y > 80 ? '우수' : y > 60 ? '보통' : '낮음';

	// 히트맵 데이터
	const heatmapData = [
		['CPU', 'GPU', 'Memory', 'Storage'],
		['Core i7', 'RTX 4080', '32GB', '1TB SSD'],
		['Core i5', 'RTX 4070', '16GB', '512GB SSD'],
		['Core i3', 'RTX 4060', '8GB', '256GB SSD'],
	];

	const heatmapHtml = heatmapData
		.map(
			(row, rowIndex) =>
				`<tr>${row
					.map(
						(cell, cellIndex) =>
							`<td style="padding: 6px 8px; border: 1px solid #ddd; background-color: ${
								rowIndex === 0
									? '#f8f9fa'
									: cellIndex === 0
									? '#e9ecef'
									: '#ffffff'
							}; font-weight: ${
								rowIndex === 0 ? 'bold' : 'normal'
							}; text-align: center;">${cell}</td>`,
					)
					.join('')}</tr>`,
		)
		.join('');

	return `
    <div style="padding: 12px; max-width: 400px;">
      <div style="font-weight: bold; margin-bottom: 12px; color: #ff6b6b; font-size: 14px;">포인트 분석</div>
      
      <div style="margin-bottom: 12px;">
        <div style="font-weight: bold; margin-bottom: 8px; color: #495057;">기본 정보</div>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 12px;">
          <tr>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee; font-weight: bold;">항목</td>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee; font-weight: bold;">값</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee;">X 좌표</td>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee;">${x}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee;">Y 좌표</td>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee;">${y}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee;">카테고리</td>
            <td style="padding: 4px 8px; border-bottom: 1px solid #eee; color: ${
							category === '고성능' ? '#28a745' : '#ffc107'
						};">${category}</td>
          </tr>
          <tr>
            <td style="padding: 4px 8px;">성능 등급</td>
            <td style="padding: 4px 8px; color: ${
							performance === '우수'
								? '#28a745'
								: performance === '보통'
								? '#ffc107'
								: '#dc3545'
						};">${performance}</td>
          </tr>
        </table>
      </div>

      <div>
        <div style="font-weight: bold; margin-bottom: 8px; color: #495057;">하드웨어 히트맵</div>
        <table style="border-collapse: collapse; width: 100%; font-size: 11px;">
          ${heatmapHtml}
        </table>
      </div>
    </div>
  `;
}
