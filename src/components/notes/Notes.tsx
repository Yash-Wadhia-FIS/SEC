import { Box } from '@chakra-ui/react';

const CenteredSmallText = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center"
      fontFamily="Plus Jakarta Sans', sans-serif" >
      <Box fontSize="xs" textAlign="center" mt="2">
        <p>Tanya BJB Chat bisa saja salah. Pertimbangkan untuk memeriksa informasi penting dengan referensi yang disebutkan.</p>
      </Box>
    </Box>
  );
};

export default CenteredSmallText;
