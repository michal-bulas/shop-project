import Layout from '@/components/layout/Layout';
import AuthProvider from '@/Contexts/AuthProvider';
import CartProvider from '@/Contexts/CartProvider';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		ssm: true;
	}
}
const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#49494b',
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
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<CartProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</CartProvider>
		</AuthProvider>
	);
}
