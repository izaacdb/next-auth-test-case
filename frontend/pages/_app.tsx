import {ApolloClient, ApolloProvider, DefaultOptions, InMemoryCache} from '@apollo/client'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Provider as NextAuthProvider} from 'next-auth/client'

export default function Workshop({Component, pageProps}: AppProps) {
	const defaultOptions: DefaultOptions = {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	}
	const client = new ApolloClient({
		uri: process.env.NEXT_PUBLIC_APOLLO_SERVER,
		cache: new InMemoryCache({
			addTypename: false,
		}),
		defaultOptions: defaultOptions,
	})

	return (
		<>
			<Head>
				<title>Workshop</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Open+Sans&display=swap"
				/>
			</Head>

			<NextAuthProvider session={pageProps.session}>
				<ApolloProvider client={client}>
					<Component {...pageProps} />
				</ApolloProvider>
			</NextAuthProvider>
		</>
	)
}
