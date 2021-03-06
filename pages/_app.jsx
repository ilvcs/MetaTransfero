/**
 * Adds the functionality of Transaction detection and Chakra
 * by surrounding the component by TransactionProvider and Chakra Provider
 */
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import { TransactionProvider } from '../context/TransactionsContex'
const MyApp = ({ Component, pageProps }) => {
  return (
    <TransactionProvider>
      <ChakraProvider>
        <Head>
          <title>Meta Transfero</title>

          <meta name="description" content="Fastest Way To Transfer Crypto" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </TransactionProvider>
  )
}

export default MyApp
