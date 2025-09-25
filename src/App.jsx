import { Container, Flex } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/Header';
import Main from './layouts/Main';

export default function App() {
	return (
		<div
			style={{
				fontFamily: 'Inter, sans-serif',
				color: '#343a40',
				width: '100%',
				height: '100vh',
				boxSizing: 'border-box',
				overflow: 'hidden',
			}}
		>
			<Header />
			<Flex style={{ height: 'calc(100vh - 80px - 2rem)' }}>
				<div style={{ flex: 1, paddingLeft: '0.5rem', height: '100%' }}>
					<Routes>
						<Route path="/" element={<Main />} />
					</Routes>
				</div>
			</Flex>
		</div>
	);
}
