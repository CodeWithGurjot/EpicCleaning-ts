import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import { Box } from '@chakra-ui/react';

interface Props {
  animation: any;
  base: string;
  md: string;
}

const Animation = ({ animation, base, md }: Props) => {
  const animationInstance = useRef(null);

  useEffect(() => {
    const animationData = JSON.stringify(animation);
    if (animationInstance.current) {
      const anim = lottie.loadAnimation({
        container: animationInstance.current,
        animationData: JSON.parse(animationData),
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
      return () => {
        anim.stop();
        anim.destroy();
        lottie.stop();
        lottie.destroy();
      };
    }
  }, [animationInstance, animation]);
  return <Box ref={animationInstance} objectFit='cover' w={{ base, md }} h='100%'></Box>;
};

Animation.defaultProps = {
  base: '100%',
  md: '100%',
};

export default Animation;
