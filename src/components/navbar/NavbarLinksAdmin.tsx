'use client';
// Chakra Imports
import {
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { SidebarResponsive } from '@/components/sidebar/Sidebar';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { MdInfoOutline } from 'react-icons/md';
import NavLink from '../link/NavLink';
import routes from '@/routes';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";


export default function HeaderLinks(props: {
  secondary: boolean;
  setApiKey: any;
}) {
  const { secondary, setApiKey } = props;
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [showUi, setShowUi] = useState(false);
  // Chakra Color Mode
  const navbarIcon = useColorModeValue('gray.500', 'white');
  let menuBg = useColorModeValue('white', 'navy.800');
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
  const shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
    '0px 41px 75px #081132',
  );
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' },
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' },
  );

  const { isAuthenticated, logout } = useAuth();

  const username = localStorage.getItem('username');
  console.log("username", username);

  const handleLogout = () => {

    logout();
    router.push('/login');
  };


  return (
    <Flex
    
      zIndex="100"
      w={{ sm: '100%', md: 'auto' }}
      alignItems="center"
      flexDirection="row"
      bg={menuBg}
      flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
      p="10px"
      borderRadius="30px"
    >
      <SidebarResponsive routes={routes} />
      <Menu>
        <MenuButton p="0px" style={{ position: 'relative' }}>
          <Box
            _hover={{ cursor: 'pointer' }}
            color="white"
            bg="#ff7300"
            w="40px"
            h="40px"
            borderRadius={'50%'}
          />
          <Center top={0} left={0} position={'absolute'} w={'100%'} h={'100%'}>
            <Text fontSize={'xs'} fontWeight="bold" color={'white'}>
            {isAuthenticated ? (
                <> {username ? <FaUserAlt/> : 'Guest'}</>
              ) : (
                <p>Silakan masuk untuk melihat profil.</p>
              )}
            </Text>
          </Center>
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="0px"
          mt="10px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
        >
          <Flex w="100%" mb="0px">
            <Text
              ps="20px"
              pt="16px"
              pb="10px"
              w="100%"
              fontFamily="'Poppins',sans-serif"
              borderBottom="1px solid"
              borderColor={borderColor}
              fontSize="sm"
              fontWeight="700"
              color={textColor}
              
            >
              👋&nbsp;  {isAuthenticated ? (
                <p>Welcome, {username ? username : 'Tamu'}</p>
              ) : (
                <p>Silakan masuk untuk melihat profil.</p>
              )}
            </Text>
          </Flex>
          <Flex flexDirection="column" p="10px">
            <MenuItem
              _hover={{ bg: 'none' }}
              _focus={{ bg: 'none' }}
              color="red.400"
              borderRadius="8px"
              px="14px"
              fontFamily="'Poppins',sans-serif"
            >
              <Text fontWeight="500" fontSize="sm"
                onClick={handleLogout}
              >
                Log Out
              </Text>
            </MenuItem>
          </Flex>
          
        </MenuList>
      </Menu>
    </Flex>
  );
}
