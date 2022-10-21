import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaMoneyCheckAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { BiHappyAlt } from 'react-icons/bi';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

const HowItWorks = () => {
  const DetailCards = ({ title, content, icon }: Props) => {
    return (
      <Box
        alignItems='center'
        justifyContent='center'
        h={{ base: '30vh', lg: '40vh' }}
        w='80%'
        p={5}
        bgColor='white'
        borderRadius='2xl'
        shadow='xl'
        display='flex'
        flexDirection='column'
        mb={6}
      >
        <Icon as={icon} w='80px' h='80px' />
        <Text
          textAlign='center'
          mt={5}
          fontSize={{ base: '18px', md: '20px' }}
          fontFamily='h'
          as='b'
        >
          {title}
        </Text>
        <Text fontSize={{ base: '16px', md: '18px' }} textAlign='center' fontFamily='p'>
          {content}
        </Text>
      </Box>
    );
  };

  return (
    <Flex alignItems='center' direction='column' justifyContent='center'>
      <Flex
        shadow='xl'
        bgColor='brand.200'
        w={{ base: '90%', lg: '85%' }}
        borderRadius='2xl'
        alignItems='center'
        direction='column'
        minH='30vh'
        m={5}
      >
        <Flex p={5} direction='column' mt={4}>
          <Text alignSelf='center' fontSize={{ base: '45px', md: '60px' }} fontFamily='h'>
            How it works
          </Text>
          <Text fontFamily='p' textAlign='center' fontSize={{ base: '18px', md: '22px' }}>
            We'll clean your home/office on reccuring basis or one time clean. Customer satisfaction
            is our priority.
          </Text>
        </Flex>
        <Flex
          alignItems='center'
          w='90%'
          direction={{ base: 'column', md: 'row' }}
          justifyContent='space-between'
          mt={5}
          gap={{ base: 4, md: 8 }}
        >
          <DetailCards
            icon={FaMoneyCheckAlt}
            title='Get a price.'
            content='Tell us about your home/office, and your cleaning needs.'
          />
          <DetailCards
            icon={FaRegCalendarAlt}
            title='Book it.'
            content="We'll make your home/office shine."
          />
          <DetailCards
            icon={BiHappyAlt}
            title='Breathe, smile, relax.'
            content='Work is Done! time to sit back and relax'
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HowItWorks;
