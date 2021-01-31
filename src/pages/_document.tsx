import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html className='js' lang='en'>
				<Head />
				<body className='LEGACY_DETAILS html not-front not-logged-in no-sidebars page-node page-node- page-node-106191 node-type-story i18n-en-he background-hermes section-story page-panels keyboard-nav tray-nav-open'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
