import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import UserDropDown from './UserDropDown';
import Link from 'next/link';

interface MenuAppBarProps {
	toggleMenu: () => void;
}

const MenuAppBar: React.FC<MenuAppBarProps> = ({ toggleMenu }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed'>
				<Toolbar>
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
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1 }}
					>
						<Link
							href='/'
							style={{
								textDecoration: 'none',
								color: 'white',
								fontFamily: 'Roboto',
							}}
						>
							Shop App Project
						</Link>
					</Typography>
					<>
						<UserDropDown />

						<IconButton
							size='large'
							aria-label='cart of current user'
							color='inherit'
						>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</Box>
	);
};

export default MenuAppBar;
