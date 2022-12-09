import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

function createApolloClient() {

	const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

	return new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						accountConnected: {
							merge(existing, incoming) {
								return incoming;
							},
						},
					},
				},
				Mutation: {
					fields: {
						accountConnectedMutation: {
							merge(existing, incoming) {
								return incoming;
							},
						},
					},
				},
			},
		}),
	});
}

export { createApolloClient };
