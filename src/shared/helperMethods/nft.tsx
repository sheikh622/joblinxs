var w3 = require("web3");
const RPCNetwork =
  "https://speedy-nodes-nyc.moralis.io/99023a036ee87e30f43f4724/eth/mainnet";
var W3 = new w3(RPCNetwork);
const DefaultPinataURI = "https://gateway.pinata.cloud/ipfs/";
//var Contract = require('./contractInfo.json')
const DefaultETHSCANURI =
  "https://api.etherscan.io/api?module=contract&action=getabi&address=";

async function GetNFTImageUrl(ContractAddress, nftId) {
  let ABI = await GetABI("Eth", ContractAddress);
  const NFTContract = new W3.eth.Contract(ABI, ContractAddress);
  let result = await NFTContract.methods.tokenURI(nftId).call();
  let CorrectUrl = DefaultPinataURI + result.substring(7);
  let response = await GetJson(CorrectUrl);
  let refine = response.image;
  return refine;
}

async function getRawJsonData(Url) {
  var contractABI = [];
  let RawJson = await GetJson(Url);
  contractABI = JSON.parse(RawJson.result);
  return contractABI;
}

async function GetJson(url) {
  const axios = require("axios");
  let a = await axios.get(url);
  return a.data;
}

async function GetABI(Network, ContractAddress) {
  let SelectedNetwork: any = [];
  if (Network === "Eth") {
    SelectedNetwork = DefaultETHSCANURI;
  } else if (Network === "BSC") {
  } else if (Network === "TestNetwork") {
  } else {
  }
  let url: any = SelectedNetwork + ContractAddress;
  let response = await getRawJsonData(url);
  if (response != []) {
    return response;
  } else {
    return false;
  }
}

export default async function getUserNfts(
  network,
  contractAddress,
  userAddress,
  setNftListData,
  setIsLodaing
) {
  // setIsLodaing(true);

  let ABI = await GetABI(network, contractAddress);
  const ERC721: any = new W3.eth.Contract(ABI, contractAddress);

  let balance: any = await ERC721.methods.balanceOf(userAddress).call();
  console.log(balance);

  var objects: any = [];
  var tokens: any = [];
  for (var i = 0; i < balance; i++) {
    try{
      tokens.push(
        await ERC721.methods.tokenOfOwnerByIndex(userAddress, i).call()
      );
    }
    catch(err){console.log("error",err)}
   
  }

  for (var i = 0; i < tokens.length; i++) {
    objects.push(await ERC721.methods.tokenURI(tokens[i]).call());
  }
  let imagesUri = await getNftImageUri(objects);
  let nftInfo = [{ tokenIds: tokens, tokenImgUri: imagesUri }];
  console.log("nftInfo", nftInfo);
  setNftListData(nftInfo);
  // setIsLodaing(false);s
  return nftInfo;
}

async function getNftImageUri(nfts) {
  var Data: any = [];
  for (let i = 0; i < nfts.length; i++) {
    let correctUrl = DefaultPinataURI + nfts[i].substring(7);
    let response = await GetJson(correctUrl);
    let correctImageUrl: any = DefaultPinataURI + response.image.substring(7);
    Data.push(correctImageUrl);
  }
  return Data;
}


