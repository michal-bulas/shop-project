import React, { PropsWithChildren, useState } from 'react';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
			<div id='back-to-top-anchor'>
				<MenuAppBar toggleMenu={toggleMenuHandler} />
				<MenuDrawer
					open={isMenuOpen}
					toggleMenu={toggleMenuHandler}
				/>
			</div>
			<Container>{children}</Container>
			<Footer />
			<ScrollTop />
		</Box>
	);
};

export default Layout;
