import { Flex, VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { SpecialityInfoArea, HeroLeftArea, HeroRightArea } from './index'
const Hero = () => {
  return (
    <Flex
      minW="920px"
      maxW="920px"
      h="full"
      mt={8}
      py={2}
      dir="row"
      justify="space-between"
    >
      <HeroLeftArea />
      <HeroRightArea />
    </Flex>
  )
}

export default Hero
