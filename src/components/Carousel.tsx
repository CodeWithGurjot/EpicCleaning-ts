import Slider from 'react-slick';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  base: number;
  md: number;
  lg: number;
  xl: number;
  color: string;
}

export const Carousel = ({ children, base, md, lg, xl, color }: Props) => {
  const NextArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
      <Box
        right={{ base: '-7', md: '-8' }}
        top='45%'
        color={color}
        position='absolute'
        cursor='pointer'
        onClick={onClick}
      >
        <FaChevronRight size={30} />
      </Box>
    );
  };

  const PrevArrow: FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
      <Box
        left={{ base: '-7', md: '-8' }}
        top='45%'
        color={color}
        position='absolute'
        cursor='pointer'
        onClick={onClick}
      >
        <FaChevronLeft size={30} />
      </Box>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: xl,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: lg,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: md,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: base,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
};

Carousel.defaultProps = {
  base: 1,
  md: 2,
  lg: 3,
  xl: 5,
  color: 'white',
};
