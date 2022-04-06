//Module Created by Xobi
//Date created 4-1-2019
//Date Updated 11-3-2021--	New tx Object merge with this Module and Automatic create tx Object for you
//version 1.4

//Contract address
const tokenInterface = require('./TokenInterface.json')
//const rPCNetwork = 'HTTP://127.0.0.1:7545'
const rPCNetwork =
  'https://speedy-nodes-nyc.moralis.io/99023a036ee87e30f43f4724/eth/mainnet'
//---------------------------------------------
const DAC = '0xeB48B57c8B0E04DfAfd09465F39614912c8AB67f'
const privateKey =
  'da498c3f03728e26da2c70d02dffae6fb4828d5367e75cc22dbbb330adefb588'
//---------------------------------------------

function CreateTX(fromAddress, toAddress, gasLimit, data_) {
  const tx = {
    // this could be provider.addresses[0] if it exists
    from: fromAddress,
    // target address, this could be a smart contract address
    to: toAddress,
    // optional if you want to specify the gas limit
    gas: gasLimit,
    // optional if you are invoking say a payable function
    //value: value, //We Don't need the Value attribute
    // this encodes the ABI of the method and the arguements
    //myContract.methods.myMethod(arg, arg2).encodeABI()  sample here to understand
    data: data_,
  }
  return tx
}

function ReturnValidNode(){
}






//Export Variables list...
module.exports.STAddress = tokenInterface.Address
module.exports.STABI = tokenInterface.ABI
module.exports.Tx = CreateTX
module.exports.DistributerAC = DAC
module.exports.PK = privateKey
module.exports.RPCNetwork = rPCNetwork
