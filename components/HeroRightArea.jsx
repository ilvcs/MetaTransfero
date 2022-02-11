import { Flex, VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SiEthereum } from 'react-icons/si'
import { BsInfoCircle } from 'react-icons/bs'
import { CryptoCardView, CryptoTransferArea } from './index'

function HeroRightArea() {
  return (
    <VStack w="full" align="end" spacing={8}>
      <CryptoCardView />
      <CryptoTransferArea />
    </VStack>
  )
}

export default HeroRightArea
