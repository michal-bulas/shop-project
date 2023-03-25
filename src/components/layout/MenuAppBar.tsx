import React from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/Contexts/CartProvider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UserDropDown from './UserDropDown';
import Badge from '@mui/material/Badge';
import Link from 'next/link';
import Logo from './Logo';

interface MenuAppBarProps {
	toggleMenu: () => void;
	toggleCart: () => void;
}

const MenuAppBar: React.FC<MenuAppBarProps> = ({ toggleMenu, toggleCart }) => {
	const scrollPosition = useScrollPosition();
	const { cartQuantity } = useCart();

	return (
		<Box>
			<AppBar
				position='fixed'
				component='nav'
				color='transparent'
				sx={{ top: 0, backdropFilter: 'blur(20px)' }}
			>
				<Toolbar
					sx={{
						height: scrollPosition > 50 ? '65px' : '90px',
						transition: 'all 0.2s linear',
					}}
				>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
						onClick={toggleMenu}
					>
						<MenuIcon />
					</IconButton>

					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexGrow: 1,
						}}
					>
						<Link
							href='/'
							style={{
								textDecoration: 'none',
								color: 'white',
								fontFamily: 'Roboto',
							}}
						>
							<Logo size={scrollPosition > 50 ? 7 : 10} />
						</Link>{' '}
					</Box>

					<UserDropDown />

					{cartQuantity > 0 && (
						<IconButton
							size='large'
							aria-label='cart of current user'
							color='inherit'
							onClick={toggleCart}
							sx={{ ml: 1 }}
						>
							<Badge
								badgeContent={cartQuantity}
								color='secondary'
							></Badge>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					)}
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Box>
	);
};

export default MenuAppBar;
