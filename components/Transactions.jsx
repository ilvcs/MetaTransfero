import { Flex, Text, VStack, Wrap } from '@chakra-ui/react'
import React, { useEffect, useContext } from 'react'
import { TransactionContext } from '../context/TransactionsContex'
import { shortenAddress } from '@usedapp/core'
const Transactions = () => {
  const { getUserTransactions, userTransactions } = useContext(
    TransactionContext,
  )

  useEffect(async () => {
    await getUserTransactions()
  }, [])

  const TransactionTile = ({ transaction }) => {
    return (
      <Flex
        w="320px"
        borderWidth="0.5px"
        borderColor="whiteAlpha.500"
        borderRadius="5px"
        boxShadow={20}
      >
        <VStack w="full" h="full" align="start" p={2}>
          <Text color="white" fontSize="xs">{`${transaction.timeStamp}`}</Text>

          <Text color="white" fontSize="sm">{`Sent To:  ${shortenAddress(
            transaction.addressTo,
          )}`}</Text>

          <Text
            color="white"
            fontSize="sm"
          >{`Amount: ${transaction.amount.substring(0, 6)} ETH`}</Text>

          <Text
            color="white"
            fontSize="sm"
          >{`Message: ${transaction.message}`}</Text>
        </VStack>
      </Flex>
    )
  }

  const trasactionsArea = (transactions) => {
    console.log(`Transactions ${transactions}`)
    if (!transactions) {
      return (
        <Flex w="full" justify="center" align="center" py={4}>
          <Text color="red">{`Error: Error Getting Data`}</Text>
        </Flex>
      )
    }
    if (transactions.length == 0) {
      return (
        <Flex w="full" justify="center" align="center" py={4}>
          <Text color="yellow.700">{`Oops! No Transactions Found`}</Text>
        </Flex>
      )
    }
    return (
      <Wrap w="full" spacing={4} justify="center">
        {transactions.map((eachTransaction, index) => (
          <TransactionTile
            transaction={eachTransaction}
            key={transactions.index + index}
          />
        ))}
      </Wrap>
    )
  }
  return (
    <Flex
      w="full"
      bgGradient="linear(to-r, black,gray.900, gray.800,gray.800,gray.800,pink.900)"
      align="center"
      justify="center"
    >
      <VStack
        w="full"
        minW="900px"
        maxW="900px"
        align="center"
        py={4}
        spacing={6}
      >
        <Text color="white" fontSize="xl" fontWeight="semibold">
          Your Transactions
        </Text>
        {trasactionsArea(userTransactions)}
      </VStack>
    </Flex>
  )
}

export default Transactions
