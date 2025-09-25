import React, { useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import { effectScatterData } from '../data/effectScatterData';
import { lineData } from '../data/lineData';
import { scatterData } from '../data/scatterData';
import effectScatterTooltip from '../data/effectScatterTooltip';

export default function MyChart() {
	const chartRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (chartRef.current) {
				chartRef.current.getEchartsInstance().resize();
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const option = {
		// 차트 상단 제목
		title: {
			text: 'Router 비용 비교',
			left: 'center',
		},
		animation: true,
		animationDuration: 1000,
		animationEasing: 'cubicOut',
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(255, 255, 255, 0.95)',
			borderColor: '#ccc',
			borderWidth: 1,
			confine: true,   // 화면 밖으로 안 나가게 강제로 차트 영역 안에 고정
			textStyle: {
				fontSize: 12,
				fontWeight: 'bold',
				color: '#2c3e50',
			},
			formatter: function (params) {
				if (params.seriesType === 'effectScatter') {
					return effectScatterTooltip(params);
				}
				return `${params.seriesName}<br/>X: ${params.data[0]}<br/>Y: ${params.data[1]}`;
			},
		},
		xAxis: {
			scale: true,
			axisLine: { lineStyle: { color: '#95a5a6' } },
			axisLabel: { color: '#34495e' },
			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#ecf0f1',
				},
			},
		},
		yAxis: {
			scale: true,
			axisLine: { lineStyle: { color: '#95a5a6' } },
			axisLabel: { color: '#34495e' },
			splitLine: {
				lineStyle: {
					type: 'dashed',
					color: '#ecf0f1',
				},
			},
		},
		series: [
			// 일반 포인트
			{
				type: 'scatter',
				data: scatterData,
				itemStyle: {
					opacity: 0.7,
					color: 'lightgrey',
				},
				z: 1
			},
			// 크게 효과 주고 싶은 포인트 지점
			{
				type: 'effectScatter',
				name: '특별 포인트',
				symbolSize: 20,
				itemStyle: {
					color: '#2ECC71',
				},
				emphasis: {
					itemStyle: {
						color: '#27AE60',
						borderColor: '#1E8449',
						borderWidth: 3,
						shadowBlur: 12,
						shadowColor: 'rgba(46, 204, 113, 0.5)',
					},
					scale: 1.5,
				},
				data: effectScatterData,
				label: {
					show: true,
					position: 'top',  // 또는 'right', 'inside' 등
					formatter: function (params) {
						return params.name;  // 또는 params.value 등
					}
				},
				z: 2
			},
			// 라인 그리고 싶은 포인트 들
			{
				type: 'line',
				smooth: true,
				data: lineData,
				lineStyle: {
					color: '#3498db',
					width: 2,
					type: 'dashed',
				},
				symbol: 'none',
				z: 3
			},
		],
	};

	return (
		<ReactECharts
			ref={chartRef}
			option={option}
			style={{
				height: '100%',
				width: '100%',
				minHeight: '400px',
			}}
			opts={{
				renderer: 'canvas',
			}}
		/>
	);
}
