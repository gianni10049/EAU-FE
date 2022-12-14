import {
	Box,
	Flex,
	Icon,
	Image,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';
import { menuVoiceInterface } from './Header.model';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import homepage_logo from '../../static/images/logo/logo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const MenuVoice = (props: menuVoiceInterface) => {
	return (
		<Box
			color={'green.textLight'}
			cursor={'pointer'}
			py={3}
			pr={3}
			onClick={props.onClick}
			display={'flex'}
			alignItems={'center'}
			onMouseEnter={props.onMouseEnter}
		>
			<Text
				fontSize={'2.2rem'}
				verticalAlign={'middle'}
				fontFamily={'Montserrat'}
				ml={6}
				color={'rgba(16,164,120,0.73)'}
				bgImage={'https://image.ibb.co/ciSeac/image.png'}
				bgRepeat={'repeat-x'}
				className={'text-loading'}
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
			bg={'rgba(255,255,255,0.91)'}
			pos={'fixed'}
			left={0}
			top={0}
			w={'100vw'}
			h={'120px'}
			borderBottom={'1px solid black'}
			boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
			filter=' drop-shadow(0px 5px 5px rgba(0,0,0,0.3))'
			zIndex={100}>
			<Flex justifyContent={'space-between'} alignItems={'center'} h={'full'} w={'90%'} m={'0 auto'}>
				{/*Links*/}
				<Box>
					{/*<Logo width={'150px'} height={'full'} />*/}
					<Box width={'200px'} height={'full'}>
						<Image src={homepage_logo} alt='Dan Abramov' />
					</Box>
				</Box>
				<Box
					display={'flex'}
					h={'100%'}
					onMouseLeave={() => setSubMenu('')}
					alignItems={'center'}
				>

					<Menu isOpen={(subMenu === 'projects')}>
						<MenuButton
							onMouseEnter={() => setSubMenu('projects')}
							fontSize={'2.5rem'}
							verticalAlign={'middle'}
							fontFamily={'Montserrat'}
							color={'rgba(16,164,120,0.73)'}
							bgImage={'https://image.ibb.co/ciSeac/image.png'}
							bgRepeat={'repeat-x'}
							className={'text-loading'}
						>
							<MenuVoice
								buttonText={t('header.projects')}
								icon={MdOutlineKeyboardArrowDown}
							/>
						</MenuButton>
						<MenuList
							onMouseLeave={() => setSubMenu('')}
						>
							<MenuItem
								bg={'white'}
								fontSize={'1.5rem'}
								verticalAlign={'middle'}
								fontFamily={'Montserrat'}
								color={'rgba(16,164,120,0.73)'}
								bgImage={'https://image.ibb.co/ciSeac/image.png'}
								bgRepeat={'repeat-x'}
								className={'text-loading'}
							>
								<Link
									to={'/water_project'}
									as={ReachLink}>
									{t('header.water_projects')}
								</Link>
							</MenuItem>
							<MenuDivider />
							<MenuItem
								bg={'white'}
								fontSize={'1.5rem'}
								verticalAlign={'middle'}
								fontFamily={'Montserrat'}
								color={'rgba(16,164,120,0.73)'}
								bgImage={'https://image.ibb.co/ciSeac/image.png'}
								bgRepeat={'repeat-x'}
								className={'text-loading'}
							>
								<Link
									to={'/education'}
									as={ReachLink}>
									{t('header.skills_education')}
								</Link>
							</MenuItem>
						</MenuList>
					</Menu>

					<Menu isOpen={(subMenu === 'insights')}>
						<MenuButton
							onMouseEnter={() => setSubMenu('insights')}
							fontSize={'2.5rem'}
							verticalAlign={'middle'}
							fontFamily={'Montserrat'}
							color={'rgba(16,164,120,0.73)'}
							bgImage={'https://image.ibb.co/ciSeac/image.png'}
							bgRepeat={'repeat-x'}
							className={'text-loading'}
						>
							<MenuVoice
								buttonText={t('header.insights')}
								icon={MdOutlineKeyboardArrowDown}
							/>
						</MenuButton>
						<MenuList
							onMouseLeave={() => setSubMenu('')}
						>
							<MenuItem
								bg={'white'}
								fontSize={'1.5rem'}
								verticalAlign={'middle'}
								fontFamily={'Montserrat'}
								color={'rgba(16,164,120,0.73)'}
								bgImage={'https://image.ibb.co/ciSeac/image.png'}
								bgRepeat={'repeat-x'}
								className={'text-loading'}
							>
								<Link
									to={'/volunteers'}
									as={ReachLink}>
									{t('header.volunteers')}
								</Link>
							</MenuItem>
							<MenuDivider />
							<MenuItem
								bg={'white'}
								fontSize={'1.5rem'}
								verticalAlign={'middle'}
								fontFamily={'Montserrat'}
								color={'rgba(16,164,120,0.73)'}
								bgImage={'https://image.ibb.co/ciSeac/image.png'}
								bgRepeat={'repeat-x'}
								className={'text-loading'}
							>
								<Link
									to={'/blog'}
									as={ReachLink}>
									{t('header.blog')}
								</Link>
							</MenuItem>
						</MenuList>
					</Menu>

					<Link
						to={'/private_donate'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('header.donate')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>

					<Link
						to={'/about'}
						as={ReachLink}>
						<MenuVoice
							buttonText={t('header.about')}
							onMouseEnter={() => setSubMenu('')}
						/>
					</Link>

				</Box>
			</Flex>
		</Box>
	);
};

export default Header;
