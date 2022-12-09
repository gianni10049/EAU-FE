import {Box, Flex, Link, Tooltip} from '@chakra-ui/react';
import {Link as ReachLink} from 'react-router-dom';
import {navLinkInterface,} from './Header.model';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Logo from "./logo";

const NavLink = (props: navLinkInterface) => {
    return (
        <Tooltip
            hasArrow
            label={props.label}
            bg={'green.light'}
            color={'green.text'}
            fontSize={'md'}
            placement={'left'}
            fontFamily={'TecFont'}
            letterSpacing={'widest'}
            fontWeight={'extrabold'}>
            <Link
                to={'#'}
                as={ReachLink}
                onClick={props.onClick}
                color={'green.textLight'}
                bg={props.current_url ? 'green.light' : 'transparent'}
                py={2}
                px={2}
                w={'full'}
                display={'block'}
                _hover={{
                    bg: 'green.border',
                    color: 'white',
                }}>
            </Link>
        </Tooltip>
    );
};


const Header = () => {
    const [hovered] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<string>('');
    const {t} = useTranslation();


    return (
        <Box
            bg={'green.backgroundDark'}
            pos={'fixed'}
            left={0}
            top={0}
            minH={'100vh'}
            zIndex={100}>
            <Flex>
                <Box height={'100vh'}>
                    {/*Links*/}
                    <Box w={'50px'} mt={8} mb={3} mx={3}>
                        <Logo/>
                    </Box>
                    <Box display={'block'}>
                        <NavLink
                            icon={<></>}
                            label={t('mainMenu.map.button')}
                            hovered={hovered}
                            current_url={subMenu === 'map'}
                            onClick={() => {
                                subMenu === '' || subMenu !== 'map'
                                    ? setSubMenu('map')
                                    : setSubMenu('');
                            }}
                        />
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

export default Header;
