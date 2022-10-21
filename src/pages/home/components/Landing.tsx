import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import animation from '../assets/animations/cleaning.json';
import { Link } from 'react-router-dom';
import Animation from '../../../components/Animation';

const Landing = () => {
  return (
    <Flex h={{ base: '78vh', lg: '88vh' }}>
      <Box
        w={{ base: '100%', md: '50%' }}
        flexDirection='column'
        pl={{ base: 5, md: 8 }}
        display='flex'
        justifyContent='center'
      >
        <Text
          color='green.800'
          fontFamily='h'
          fontSize={{ base: '48px', md: '60px' }}
          fontWeight='bold'
          display='flex'
        >
          Highest rated cleaning service in Tauranga
        </Text>
        <Text fontFamily='p' fontSize={{ base: '18px', md: '23px' }} mt={2}>
          A trusted company specialized in all types of cleaning services. Our professional cleaning
          service will take care of everything. You just come home,
          <span style={{ fontWeight: 'bold' }}> smile</span>, and
          <span style={{ fontWeight: 'bold' }}> relax.</span>
        </Text>
        <Flex mt={8} mr='auto'>
          <Button
            as={Link}
            to='/contact'
            size={{ base: 'md', md: 'lg' }}
            bg='brand.100'
            color='white'
            _hover={{ bgColor: '#8CC63E', color: 'black' }}
          >
            Get a Free Quote
          </Button>
          <Button
            as={Link}
            to='/services'
            size={{ base: 'md', md: 'lg' }}
            ml={4}
            bg='brand.200'
            _hover={{ bgColor: '#006738', color: 'white' }}
          >
            View Services
          </Button>
        </Flex>
      </Box>
      <Box w='50%' display={{ base: 'none', md: 'flex' }}>
        <Animation animation={animation} />
      </Box>
    </Flex>
  );
};

export default Landing;
