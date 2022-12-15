import React from 'react';
import { Box, Button, Heading, Link } from '@chakra-ui/react';
import education_hero from '../../static/images/education/education_hero.jpg';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink } from 'react-router-dom';

const Education = () => {
	const { t } = useTranslation();


	return (
		
		<Box
			w={'full'}
		>
			<Box
				bgImage={education_hero}
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
							{t('education.hero_title')}
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
							{t('education.hero_subtitle')}
						</Heading>
						
					</Box>

				</Box>


			</Box>

		</Box>
	);
};

export default Education;
