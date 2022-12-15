import React from 'react';
import { Box, Button, Heading, Link } from '@chakra-ui/react';
import homepage_hero from '../../static/images/home/cropped-3-1-scaled-1.jpeg';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink } from 'react-router-dom';

const Homepage = () => {
	const { t } = useTranslation();


	return (
		<Box
			w={'full'}
		>
			<Box
				bgImage={homepage_hero}
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
							{t('home.hero_title')}
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
							{t('home.hero_subtitle')}
						</Heading>
						<Box display={'flex'} w={'50%'} minW={'600px'} justifyContent={'space-between'}
							 margin={'0 auto'}>
							<Link
								to={'/water_projects'}
								as={ReachLink}>
								<Button
									bg={'#36a464'}
									fontSize={'3xl'}
									p={10}
									fontFamily={'Montserrat'}
									letterSpacing={'3px'}
									fontWeight={900}
									color={'white'}
									textTransform={'uppercase'}
									_hover={{
										bg: '#40C778',
									}}
								>
									{t('home.learn_button')}
								</Button>
							</Link>
							<Link
								to={'/donate'}
								as={ReachLink}>
								<Button
									bg={'rgba(0,172,193,1)'}
									fontSize={'3xl'}
									p={10}
									fontFamily={'Montserrat'}
									letterSpacing={'3px'}
									fontWeight={900}
									color={'white'}
									textTransform={'uppercase'}
									_hover={{
										bg: 'rgb(5,204,229,1)',
									}}
								>
									{t('home.donate_button')}

								</Button>
							</Link>

						</Box>
					</Box>

				</Box>


			</Box>

		</Box>
	);
};

export default Homepage;
