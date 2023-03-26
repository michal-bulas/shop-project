import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useCart } from '@/Contexts/CartProvider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UserDropDown from './UserDropDown';
import Badge from '@mui/material/Badge';

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
				color='primary'
			>
				<Toolbar
					sx={{
						height: scrollPosition > 50 ? '65px' : '90px',
						transition: 'all 0.2s linear',
						boxShadow: 10,
					}}
				>
					<IconButton
						size='large'
						edge='start'
						color='info'
						aria-label='menu'
						onClick={toggleMenu}
						sx={{ mr: 'auto' }}
					>
						<MenuIcon />
					</IconButton>
					<Box
						sx={{
							left: '50%',
							transform: 'translate(-50%, 0)',
							position: 'absolute',
						}}
					>
						<Link href='/'>
							<Logo size={scrollPosition > 50 ? 7 : 10} />
						</Link>
					</Box>

					<Box>
						<UserDropDown />

						<IconButton
							size='large'
							aria-label='cart of current user'
							color='info'
							onClick={toggleCart}
						>
							<Badge
								badgeContent={cartQuantity}
								color='secondary'
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
							>
								<ShoppingCartOutlinedIcon />
							</Badge>
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Box>
	);
};

export default MenuAppBar;
