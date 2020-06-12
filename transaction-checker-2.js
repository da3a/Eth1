const Web3 = require('web3');
const dotenv = require('dotenv');

class TransactionChecker
{
    constructor(projectId, account)
    {
        this.web3ws = new Web3(new Web3.providers.WebsocketProvider(`wss://ropsten.infura.io/ws/v3/${projectId}`))
        this.web3 = new Web3(new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/${projectId}`))
        this.account = account.toLowerCase();
    }

    subscribe(topic)
    {
        this.subscription = this.web3ws.eth.subscribe(topic, (err, res) => {
            if (err) console.error(err)
        });
    }

    watchTransactions()
    {
        console.log(`watching all pending transactions...`);
        this.subscription.on('data', (txHash) => {
            setTimeout( async () => {
                try {
                    let tx = await this.web3.eth.getTransaction(txHash);
                    if (tx != null){
                        console.log(tx.from);
                        if (this.account == tx.to.toLowerCase()){
                            console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
                        }
                    }
                }catch (err) {
                    console.error(err);
                }
            }, 6000)
        })
    }
}

dotenv.config()
console.log(`Project_Id: ${process.env.PROJECT_ID}`)
let txChecker = new TransactionChecker(process.env.PROJECT_ID,process.env.WALLET_ADDRESS)
txChecker.subscribe('pendingTransactions')

txChecker.watchTransactions();