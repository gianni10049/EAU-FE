export interface ProvideAuthData {
	children?: any;
	account_needed: boolean;
}

export interface tokenControlData {
	account_needed: boolean;
}

export interface RouteControlData {
	children: any;
	data: {
		nav: boolean;
	};
}

export interface AuthDataResponse {
	auth: any;
	inProgress: boolean;
}
