import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { LogoData } from './logo.model';
import homepage_logo from '../../static/images/logo/logo.png';

const Logo = (props: LogoData) => {

	return (
		<Box width={props?.width ?? 'full'} height={props?.height ?? 'full'}>
			<Image src={homepage_logo} alt='Logo' />
		</Box>
	);
};

export default Logo;
