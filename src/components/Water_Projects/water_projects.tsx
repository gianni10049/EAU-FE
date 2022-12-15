import React from 'react';
import { Box, Button, Heading, Link } from '@chakra-ui/react';
import water_hero from '../../static/images/water_projects/water_hero.jpg';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink } from 'react-router-dom';

const Water_Projects = () => {
	const { t } = useTranslation();


	return (
		
		<Box
			w={'full'}
		>
			<Box
				bgImage={water_hero}
				bgRepeat={'no-repeat'}
				bgPos={'center center'}
				bgSize={'cover'}
				h={'calc(100vh - 240px)'}>

				<Box w={'full'} h={'full'} bgColor={'rgba(42,80,126,0.4)'} display={'flex'} justifyContent={'center'}
					 alignItems={'center'}>
					<Box textAlign={'center'}>
						<Heading
							as='h1'
							fontSize={'120px'}
							noOfLines={1}
							color={'white'}
							fontWeight={600}
							fontFamily={'Montserrat'}
							letterSpacing={0.6}
							mb={30}
						>
							{t('water.hero_title')}
						</Heading>
						<Heading
							as='h1'
							size='xl'
							noOfLines={1}
							color={'white'}
							fontWeight={600}
							fontFamily={'Montserrat'}
							letterSpacing={0.6}
							my={20}
						>
							{t('water.hero_subtitle')}
						</Heading>
						
					</Box>

				</Box>


			</Box>

		</Box>
	);
};

export default Water_Projects;
