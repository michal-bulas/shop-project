import React, { PropsWithChildren, useState } from 'react';
import Head from 'next/head';
import Cart from '../cart/Cart';
import MenuAppBar from './MenuAppBar';
import MenuDrawer from './MenuDrawer';
import ScrollTop from './ScrollTop';
import Footer from './Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleMenuHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleCartHandler = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<>
			<Head>
				<title>Book Szop</title>
				<meta
					name='description'
					content='Book Shop App Project'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/icon.ico'
					type='image/x-icon'
				/>
			</Head>

			<Box
				sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
			>
				<div id='back-to-top-anchor'>
					<MenuAppBar
						toggleMenu={toggleMenuHandler}
						toggleCart={toggleCartHandler}
					/>
				</div>
				<MenuDrawer
					open={isMenuOpen}
					toggleMenu={toggleMenuHandler}
				/>
				<Cart
					open={isCartOpen}
					toggleCart={toggleCartHandler}
				/>
				<Container>{children}</Container>
				<Footer />
				<ScrollTop />
			</Box>
		</>
	);
};

export default Layout;
