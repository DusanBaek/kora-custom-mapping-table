import { Box, Title } from '@mantine/core';

export default function Header() {
	return (
		<Box
			component="header"
			p="lg"
			style={{
				borderBottom: '1px solid #e0e0e0',
				display: 'flex',
				alignItems: 'center',
				color: 'white',
				maxWidth: '95%',
				margin: '0 auto',
			}}
		>
			<Title order={2} fz={24}>
				Kora Cost
			</Title>
		</Box>
	);
}
