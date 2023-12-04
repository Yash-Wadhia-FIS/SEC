'use client';
import LoginPage from './login';
import App from './_app';
import React, { useEffect, useState } from 'react';
import { Box, Portal, useDisclosure, ChakraProvider, Center } from '@chakra-ui/react';
import theme from '@/theme/theme';
import routes from '@/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from './NavbarAdmin';
import { getActiveRoute, getActiveNavbar } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import { useAuth, AuthContext } from '../src/contexts/AuthContext';
import { Router } from 'next/router';
import { AppProps } from 'next/app';
import { useContext } from "react"
import { useRouter } from 'next/router';
import { FullPageChat } from "flowise-embed-react"
import { CustomChatProps } from "../src/types/chat-types"
// import { chatStyle } from "../src/styles/chatStyle"
import { ChatInner } from '@/components/chat/ChatInner';
import { sendMessage } from "./api/_request"



const AuthenticationComponent: React.FC<any> = () => {
  const { isAuthenticated, logout } = useAuth();
  const context = useContext(AuthContext);
  const [apiKey, setApiKey] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();
  const router = useRouter();


  useEffect(() => {
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-') && apiKey !== initialKey) {
      setApiKey(initialKey);
    }
  }, [apiKey]);


  return isAuthenticated ? <>
    <>
      <Sidebar setApiKey={setApiKey} routes={routes} />
      <Box

        pt={{ base: '60px', md: '100px' }}
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <Navbar
              setApiKey={setApiKey}
              onOpen={onOpen}
              logoText={'Muvi UI'}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
            />
          </Box>
        </Portal>
        <Box
          mx="auto"
          p={{ base: '20px', md: '30px' }}
          pe="20px"
          minH="100vh"
          pt="50px"
        >
          <ChatInner />
          
        </Box>
      </Box>
    </>
  </> : <LoginPage />;
};

export default AuthenticationComponent;

