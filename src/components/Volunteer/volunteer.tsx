import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import volunteer_hero from '../../static/images/volunteer/hero_volunteer.jpeg';
import { useTranslation } from 'react-i18next';

const Volunteer = () => {
	const { t } = useTranslation();


	return (
		
		<Box
			w={'full'}
		>
			<Box
				bgImage={volunteer_hero}
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
							{t('volunteer.hero_title')}
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
							{t('volunteer.hero_subtitle')}
						</Heading>
						
					</Box>

				</Box>


			</Box>

		</Box>
	);
};

export default Volunteer;
