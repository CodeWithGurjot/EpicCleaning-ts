import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './components/ServiceCard';

const Services = () => {
  return (
    <Flex mt={12} direction='column' alignItems='center' justifyContent='center'>
      <Text textAlign='center' as='b' fontFamily='h' fontSize={{ base: '30px', md: '50px' }}>
        Epic Cleaning Services.
      </Text>
      <ServiceCard />
    </Flex>
  );
};

export default Services;
