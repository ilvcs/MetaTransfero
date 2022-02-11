import React from 'react'
import { color, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import Image from 'next/image'

const NavBarItem = ({ title, clicked }) => {
  return (
    <Text as="button" onClick={clicked} color="white" fontWeight="medium">
      {title}
    </Text>
  )
}
const Navbar = () => {
  const returnNavBarMenu = () => {
    const menuItems = ['Market', 'Exchange', 'How To', 'Wallets']
    return (
      <HStack spacing={6}>
        {menuItems.map((item, index) => (
          <NavBarItem key={item + index} clicked={() => {}} title={item} />
        ))}
      </HStack>
    )
  }
  return (
    <Flex
      minW="900px"
      maxW="900px"
      align="center"
      h="full"
      py={2}
      dir="row"
      justify="center"
    >
      <Image
        src="/metatransfo_logo.png"
        width="200px"
        height="80px"
        objectFit="contain"
      />
      <Spacer />
      {returnNavBarMenu()}
    </Flex>
  )
}

export default Navbar
