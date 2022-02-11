import { VStack, Text, Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { SpecialityInfoArea } from './index'
import { TransactionContext } from '../context/TransactionsContex'

const HeroLeftSide = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext)
  return (
    <VStack w="full" align="start">
      <Text
        as="h1"
        fontSize="4xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, white,gray.100, gray.100, gray.200, gray.500)"
        bgClip="text"
      >
        Send Crypto <br /> Anywhere in the World
      </Text>
      <Text
        as="p"
        bgGradient="linear(to-r, white, gray.100, gray.200, gray.500)"
        bgClip="text"
      >
        Explore the crypto world. Buy and Send Crypto to anyone in the world
        within no time
      </Text>

      {!currentAccount && (
        <Button
          variant="solid"
          colorScheme="blue"
          rounded="full"
          mt={4}
          leftIcon={<AiFillPlayCircle />}
          onClick={() => connectWallet()}
        >
          Connect Your Wallet
        </Button>
      )}

      <SpecialityInfoArea />
    </VStack>
  )
}

export default HeroLeftSide
