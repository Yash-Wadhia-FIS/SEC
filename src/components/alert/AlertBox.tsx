import {
    Alert,
    AlertIcon
} from '@chakra-ui/react';

interface AlertBoxProps {
    loginError: string;
  }
  
  const AlertBox: React.FC<AlertBoxProps> = ({ loginError }) => {
    return (
        <>
            <Alert status="error" mb={4} borderRadius={4}>
                <AlertIcon />
                {loginError}
            </Alert>

        </>
    )
}

export default AlertBox