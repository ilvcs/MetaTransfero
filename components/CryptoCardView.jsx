import { Flex, Box, HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { FaEthereum, FaInfoCircle } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { TransactionContext } from '../context/TransactionsContex'
import { shortenAddress } from '@usedapp/core'
const EthIcon = () => {
  return (
    <IconContext.Provider
      value={{
        verticalAlign: 'middle',
        color: 'white',
        size: '24px',
      }}
    >
      <FaEthereum />
    </IconContext.Provider>
  )
}
const CryptoCardView = () => {
  const { currentAccount, checkAndUpdateBalance, userBalance } = useContext(
    TransactionContext,
  )

  useEffect(() => {
    updateBalance()
  })

  const updateBalance = () => {
    checkAndUpdateBalance()
  }
  return (
    <Flex
      h="180px"
      w="320px"
      borderWidth={2}
      borderColor="white"
      borderRadius="15px"
      bgGradient="linear(to-r, #a770ef, #cf8bf3, #fdb99b )"
      direction="column"
      justify="space-between"
      p={2}
    >
      <HStack w="full" align="top">
        <Box
          w="40px"
          h="40px"
          borderWidth={2}
          borderColor="white"
          borderRadius="full"
          p={1}
          overflow="hide"
          bg="whiteAlpha.400"
        >
          <EthIcon />
        </Box>
        <Spacer />
        <FaInfoCircle color="white" onClick={() => {}} />
      </HStack>
      <Text color="white" fontSize="xl" fontWeight="semibold">
        {'Ethereum'}
      </Text>
      <HStack justify="space-between" pb={4}>
        <VStack align="start" spacing={0}>
          <Text color="white" fontSize="sm" lineHeight="0.9">{`Address`}</Text>
          <Text color="white" fontSize="sm" fontWeight="semibold">
            {currentAccount
              ? `${shortenAddress(currentAccount)}`
              : 'Not Available'}
          </Text>
        </VStack>

        <VStack align="start" spacing={0}>
          <Text color="white" fontSize="sm" lineHeight="0.9">{`Balance`}</Text>
          <Text color="white" fontSize="sm" fontWeight="semibold">
            {userBalance ? `${userBalance.substring(0, 6)} ETH` : '0.0 ETH'}
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default CryptoCardView
