
https://www.youtube.com/watch?v=t3wM5903ty0
https://www.youtube.com/watch?v=tu92jcqdn6s
https://www.youtube.com/watch?v=uFdjZ-B3GCM

#1 Reading an account

var Web3 = require('web3')
url = 'https://mainnet.infura.io/v3/4f441eecc57b4aad8d4d70c1df56504b'
var web3 = new Web3(url)
var address = ...
web3.eth.getBalance(address, (err, bal) => {balance=bal})
web3.utils.fromWei(balance, 'ether')

#2 Reading a Smart Contract

var Web3 = require('web3')
url = 'https://mainnet.infura.io/v3/4f441eecc57b4aad8d4d70c1df56504b'
var web3 = new Web3(url)
var abi =...
var contractAddress = ...
var contract = new web3.eth.Contract(abi, contractAddress)
contract.methods
contract.methods.name().call((err,result) => {console.log(result)})
contract.methods.balanceOf(address).call((err,result) => {console.log(result)})

#3 Ethereum transactions - uses local Ganache
note: all accoutns are unlocked so no need for private keys

npm install ethereumjs-tx

var Web3 = require("web3")
const web3 = new Web3('http://127.0.0.1:7545')

let address1 = '0xDF9a78ED306222CbDCAe4F06EDef92244337Af9f'
let address2 = '0xa64E2fF17DB35b3A0D963Df19D1306539Ea3aF3F'
web3.eth.sendTransaction({from: address1, to:address2, value:web3.utils.toWei('1', 'ether')}, (err, result) => {console.log(result)})

web3.eth.personal.unlockAccount
