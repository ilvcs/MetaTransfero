import { Flex, VStack, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const SpecialityInfoArea = () => {
  return (
    <Grid
      w="full"
      templateRows="repeat(2, 2fr)"
      templateColumns="repeat(3, 1fr)"
      gap={0}
      mt={4}
      py={4}
    >
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
        borderRadius="15px 0px 0px 0px"
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white">Blockchain</Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white">Reliability</Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
        borderRadius="0px 15px  0px 0px"
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white">Security</Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
        borderRadius="0px  0px 0px  15px "
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white"> Commissionless</Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white">Super Fast</Text>
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={1}
        colSpan={1}
        border="1px"
        borderColor="white"
        w="full"
        h="60px"
        borderRadius="0px  0px 15px 0px"
      >
        <Flex w="full" h="full" justify="center" align="center">
          <Text color="white">100% Uptime</Text>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default SpecialityInfoArea
