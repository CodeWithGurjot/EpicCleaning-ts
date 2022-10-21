import { Box, Link, Container, SimpleGrid, Stack, Text, IconButton } from '@chakra-ui/react';
import { FC, ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Link as RouterLink } from 'react-router-dom';

interface SocialButtonProps {
  icon: ReactElement;
  href: string;
}

const SocialButton = ({ icon, href }: SocialButtonProps) => {
  return (
    <IconButton
      aria-label='social-icon'
      color='black'
      size='lg'
      cursor='pointer'
      rounded='full'
      as='a'
      href={href}
      icon={icon}
      target='_blank'
    />
  );
};

const date = new Date();
const year = date.getFullYear();

const ListHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box mt={16} bgColor='brand.100' color='white'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={12}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize='40px' as='b' mt='1' color='white'>
                Epic Cleaning.
              </Text>
            </Box>
            <Text fontSize='sm'>© {year} Epic CLeaning. All rights reserved</Text>
            <Stack justify={{ base: 'center', md: 'flex-start' }} direction='row' spacing={6}>
              <SocialButton
                icon={<FaTwitter size={28} />}
                href='https://twitter.com/cleaning_epic/'
              />
              <SocialButton
                icon={<FaFacebook size={28} />}
                href='https://www.facebook.com/epiccleaningservicesnz/'
              />
              <SocialButton
                icon={<FaYoutube size={28} />}
                href='https://www.youtube.com/channel/UCqx2Ymdh8dwSY-MUFlB0cwQ'
              />
              <SocialButton icon={<IoMdMail size={28} />} href='mailto:admin@epiccleaning.co.nz' />
            </Stack>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Company</ListHeader>
            <Link as={RouterLink} to='/about'>
              About us
            </Link>
            <Link as={RouterLink} to='/services'>
              Services
            </Link>
            <Link as={RouterLink} to='/contact'>
              Contact us
            </Link>
            <Link href='https://www.google.com/search?q=epiccleaning&oq=epiccleaning+&aqs=chrome..69i57j0i546l2j69i60l4.4120j0j7&sourceid=chrome&ie=UTF-8#lrd=0x6d6ddb19550e46e3:0x93afb04f8246c521,1,,,'>
              Testimonials
            </Link>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Support</ListHeader>
            <Link as={RouterLink} to='/contact'>
              Help Center
            </Link>
            <Link href='#'>Terms of Service</Link>
            <Link href='#'>Privacy Policy</Link>
          </Stack>
          <Stack align={{ base: 'center', md: 'flex-start' }}>
            <ListHeader>Contact Info</ListHeader>
            <Text>20 Landing Drive,</Text>
            <Text>Pyes Pa, Tauranga 3112</Text>
            <Link href='tel:080080056'>0800 0800 56</Link>
            <Link href='mailto:admin@epiccleaning.co.nz'>admin@epiccleaning.co.nz</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
