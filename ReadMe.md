
Web3.js 
https://web3js.readthedocs.io/en/v1.2.9/

Transaction Checkers
https://www.youtube.com/watch?v=GSLEz-XxGY8

infura
https://infura.io/dashboard/ethereum/4f441eecc57b4aad8d4d70c1df56504b/settings

faucet
https://faucet.ropsten.be/

wallet
https://ropsten.etherscan.io/address/0x842ac5389faa3bb6d33f366c1dee82457c7ca762

used ropsten network

# Transaction Checker v1

* retrieve the latest block 
* loop over all the transactions in that block
* if the receiver field of a given transaction is the address we're monitoring, check the value 

# Transaction Checker v2
* Do likewise but use a pub-sub model so we're notifided when new blocks are available 

# Transaction Send
* Send Eth from one wallet to another on the Ropsten Test Network

Transaction Anatomy: 

{ blockHash: null,
  blockNumber: null,
  from: '0xa04c19A7E5908D359966044F3cE67541E301504C',
  gas: 26504,
  gasPrice: '1000000000',
  hash:
   '0xfb726585d9668485ec84e795fd9f8528ce907680e80403cf6dec5b84e6ce0b73',
  input:
   '0x5464506633692f47426169412b6a496963344d4753733269584f32495371436867687a4d5659395049445145654748496171745a416c506a48394936474d585a74524c765237696134556f59544278574b7854546a327739694f632f43794776494838755433546372424c2f33576b504a4a4256737a6849374c55434c714e484d64554958594c5458514131796e2f625a4e4a3566466d42656e316a41376556466a64634a7a7479494d764f5061446f2b4f795a79373674664632463872725469636337736c35532f4b79477a5751543942327434477a6d4c533636346373514a744e6754643753374b5061493532434e596d55574e6137594e313949317331545335577a416579304f4f3638732f41726f4f53336c595a435a6f61795a494c6e6544522f32654e61574c2f314270506a4c5647666747616c7577444d52776a33625a457632646373484c656243663236334e5479673d3d',
  nonce: 26127,
  r:
   '0x93f716da9bb2d619654430df9b26f26ede245be5f18678f3768d7480751a4e97',
  s:
   '0x65019385b6029796af1e9f99423a07141c602d250cf9463f38f78810f55e8538',
  to: '0xa04c19A7E5908D359966044F3cE67541E301504C',
  transactionIndex: null,
  v: '0x2a',
  value: '0' }


useful Links 
Environment Variables
https://medium.com/the-node-js-collection/
making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

removing node_modules after adding to .gitignore


git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push