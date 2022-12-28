import {
	Box,
	Flex,
	Icon,
	Link,
	Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { menuVoiceInterface } from './Header.model';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MenuVoice = (props: menuVoiceInterface) => {
	return (
		<Box
			color={'#050d24'}
			h={'120px'}
			cursor={'pointer'}
			
		>
			<Text
				fontSize={'1.1rem'}
				verticalAlign={'middle'}
				fontFamily={'Montserrat'}
				ml={6}
				color={'rgba(255,255,255,0.7)'}
				
			>
				{props.buttonText}
			</Text>

			{(props.icon && (
				<Icon
					as={props.icon}
					boxSize={8}
					color={'green.textLight'}
					cursor={'pointer'}
					ml={1}
				/>
			))}

		</Box>
	);
};

const Header = () => {
	const [subMenu, setSubMenu] = useState<string>('');
	const { t } = useTranslation();


	return (
		<Box
			bg={'#050d24'}
			w={'100vw'}
			h={'120px'}
			borderBottom={'1px solid black'}
			boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
			filter=' drop-shadow(0px 5px 5px rgba(0,0,0,0.3))'
			zIndex={100}>
				
				<Box
					display={'flex'}
					h={'100%'}
					onMouseLeave={() => setSubMenu('')}
					alignItems={'center'}
				>
					<Link
						to={'/donate'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.donate')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>
					<Link
						to={'/insights'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.insights')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>

					<Link
						to={'/about'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.about')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>
					<Link
						to={'/water_projects'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.water_projects')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>

					<Link
						to={'/education'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.skills_education')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>
					<Link
						to={'/volunteers'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.volunteers')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>

					<Link
						to={'/blog'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('footer.blog')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>
					
				</Box>
			
		</Box>
	);
};

export default Header;
