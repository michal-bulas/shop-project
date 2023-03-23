import Layout from '@/components/layout/Layout';
import AuthProvider from '@/store/AuthProvider';
import CartProvider from '@/store/CartProvider';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#4b4949',
		},
		secondary: {
			main: '#ab003c',
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
