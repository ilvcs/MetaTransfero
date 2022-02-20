// Utility funcitn to shorten the url
export const shortenAddress = (address) => {
  return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
}
