import { Box, Flex, Text } from '@chakra-ui/react';
import animation from '../assets/animations/contactus.json';
import Animation from '../../../components/Animation';

const AboutCard = () => {
  return (
    <Flex alignItems='center' justifyContent='center' mt={16}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        p={{ base: 2, md: 5 }}
        py={5}
        borderRadius={20}
        w='90%'
        shadow='lg'
        justifyContent={{ base: 'center', lg: 'space-between' }}
        alignItems='center'
        bgColor='brand.200'
      >
        <Animation animation={animation} md='50%' />
        <Box mt={{ base: 5, lg: 0 }} w={{ base: '95%', lg: '55%' }}>
          <Text fontFamily='h' fontSize={{ base: '25px', md: '35px' }}>
            Guaranteed customer satisfaction through innovative cleaning approach and well-suited
            equipment marks our success in the industry.
          </Text>
          <Text mt={2} fontFamily='p' fontSize={{ base: '16px', md: '20px' }}>
            We have a strong affinity for excellence which drives us to accomplish the challenging
            aspects of our job and raise the standards of quality in our industry. Not just
            residential and office properties, but Epic Cleaning Services has had the chance to work
            for government officials as well, where we exhibited our best traits, making us a
            reliable, professional choice for all sectors. We are trained to deliver quality second
            to none, and we focus on achieving the same despite all odds.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AboutCard;
