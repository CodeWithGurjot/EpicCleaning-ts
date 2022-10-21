import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Intro = () => {
  return (
    <Flex mt={12} direction='column' alignItems='center' px={10} justifyContent='center'>
      <Text
        fontWeight='600'
        fontFamily='h'
        textAlign='center'
        fontSize={{ base: '40px', md: '50px' }}
      >
        Intro to Epic Cleaning Services
      </Text>
      <Text textAlign='center' mt={5} fontFamily='p' fontSize={{ base: '18px', md: '20px' }}>
        We are a professional commercial cleaning company in Tauranga. Our Cleaning professionals
        specialize in all sort of Cleaning services from big businesses to small such as
        Hospitals/Medical Centres, Schools & Universities, Kindergarten, Holiday Parks, Factories,
        Commercial and Office Cleaning And Shopping Centres Etc. Epic Cleaning Services boasts of
        working with a team of qualified and dedicated professional cleaners. Who offers a spectrum
        of cleaning services ranging from individual tasks to complete property cleaning. We employ
        the best industry practices to deliver distinguished results.
      </Text>
    </Flex>
  );
};

export default Intro;
