import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useAuth } from '@/store/AuthProvider';
import { useState } from 'react';

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
			{user && (
				<Typography
					variant='h6'
					onClick={handleMenu}
					sx={{
						'&:hover': {
							cursor: 'pointer',
							textDecoration: 'underline',
						},
					}}
				>
					{user?.displayName}
				</Typography>
			)}
			<IconButton
				size='large'
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleMenu}
				color='inherit'
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
				{user ? ( // replace div
					<div>
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
					</div>
				) : (
					<MenuItem
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
