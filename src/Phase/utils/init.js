const { ethers } = require('ethers')

const { abi } = require('./MetaPhase.json')

const { alchemy, privateKey } = require('./config.json')

const phase_address = "0xa1f4d3f7c5c144f239cf044589f4d8c6205049a3"

const provider = new ethers.providers.JsonRpcProvider(alchemy)
const signer = new ethers.Wallet(privateKey, provider);
const phase = new ethers.Contract(phase_address, abi, signer)

exports.phase = phase
exports.signer = signer