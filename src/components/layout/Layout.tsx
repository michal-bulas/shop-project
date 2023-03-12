import React, { PropsWithChildren, useState } from 'react';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<MenuAppBar toggleMenu={toggleMenuHandler} />
			<MenuDrawer
				open={isMenuOpen}
				toggleMenu={toggleMenuHandler}
			/>
			<main>{children}</main>
		</>
	);
};

export default Layout;
