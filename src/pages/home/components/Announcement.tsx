import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Announcement = () => {
  return (
    <Flex mt={10} alignItems='center' justifyContent='center' width='100%'>
      <Text
        bgColor='brand.200'
        borderRadius={20}
        width={{ base: '90%', md: '80%' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        fontFamily='h'
        fontSize={{ base: '14px', md: '30px' }}
        p={5}
        shadow='xl'
        as='b'
      >
        We are Here to Help 24x7
        <a href='tel:080080056'>
          <Button
            size={{ base: 'sm', md: 'md' }}
            ml={{ base: 2, md: 20 }}
            bgColor='brand.100'
            color='white'
            _hover={{ color: 'black', bgColor: 'white' }}
          >
            Call Now!
          </Button>
        </a>
      </Text>
    </Flex>
  );
};

export default Announcement;
