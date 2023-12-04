import React from 'react';
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { AuthProvider } from '../src/contexts/AuthContext';
import AuthenticationComponent from './authentication';
import { AppProps } from 'next/app';
import { ChatProvider } from '../src/contexts/ChatContext';

interface CustomAppProps extends AppProps {
  router: any;
  pageProps: any;
}

const App: React.FC<CustomAppProps> = () => {
  return (
    <>
    <Head>
      <title>
        Saudi Electricity 
      </title>
    </Head>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ChatProvider>
            <AuthenticationComponent />
          </ChatProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
