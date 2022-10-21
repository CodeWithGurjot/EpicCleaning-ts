import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
  title: string;
  content: string;
  title2: string | null;
  content2: string | null;
  title3: string | null;
  content3: string | null;
  cardTitle: string;
  cardContent: string;
  title4: string | null;
  content4: string | null;
}

const SingleService = ({
  title,
  content,
  title2,
  content2,
  title3,
  content3,
  cardTitle,
  cardContent,
  title4,
  content4,
}: Props) => {
  return (
    <Flex mt={12} direction='column' alignItems='center' justifyContent='center'>
      <Text textAlign='center' as='b' fontFamily='h' fontSize={{ base: '30px', md: '60px' }}>
        {title}
      </Text>
      <Text
        mt={2}
        w='88%'
        fontFamily='p'
        fontSize={{ base: '18px', md: '20px' }}
        textAlign='center'
      >
        {content}
      </Text>

      {title2 && (
        <>
          <Text
            mt={16}
            w='95%'
            textAlign='center'
            fontFamily='h'
            fontSize={{ base: '30px', md: '35px' }}
          >
            {title2}
          </Text>
          <Text
            mt={2}
            w='88%'
            fontFamily='p'
            fontSize={{ base: '18px', md: '20px' }}
            textAlign='center'
          >
            {content2}
          </Text>
        </>
      )}

      {title3 && (
        <>
          <Text
            mt={16}
            w='95%'
            textAlign='center'
            fontFamily='h'
            fontSize={{ base: '30px', md: '35px' }}
          >
            {title3}
          </Text>
          <Text
            mt={2}
            w='88%'
            fontFamily='p'
            fontSize={{ base: '18px', md: '20px' }}
            textAlign='center'
          >
            {content3}
          </Text>
        </>
      )}

      <Flex justifyContent='space-between' mt={16} p={5} w='88%' shadow='lg' borderRadius={20}>
        {/* <Image w='48%' borderRadius={10} src={data[dIndex].image} /> */}
        <Box w='100%'>
          <Text textAlign='center' fontFamily='h' fontSize={{ base: '30px', md: '35px' }}>
            {cardTitle}
          </Text>
          <Text textAlign='center' mt={2} fontFamily='p' fontSize={{ base: '18px', md: '20px' }}>
            {cardContent}
          </Text>
        </Box>
      </Flex>

      {title4 && (
        <>
          <Text
            mt={16}
            w='95%'
            textAlign='center'
            fontFamily='h'
            fontSize={{ base: '30px', md: '35px' }}
          >
            {title4}
          </Text>
          <Text w='88%' fontFamily='p' fontSize={{ base: '18px', md: '20px' }} textAlign='center'>
            {content4}
          </Text>
        </>
      )}
    </Flex>
  );
};

export default SingleService;
