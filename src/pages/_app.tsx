import Layout from '@/components/layout/Layout';
import AuthProvider from '@/contexts/AuthProvider';
import CartProvider from '@/contexts/CartProvider';
import { theme } from '@/utilities/theme';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';

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
