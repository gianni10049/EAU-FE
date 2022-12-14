import {
	Box,
	Flex,
	Icon,
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
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Logo from './logo';

const MenuVoice = (props: menuVoiceInterface) => {
	return (
		<Box
			color={'rgba(255,255,255,0.7)'}
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
				color={'rgba(255,255,255,0.7)'}
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
			bg={'linear-gradient(60deg, rgba(200, 255, 210, 1) 0%, rgba(0,172,193,0.7) 100%)'}
			w={'100vw'}
			h={'120px'}
			borderBottom={'1px solid black'}
			boxShadow='0px -5px 10px 0px rgba(0, 0, 0, 0.5)'
			filter=' drop-shadow(0px 5px 5px rgba(0,0,0,0.3))'
			zIndex={100}>
			<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
				 viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
				<defs>
					<path id="gentle-wave"
						  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
				</defs>
				<g className="parallax">
					<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,172,193,0.1)" />
					<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,172,193,0.2)" />
					<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,172,193,0.4)" />
					<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0,172,193,0.5)" />
				</g>
			</svg>
			<Flex justifyContent={'space-between'} alignItems={'center'} h={'full'} w={'90%'} m={'0 auto'} pos={'relative'} zIndex={10}>
				{/*Links*/}
				<Box>
					<Logo width={'200px'} height={'full'} />
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
