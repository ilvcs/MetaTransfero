import React from 'react'
import { Flex, Text, VStack } from '@chakra-ui/react'
function Footer() {
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
        py={8}
        spacing={0}
      >
        <Text color="white">Contact Us</Text>
        <Text color="white">hello@email.com</Text>
      </VStack>
    </Flex>
  )
}

export default Footer
