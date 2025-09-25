import { Box } from '@mantine/core';
import MyChart from './Chart';

export default function Introduce() {
	return (
		<Box
			component="main"
			className="fade-in"
			style={{
				height: '90vh',
				width: '100vw',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				style={{
					height: '90%',
					width: '90%',
					display: 'flex',
					flexDirection: 'column',
					gap: 12,
					boxSizing: 'border-box',
				}}
			>
				<Box
					className="chart-card"
					style={{
						flex: 1,
						minHeight: 0,
						width: '100%',
					}}
				>
					<MyChart />
				</Box>
			</Box>
		</Box>
	);
}
