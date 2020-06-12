const Web3 = require('web3');
const dotenv = require('dotenv');


class TransactionChecker{
    
//    dawa;
//    account;

    constructor(projectId, account)
    {
        this.web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/' + projectId))
        this.account = account.toLowerCase();        
    }

    async checkBlock(){
        let block = await this.web3.eth.getBlock('latest');
        let number = block.number;
        console.log(`searching block number: ${number}`);

        if (block != null && block.transactions != null)
        {
            for (let txHash of block.transactions)
            {
                let tx = await this.web3.eth.getTransaction(txHash);
                console.log(tx)
                if (this.account == tx.to )
                {
                    console.log('Transaction found on block: ' + number);
                    console.log({address: tx.from, value: this.web3.utils.fromWei(tx.value, 'ether'), timestamp: new Date()});
                }
            }
        }

    }

}

dotenv.config()

let txChecker = new TransactionChecker(process.env.PROJECT_ID,process.env.WALLET_ADDRESS)

setInterval( () => 
{
    txChecker.checkBlock();
}
    ,15 * 1000
)
