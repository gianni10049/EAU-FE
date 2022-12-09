import {gql} from '@apollo/client';
import {GQLQuery} from './GQL';
import {tokenControlData} from '../components/Routes/RouteControl.model';

const TOKEN_CONTROL = gql`
	query routeControl(
		$token: String!
		$account_needed: Boolean!
	) {
		routeControl(
			token: $token
			account_needed: $account_needed
		) {
			response
			responseStatus
		}
	}
`;

export const getTokenControl = async (data: tokenControlData) => {
	return await GQLQuery(TOKEN_CONTROL, data);
};
