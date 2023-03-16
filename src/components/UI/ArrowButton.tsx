import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface DirectionTypes {
	direction: 'left' | 'right';
	onClick?: () => void;
}
const ArrowButton: React.FC<DirectionTypes> = (props) => {
	const ArrowStyles = {
		position: 'absolute',
		top: '50%',
		zIndex: 1,
		[props.direction]: '-5px',
		transform: `translate(0,-50%) ${
			props.direction === 'left' ? 'rotate(180deg)' : ''
		}`,
		color: 'rgba(255, 255, 255, 0.65)',
		cursor: 'pointer',
		':active': {
			color: 'rgba(201, 38, 38, 0.54)',
		},
	};
	return (
		<IconButton
			onClick={props.onClick}
			sx={ArrowStyles}
		>
			<ArrowForwardIosIcon sx={{ fontSize: 35 }} />{' '}
		</IconButton>
	);
};

export default ArrowButton;
