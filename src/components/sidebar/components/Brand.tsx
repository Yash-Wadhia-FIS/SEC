'use client';
// Chakra imports
import { Flex, useColorModeValue, Img } from '@chakra-ui/react';

import logo from '../../../../public/img/logo/bjb.png';
import { HorizonLogo } from '@/components/icons/Icons';
import { HSeparator } from '@/components/separator/Separator';
import navbar from "../../../assets/logo.png"

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column"> 
      <Img src={navbar.src} h="75px" w="200px" my="30px" color={logoColor} />
      <HSeparator mb="20px" w="284px" />
    </Flex>
    
  );
}

export default SidebarBrand;
