const { ethers } = require('ethers')

const { abi } = require('./MetaPhase.json')

const { alchemy, privateKey } = require('./config.json')

const phase_address = "0xd7606503462d66daae54884ad684e5a7e17148d9"

const provider = new ethers.providers.JsonRpcProvider(alchemy)
const signer = new ethers.Wallet(privateKey, provider);
const phase = new ethers.Contract(phase_address, abi, signer)

exports.phase = phase
exports.signer = signer