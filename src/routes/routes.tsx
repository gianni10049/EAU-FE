import Homepage from '../components/Homepage/homepage';
import React from 'react';
import {routeData} from './routes.model';

const routes: routeData[] = [
	{
		path: '',
		key: 'homepage',
		component: <Homepage />,
		account_needed: false,
		nav: true,
	}
];

export default routes;
