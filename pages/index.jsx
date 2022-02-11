import Head from 'next/head'
import Image from 'next/image'
import { Footer, Hero, Navbar, Transactions } from '../components'
import styles from '../styles/Home.module.css'
import { Flex, VStack } from '@chakra-ui/react'
export default function Home() {
  return (
    <div className={styles.container}>
      <Flex w="full" direction="column" align="center" justify="center">
        <VStack
          w="full"
          bgGradient="linear(to-r, black,gray.900, gray.800,gray.800,pink.900)"
          py={4}
        >
          <Navbar />
          <Hero />
        </VStack>

        <Transactions />
        <Footer />
      </Flex>
    </div>
  )
}
