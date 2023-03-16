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
import { useScrollPosition } from '@/hooks/useScrollPosition';

interface MenuAppBarProps {
	toggleMenu: () => void;
}

const MenuAppBar: React.FC<MenuAppBarProps> = ({ toggleMenu }) => {
	const scrollPosition = useScrollPosition();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='fixed'
				color='transparent'
				sx={{ top: 0, backdropFilter: 'blur(20px)' }}
			>
				<Toolbar
					sx={{
						height: scrollPosition > 100 ? '65px' : '75px',
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
							<Typography
								variant='h6'
								component='h1'
								sx={{
									fontSize: scrollPosition > 100 ? '18px' : '20px',
									transition: 'all 0.2s linear',
									color: 'black',
								}}
							>
								Shop App Project
							</Typography>
						</Link>
					</Typography>
					<>
						<UserDropDown />

						<IconButton
							size='large'
							aria-label='cart of current user'
							color='inherit'
						>
							<Badge
								badgeContent={3}
								color='error'
							></Badge>
							<ShoppingCartOutlinedIcon />
						</IconButton>
					</>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default MenuAppBar;
