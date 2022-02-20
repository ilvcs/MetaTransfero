/**
 * This is having the right side of the page. 
 * It consist of Card and Transfer view components 
 */
import { Flex, VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
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
