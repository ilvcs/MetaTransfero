/**
 * Context provider to add the web3 fuctionality to the app.
 * This consits all function for fetching and transactions on the blockchain.
 */
import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()
//0xCa956956228e1c2708876B776F2ca469794AFE53
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()
  const [userBalance, setUserBalance] = useState('')
  const [loading, setLoading] = useState(false)
  const [userTransactions, setUserTransactons] = useState([])
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    senderName: '',
    message: '',
  })

  const handleChange = (e, name) => {
    setFormData((preveState) => ({ ...preveState, [name]: e.target.value }))
  }

  const getEthereumContract = () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer,
    )
    //console.log(provider, signer, transactionContract)
    return transactionContract
  }

  const checkAndUpdateBalance = async () => {
    const { ethereum } = window
    const provider = new ethers.providers.Web3Provider(ethereum)
    //console.log(`account${currentAccount}`)
    if (currentAccount) {
      const balance = await provider.getBalance(currentAccount)
      //console.log('balance', balance)
      const formetedBalance = ethers.utils.formatEther(balance)
      //console.log(formetedBalance)
      setUserBalance(formetedBalance)
    }
  }

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window

    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_accounts' })
      //console.log(`User account is ${accounts[0]}`)
      if (accounts.length) {
        setCurrentAccount(accounts[0])
      } else {
        console.log('No accounts found for the user')
      }
    } catch (error) {
      console.log(error)
      throw new Error('No Ethereum object')
    }
  }

  const connectWallet = async () => {
    const { ethereum } = window
    try {
      if (!ethereum) return alert('Please install Metamask')
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts.length) {
        await setCurrentAccount(accounts[0])
        await checkAndUpdateBalance()
      } else {
        console.log('No accounts found for the user')
      }
    } catch (error) {
      console.log(error)
      throw new Error('No Ethereum object')
    }
  }

  const sendTransaction = async () => {
    const { ethereum } = window
    const { addressTo, amount, senderName, message } = formData

    const UserTransactionsContract = getEthereumContract()

    const parsedAmount = ethers.utils.parseEther(amount)

    try {
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 21000 Gwei
            value: parsedAmount._hex,
          },
        ],
      })

      const transactionHash = await UserTransactionsContract.sendTransaction(
        addressTo,
        parsedAmount,
        senderName,
        message,
      )
      setLoading(true)
      console.log(`Loading...`)
      await transactionHash.wait()

      console.log('success: Transactionhash', transactionHash)
      setLoading(false)

      //await checkAndUpdateBalance()
    } catch (error) {
      console.log(error)
    }
  }

  const getUserTransactions = async () => {
    if (!window) {
      return []
    }
    const { ethereum } = window
    const UserTransactionsContract = getEthereumContract()
    const userTransactions = await UserTransactionsContract.getUserTransactions()

    const transactions = userTransactions.map((eachTransaction) => ({
      addressTo: eachTransaction.to,
      amount:
        eachTransaction.amount &&
        ethers.utils.formatEther(eachTransaction.amount),
      message: eachTransaction.message,
      timeStamp:
        eachTransaction.timeStamp &&
        new Date(eachTransaction.timeStamp.toNumber() * 1000).toLocaleString(),
    }))
    console.log('hello transactins', transactions)
    setUserTransactons(transactions)
  }

  useEffect(() => {
    window.ethereum && checkIfWalletIsConnected()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        handleChange,
        sendTransaction,
        checkAndUpdateBalance,
        getUserTransactions,

        currentAccount,
        userBalance,
        formData,
        loading,
        userTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
