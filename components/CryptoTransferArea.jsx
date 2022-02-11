import { VStack, Flex, Input, Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { TransactionContext } from '../context/TransactionsContex'

function CryptoTransferArea() {
  const { sendTransaction, formData, handleChange } = useContext(
    TransactionContext,
  )

  const handleSubmit = (e) => {
    //console.log(formData)
    const { addressTo, amount, senderName, message } = formData
    e.preventDefault()
    if (!addressTo || !amount || !senderName || !message) return

    sendTransaction()
  }
  return (
    <Flex bg="gray.600" p={2} width="320px" borderRadius="15px">
      <VStack w="full" spacing={2}>
        <Input
          key="jfjd3"
          variant="filled"
          bg="blackAlpha.700"
          color="white"
          placeholder="Address To"
          onChange={(e) => handleChange(e, 'addressTo')}
        />
        <Input
          key="jfjd4"
          variant="filled"
          bg="blackAlpha.700"
          color="white"
          placeholder="Amount(ETH)"
          onChange={(e) => handleChange(e, 'amount')}
        />
        <Input
          key="jfjd5"
          variant="filled"
          bg="blackAlpha.700"
          color="white"
          placeholder="Sender Name"
          onChange={(e) => handleChange(e, 'senderName')}
        />
        <Input
          key="jfjd6"
          variant="filled"
          bg="blackAlpha.700"
          color="white"
          placeholder="Message"
          onChange={(e) => handleChange(e, 'message')}
        />
        <Button
          key="jfjd7"
          w="full"
          variant="solid"
          bg="gray.800"
          mt={4}
          rounded="full"
          onClick={handleSubmit}
        >
          <Text color="white">Send</Text>
        </Button>
      </VStack>
    </Flex>
  )
}

export default CryptoTransferArea
