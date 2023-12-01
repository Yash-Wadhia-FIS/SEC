import { useState } from 'react';
import { useAuth } from '../src/contexts/AuthContext';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    Flex,
    Image,
    Alert,
    AlertIcon
} from '@chakra-ui/react';
import logo from "../src/assets/logo.png"
import { useRouter } from 'next/router';
import { AlertBox } from '@/components/alert';
import { FaArrowRightLong } from "react-icons/fa6";

const LoginPage: React.FC = () => {
    const router = useRouter();
    const { login, isAuthenticated } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState("USER");
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login(username, password, type);
            console.log('login Collection', response);
            router.push('/authentication');
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Login failed. Please check your credentials');
        }
    };

    const handleAlertClose = () => {
        setLoginError('');
    };

    return (
        <>
        
            <VStack
                spacing={4}
                align="center"
                justify="center"
                minH="100vh"
            >
                <Box w="md" p={8} borderWidth={1} borderRadius={8} boxShadow="lg"
                    fontFamily="Plus Jakarta Sans', sans-serif"
                >
                    <Flex justifyContent="center" alignItems="center">
                        <Image src={logo.src} alt="Your Image" mb={4} width="45%" />
                    </Flex>

                    {loginError && (
                        <>
                            <AlertBox loginError={loginError} />
                        </>

                    )}

                    <FormControl id="username" isRequired>
                        <FormLabel fontWeight="700"
                            fontFamily="'Poppins',sans-serif">User Name</FormLabel>
                        <Input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Your Name"
                            sx={{
                                '::placeholder': {
                                    fontFamily: "'Poppins',sans-serif",
                                    fontWeight: '700',
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl id="password" isRequired mt={4}>
                        <FormLabel fontWeight="700"
                            fontFamily="'Poppins',sans-serif">Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            sx={{
                                '::placeholder': {
                                    fontFamily: "'Poppins',sans-serif",
                                    fontWeight: '700',
                                },
                            }}
                        />
                    </FormControl>
                    <FormControl id="type" isRequired mt={4} display={"none"}>
                        <FormLabel>Role:</FormLabel>
                        <Input
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Enter your role"
                            sx={{
                                '::placeholder': {
                                    fontFamily: "'Poppins',sans-serif",
                                    fontWeight: '400',
                                },
                            }}
                        />
                    </FormControl>
                    <Flex justifyContent="center" alignItems="center">
                        <Button
                            mt={4}
                            onClick={handleLogin}
                            width="50%"
                            fontWeight="700"
                            fontFamily="'Poppins',sans-serif"
                            sx={{
                                backgroundColor: '#ff7300',
                                color: '#ffffff',
                                width: '50%',
                                transition: 'background-color 0.3s ease',
                                padding: '10px', // Adjust the padding to add space around the content
                                '&:hover': {
                                    backgroundColor: '#ff7900',
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            <span style={{ marginRight: '8px' }}>Login In</span> 
                            <FaArrowRightLong />
                        </Button>
                    </Flex>
                </Box>
            </VStack>

        </>
    );
};

export default LoginPage;