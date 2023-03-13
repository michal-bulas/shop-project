import React, { PropsWithChildren, useState } from 'react';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';
import ScrollTop from './ScrollTop';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div id='back-to-top-anchor' />
			<MenuAppBar toggleMenu={toggleMenuHandler} />
			<MenuDrawer
				open={isMenuOpen}
				toggleMenu={toggleMenuHandler}
			/>
			<main>{children}</main>
			<ScrollTop />
		</>
	);
};

export default Layout;
