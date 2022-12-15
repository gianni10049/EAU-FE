import Homepage from '../components/Homepage/homepage';
import React from 'react';
import {routeData} from './routes.model';
import Donate from '../components/Donate/donate';

const routes: routeData[] = [
	{
		path: '',
		key: 'homepage',
		component: <Homepage />,
		account_needed: false,
		nav: true,
	},

	{
		path: '/donate',
		key: 'donate',
		component: <Donate />,
		account_needed: false,
		nav: true,
	}
];

export default routes;
