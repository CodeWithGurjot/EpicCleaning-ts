import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import AboutImg from '../assets/images/about-cleaning.png';

const Philosophy = () => {
  return (
    <Flex alignItems='center' justifyContent='center' mt={16}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        p={{ base: 2, md: 5 }}
        py={5}
        w='90%'
        justifyContent={{ base: 'center', md: 'space-around' }}
        alignItems='center'
      >
        <Box w={{ base: '100%', lg: '50%' }}>
          <Text fontFamily='h' fontSize={{ base: '30px', md: '60px' }}>
            Our work philosophy.
          </Text>
          <Text mt={2} fontFamily='p' fontSize={{ base: '18px', md: '22px' }}>
            An immense amount of hard work and innovation has gone into helping Epic Cleaning
            Services achieve the status that we enjoy today in the market. We employ innovative
            techniques and club them with a customer-oriented approach to craft a bespoke cleaning
            plan for you. The professional cleaners working under our banner at Epic Cleaning
            Services are taught to be empathetic and result-driven. From scrubbing and stripping to
            mopping and dusting, every element of our work is directed at achieving a single goal-
            complete customer satisfaction and securing client recurrence. Epic Cleaning Services
            operate as a popular choice in Tauranga for both residential and commercial cleaning by
            not only completing the job on time but also doing so with perfection. We are a cost and
            time-effective service, and we couldn’t emphasise more on the same considering the
            quality that we deliver with every service. Whether you need one-off cleaning or you are
            interested in a monthly package, we will be happy to help you with what fits your bill.
            We cater to the client’s pain areas and assure them of desired outcomes while they get
            to sit back, relax and enjoy the day to themselves.
          </Text>
        </Box>
        <Image
          mt={{ base: 5, lg: 0 }}
          h={{ base: '50vh', lg: '90vh' }}
          borderRadius={10}
          src={AboutImg}
          w={{ base: '100%', lg: '40%' }}
        />
      </Flex>
    </Flex>
  );
};

export default Philosophy;
