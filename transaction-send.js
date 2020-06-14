const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const Dotenv = require('dotenv');

const showBalances = (message) => {
    web3.eth.getBalance(account1, (err, balance) => {
        console.log(`balance account1 ${message}: ${web3.utils.fromWei(balance,'ether')}`)
    })
    
    web3.eth.getBalance(account2, (err, balance) => {
        console.log(`balance account2 ${message}: ${web3.utils.fromWei(balance,'ether')}`)
    })   
}

Dotenv.config()

const network_address = `https://ropsten.infura.io/v3/${process.env.PROJECT_ID}`
console.log(`connecting to network: ${network_address}`)
const web3 = new Web3(network_address)

const account1 = process.env.ACCOUNT1
const account2 = process.env.ACCOUNT2
const account1_PK = Buffer.from(process.env.ACCOUNT1_PK,'hex')
const account2_PK = Buffer.from(process.env.ACCOUNT2_PK,'hex')

showBalances('before')

web3.eth.getTransactionCount(account1, (err, txCount) => {

    //Build a transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.1','ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice:web3.utils.toHex(web3.utils.toWei('10','gwei'))
    }
    
    //Sign a transaction
    const tx = new Tx(txObject, {'chain': 'ropsten'})
    tx.sign(account1_PK)

    const serializedTransaction = tx.serialize()
    const raw = `0x${serializedTransaction.toString('hex')}`

    //Broadcast a transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log(`txHash: ${txHash}`)
        console.log(`error: ${err}`)
    })    
})

setInterval( () => 
{
    showBalances('after')}
    ,10 * 1000
)