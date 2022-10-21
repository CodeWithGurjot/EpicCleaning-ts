import { Box, Flex, Icon, SimpleGrid, Text } from '@chakra-ui/react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaClipboardCheck, FaThumbsUp, FaTools } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Props {
  title: string;
  content: string;
  icon: IconType;
}

const WhyEpic = () => {
  const WhyCard = ({ icon, title, content }: Props) => {
    return (
      <Flex
        mt={8}
        bgColor='white'
        py={5}
        px={2}
        ml='5%'
        minH='40vh'
        w='90%'
        justifyContent='center'
        alignItems='center'
        direction='column'
        borderRadius={20}
        shadow='xl'
      >
        <Icon boxSize='24' as={icon} />
        <Text
          textAlign='center'
          mt={2}
          as='b'
          fontFamily='h'
          fontSize={{ base: '22px', md: '30px' }}
        >
          {title}
        </Text>
        <Text
          mt={1}
          textAlign='center'
          fontFamily='p'
          fontSize={{ base: '17px', md: '20px' }}
          w={{ base: '80%', md: '75%' }}
        >
          {content}
        </Text>
      </Flex>
    );
  };

  return (
    <Box mt={10} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Text color='brand.100' fontFamily='h' fontSize={{ base: '40px', md: '60px' }}>
        Why Epic Cleaning
      </Text>
      <SimpleGrid
        alignItems='center'
        justifyContent='center'
        columns={{ base: 1, lg: 2 }}
        spacing={5}
      >
        <WhyCard
          icon={BsPeopleFill}
          title='Trained and Licenced Staff'
          content="We have a fully trained, polite and honest staff. So you don't have to worry about anything at all."
        />
        <WhyCard
          icon={FaThumbsUp}
          title='100% Customer Satisfaction'
          content="We ask for feedback after each visit. If you're not 100% satisfied with our services, we will make it right."
        />
        <WhyCard
          icon={FaClipboardCheck}
          title='Tailored Cleaning Solutions'
          content="Need a custom cleaning solution for you house/office? Don't worry we've got it sorted for you."
        />
        <WhyCard
          icon={FaTools}
          title='High-End Equipment in Use'
          content="No matter what you need, from window cleaning to carpet cleaning. We've got perfect tool for every need."
        />
      </SimpleGrid>
    </Box>
  );
};

export default WhyEpic;
