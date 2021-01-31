import Head from 'next/head';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Fake Page</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
