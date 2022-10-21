import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import animation from '../assets/animations/contact.json';
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Animation from '../../../components/Animation';

const QuoteForm = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup
    .object({
      name: yup.string().required('This feild is Required'),
      email: yup.string().email('Invalid Email').required('This feild is Required'),
      phone: yup
        .string()
        .matches(phoneRegEx, 'Invalid Phone Number')
        .required('This feild is Required')
        .min(9, 'Invalid Phone Number')
        .max(13, 'Invalid Phone Number'),
      address: yup.string().required('This feild is Required'),
      zip: yup
        .number()
        .typeError('Invalid Zip Code')
        .integer('Invalid Zip Code')
        .positive('Invalid Zip Code'),
      userMessage: yup.string().required('This feild is Required'),
    })
    .required();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  function onSubmit() {
    setLoading(true);
    if (form.current) {
      emailjs
        .sendForm('service_g1vu3db', 'template_c3h3gaq', form.current, 'y3meHOdxs1n9mLGx2')
        .then(
          (result) => {
            console.log(result.text);
            reset();
            toast({
              title: 'Mail Successfully Sent',
              description: "We'll Get in touch Soon!",
              status: 'success',
              duration: 6000,
              isClosable: true,
              position: 'bottom-left',
            });
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            toast({
              title: 'An Error Occured',
              status: 'error',
              duration: 4000,
              isClosable: true,
              position: 'top',
            });
            setLoading(false);
          },
        );
    }
  }

  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      // mt={{ base: 10, md: 20 }}
      mt={10}
      w='100%'
    >
      <Box w='50%' display={{ base: 'none', md: 'flex' }}>
        <Animation animation={animation} />
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        w={{ base: '95%', md: '50%' }}
      >
        <Box
          borderRadius={20}
          bgColor='brand.100'
          shadow='dark-lg'
          color='white'
          w={{ base: '95%', lg: '80%' }}
          p={{ base: 5, md: 10 }}
        >
          <Text fontFamily='h' fontSize='50px' mb={5}>
            Get a Quote
          </Text>
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
              <FormLabel htmlFor='name'>Full Name *</FormLabel>
              <Input id='name' placeholder='Enter Name...' {...register('name')} />
              <FormErrorMessage>{errors.name && errors.name.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor='email'>Email *</FormLabel>
              <Input id='email' placeholder='Enter Email...' {...register('email')} />
              <FormErrorMessage>
                {errors.email && errors.email.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.phone)}>
              <FormLabel htmlFor='phone'>Phone Number *</FormLabel>
              <Input id='phone' placeholder='Enter Phone Number...' {...register('phone')} />
              <FormErrorMessage>
                {errors.phone && errors.phone.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.address)}>
              <FormLabel htmlFor='address'>Address *</FormLabel>
              <Input id='address' placeholder='Eneter Address...' {...register('address')} />
              <FormErrorMessage>
                {errors.address && errors.address.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.zip)}>
              <FormLabel htmlFor='zip'>Zip Code *</FormLabel>
              <Input id='zip' placeholder='Enter Zip...' {...register('zip')} />
              <FormErrorMessage>{errors.zip && errors.zip.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.userMessage)}>
              <FormLabel htmlFor='userMessage'>Message *</FormLabel>
              <Textarea
                h={{ base: '20vh', md: '10vh', lg: '20vh' }}
                isInvalid={Boolean(errors.userMessage)}
                id='userMessage'
                placeholder='Enter Message...'
                {...register('userMessage')}
              />
              <FormErrorMessage>
                {errors.userMessage && errors.userMessage.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <Button
              size={{ base: 'md', md: 'lg' }}
              w='100%'
              mt={4}
              bgColor='white'
              color='black'
              isLoading={loading}
              type='submit'
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default QuoteForm;
