import { Box, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

import React from 'react';
import { LogoData } from './logo.model';
import homepage_logo from '../../static/images/logo/logo.png';

const Logo = (props: LogoData) => {

	return (
		<Link to={'/'} as={ReachLink}>
			<Box width={props?.width ?? 'full'} height={props?.height ?? 'full'}>
				<Image src={homepage_logo} alt='Logo' />
			</Box>
		</Link>
	);
};

export default Logo;
