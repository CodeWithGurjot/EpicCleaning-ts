import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import reviews from '../../../data/reviews.json';
import StarsImg from '../assets/images/stars.png';
import { Carousel } from '../../../components/Carousel';

const ReviewSlider = () => {
  return (
    <Flex mt={16} justifyContent='center' alignItems='center' flexDirection='column'>
      <Flex justifyContent='center' flexDirection='column' alignItems='center'>
        <Text textAlign='center' fontFamily='h' fontSize={{ base: '45px', md: '60px' }}>
          Let Customers Speak for Us
        </Text>
        <Image mt={-3} boxSize={{ base: '40%', md: '20%' }} src={StarsImg} />
        <Text mt={-2} fontFamily='p' fontSize={{ base: '15px', md: '20px' }}>
          from 62 Google reviews
        </Text>
      </Flex>
      <Box width={{ base: '85%', md: '90%' }} mt={4} mb={5}>
        <Carousel xl={1} lg={1} md={1} base={1} color='black'>
          {reviews.map((r) => (
            <Flex w='100%' flexDirection='row' mt={2} key={r.id} ml={5}>
              <Flex flexDirection='column' w='100%' justifyContent='center' alignItems='center'>
                <Text fontFamily='h' fontSize={{ base: '30px', md: '40px' }}>
                  {r.name}
                </Text>
                <Image
                  src={StarsImg}
                  mt={{ base: -2, md: -4 }}
                  boxSize={{ base: '40%', md: '15%' }}
                />
              </Flex>
              <Text
                textAlign='center'
                fontFamily='p'
                fontSize={{ base: '19px', md: '25px' }}
                w='100%'
              >
                {r.content}
              </Text>
            </Flex>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

export default ReviewSlider;
