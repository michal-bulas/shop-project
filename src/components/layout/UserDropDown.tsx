import { useState } from 'react';
import { useAuth } from '@/Contexts/AuthProvider';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserDropDown: React.FC = () => {
	const { logInWithGoogle, logOut, user } = useAuth();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const logInHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		logInWithGoogle();
	};

	const logOutHandler = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		logOut();
	};

	return (
		<>
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleMenu}
				color='primary'
			>
				{user ? (
					<Avatar
						alt='User Avatar'
						src={user.photoURL ?? undefined}
						sx={{ width: 30, height: 30 }}
					/>
				) : (
					<AccountCircle />
				)}
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{user ? (
					<Box sx={{ minWidth: 200 }}>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem
							onClick={(e) => {
								logOutHandler(e);
								handleClose();
							}}
						>
							Log Out
						</MenuItem>
					</Box>
				) : (
					<MenuItem
						sx={{ minWidth: 150 }}
						onClick={(e) => {
							logInHandler(e);
							handleClose();
						}}
					>
						Log In
					</MenuItem>
				)}
			</Menu>
		</>
	);
};

export default UserDropDown;
