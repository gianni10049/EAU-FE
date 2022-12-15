import Homepage from '../components/Homepage/homepage';
import React from 'react';
import {routeData} from './routes.model';
import Donate from '../components/Donate/donate';
import Water_Projects from '../components/Water_Projects/water_projects';
import Education from '../components/Education/education';

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
	},

	{
		path: '/water_projects',
		key: 'water_projects',
		component: <Water_Projects />,
		account_needed: false,
		nav: true,
	},

	{
		path: '/education',
		key: 'education',
		component: <Education />,
		account_needed: false,
		nav: true,
	}
];

export default routes;
