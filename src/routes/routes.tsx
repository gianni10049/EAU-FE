import Homepage from '../components/Homepage/homepage';
import React from 'react';
import {routeData} from './routes.model';
import Donate from '../components/Donate/donate';
import Water_Projects from '../components/Water_Projects/water_projects';
import Education from '../components/Education/education';
import Blog from '../components/Blog/blog';
import About from '../components/About/about';
import Volunteer from '../components/Volunteer/volunteer';

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
		// eslint-disable-next-line react/jsx-pascal-case
		component: <Water_Projects />,
		account_needed: false,
		nav: true,
	},
	{
		path: '/blog',
		key: 'blog',
		component: <Blog />,
		account_needed: false,
		nav: true,
	},
	{
		path: '/about',
		key: 'about',
		component: <About />,
		account_needed: false,
		nav: true,
	},
	{
		path: '/volunteers',
		key: 'volunteers',
		component: <Volunteer />,
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
