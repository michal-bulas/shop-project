import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		ssm: true;
		smd: true;
		xm: true;
	}
}
export const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#585858',
		},
		secondary: {
			main: '#ab003c',
		},
		info: {
			main: '#ffffff',
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			ssm: 500,
			sm: 600,
			smd: 750,
			md: 900,
			xm: 1050,
			lg: 1200,
			xl: 1536,
		},
	},
});
