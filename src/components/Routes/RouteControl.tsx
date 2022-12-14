import React, { createContext, useContext, useEffect, useState } from 'react';
import { getTokenControl } from '../../apollo/Generic';
import Page404 from '../404/404';
import Header from '../Core/Header';
import { Box, Container } from '@chakra-ui/react';
import { AuthDataResponse, ProvideAuthData, RouteControlData } from './RouteControl.model';

const authContext = createContext<AuthDataResponse>({
	auth: false,
	inProgress: true,
});

export function ProvideAuth(data: ProvideAuthData) {
	let auth = useProvideAuth({
		account_needed: data.account_needed,
	});
	return (
		<authContext.Provider value={auth}>
			{data.children}
		</authContext.Provider>
	);
}

export const useAuth: any = () => {
	return useContext(authContext);
};

function useProvideAuth(props: ProvideAuthData) {
	const [auth, setAuth] = useState(null);
	const [inProgress, setInProgress] = useState(true);

	useEffect(() => {
		getTokenControl({
			account_needed: props.account_needed,
		}).then((response: { routeControl: any; }) => {
			let data = response.routeControl;
			setAuth(data.response);
			setInProgress(false);
			return auth;
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return { auth, inProgress };
}

export const RouteControl = (props: RouteControlData) => {
	const auth = useAuth();

	if (auth.auth) {
		if (props.data.nav) {
			return (
				<>
					<Header />
					<Box id={'ct-main-navigation-bar'} gap={4} overflow={'auto'}>
						{/*LEFT*/}
						{/*RIGHT*/}
						<Box
							bg={'white'}
							w={'full'}
							pt={'150px'}
							minH={'calc(100vh - 100px)'}
							h={'8000px'}
							bgSize={'50px'}
							backgroundRepeat={'repeat'}
							id={'global_windows'}>
							{/*RIGHT content*/}
							<Container maxW={'full'}>
								{props.children}
							</Container>
						</Box>
					</Box>
				</>
			);
		} else {
			return <>{props.children}</>;
		}
	}

	if (auth.inProgress) {
		return <></>;
	}

	return <Page404 code={403} />;
};
