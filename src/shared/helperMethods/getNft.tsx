
import React, { useEffect } from "react";
const Config = require("./Config");
var w3 = require("web3");
var W3 = new w3(Config.RPCNetwork);
const DefaultPinataURI = "https://gateway.pinata.cloud/ipfs/";





  export default async function GetAllNft(network, contractAddress, startRange, endRange) {
    let ABI = Config.STABI;
    const ERC721 = new W3.eth.Contract(ABI, contractAddress);
    var objects: any = [];
    var tokens: any = [];
    objects = [];
  
    for (var i = startRange; i < endRange; i++) {
      objects.push(await ERC721.methods.tokenURI(i).call());
    }
  
    let imagesUri = await getNftImageUri(objects);
  
    let cN = await GetContractName("Eth", contractAddress);
    let tS = await GetTotalSupply("Eth", contractAddress);
    let nftInfo = { collectionName: cN, totalSupply: tS, tokenImgUri: imagesUri };
    return nftInfo;
  }
  
  








async function GetJson(url) {
  const axios = require("axios");
  let a = await axios.get(url);
  return a.data;
}

async function GetContractName(network, contractAddress) {

  let ABI = Config.STABI;
  const ERC721 = new W3.eth.Contract(ABI, contractAddress);
  let userAddress = await ERC721.methods.name().call();
  return userAddress;
}

async function getNftImageUri(nfts) {
  var Data: any = [];
  console.log(nfts.length);
  for (let i = 0; i < nfts.length; i++) {
    let correctUrl = CorrectMeta(nfts[i]);
    try {
      let response = await GetJson(correctUrl);

      let correctImageUrl = CorrectMeta(response.image);
      Data.push(correctImageUrl);
    } catch (error) {
      return { error: "Unable to Process" };
    }
  }
  return Data;
}

function CorrectMeta(Info) {
  let Sstring = Info.slice(0, -(Info.length - 7));
  if (Sstring == "ipfs://") {
    Info = DefaultPinataURI + Info.substring(7);
    return Info;
  } else {
    return Info;
  }
}
async function GetTotalSupply(network, contractAddress) {
  let ABI = Config.STABI;
  const ERC721 = new W3.eth.Contract(ABI, contractAddress);
  let owner = await ERC721.methods.totalSupply.call().call();
  return owner;
}


// GetAllNft('Eth', '0x25C65721E26fa5F3c97f129F4e24972482327BC9', 0,10,"","").then(
//   (result) => {
//     console.log("results i want to seee",result)
//   },
// )



