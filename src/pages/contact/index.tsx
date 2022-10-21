import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import QuoteForm from './components/QuoteForm';

const Contact = () => {
  return (
    <Flex justifyContent='center' alignItems='center' direction='column'>
      <Text mt={10} fontFamily='h' as='b' fontSize='50px'>
        Contact Us
      </Text>
      <QuoteForm />
    </Flex>
  );
};

export default Contact;
